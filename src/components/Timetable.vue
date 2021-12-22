<template>
  <ion-grid style="width: 100%; height: 100%" class="container">
    <!-- Check, ob 'subjects' Objekt einträge hat, ansonsten wird das 
      Grid nicht gerendert (führt sonst zu Fehlern) -->
    <ion-row style="height: 10%" class="days">
      <!-- Reihe für die Wochentage -->
      <ion-col></ion-col>
      <ion-col>Mo</ion-col>
      <ion-col>Di</ion-col>
      <ion-col>Mi</ion-col>
      <ion-col>Do</ion-col>
      <ion-col>Fr</ion-col>
    </ion-row>

    <ion-row style="height: 10%" v-for="tp in timeperiods" :key="tp.display">
      <!-- 10 Reihen, da wir nicht mehr als 10 Stunden pro Tag haben. -->
      <ion-col class="timeperiods" v-html="tp.display"></ion-col>
      <!-- In 'timeperiods' sind die Uhrzeiten eingetragen, v-for iteriert durch -->
      <ion-col
        class="subject_columns"
        v-for="date_val in dates"
        :key="date_val"
      >
        <div v-for="table_data in timetable" :key="table_data.id">
          <div
            v-if="
              table_data.startTime === tp.startTime &&
              table_data.date === date_val
            "
            class="subjc"
          >
            <span
              class="subject-item"
              v-for="subject in table_data.su"
              :key="subject.id"
              >{{
                table_data.startTime === tp.startTime &&
                table_data.date === date_val
                  ? subject.name
                  : null
              }}</span
            >
          </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      timetable: [],
      timeperiods: [
        {
          display: "07:45 <br>-<br> 08:30",
          startTime: 745,
          endTime: 830,
        },
        {
          display: "08:30 <br>-<br> 09:15",
          startTime: 830,
          endTime: 915,
        },
        {
          display: "09:30 <br>-<br> 10:15",
          startTime: 930,
          endTime: 1015,
        },
        {
          display: "10:15 <br>-<br> 11:00",
          startTime: 1015,
          endTime: 1100,
        },
        {
          display: "11:15 <br>-<br> 12:00",
          startTime: 1115,
          endTime: 1200,
        },
        {
          display: "12:00 <br>-<br> 12:45",
          startTime: 1200,
          endTime: 1245,
        },
        {
          display: "13:15 <br>-<br> 14:00",
          startTime: 1315,
          endTime: 1400,
        },
        {
          display: "14:00 <br>-<br> 14:45",
          startTime: 1400,
          endTime: 1445,
        },
      ],

      dates: [20211220, 20211221, 20211222, 20211223, 20211224],
    };
  },
  created() {
    let class_name = "ita3a"; // Klasse ist noch statisch eingetragen
    this.$store.dispatch("viewTimetable", class_name).then(() => {
      this.timetable = this.$store.getters.getTimetable; // Über den Getter bei Vuex werden die Daten geholt.
    });
  },
  methods: {
    convertDate(date, time) {
      // Datum und Zeit werden hier in JavaScript Date Objects konvertiert,
      // da die UntisAPI unbekannte Formate als Datum benutzt.
      // Bsp. : '20211201'

      let year = date.toString().substring(0, 4);
      let month = date.toString().substring(4, 6);
      let day = date.toString().substring(6, 8);

      if (time) {
        let hours =
          time.toString().length == 4
            ? time.toString().substring(0, 2)
            : time.toString().substring(0, 1);
        let minutes =
          time.toString().length == 4
            ? time.toString().substring(2, 4)
            : time.toString().substring(1, 3);

        return new Date(year, month - 1, day, hours, minutes);
      } else {
        return new Date(year, month - 1, day);
      }
    },
    getDaysArray(start, end) {
      for (
        var arr = [], dt = new Date(start);
        dt <= end;
        dt.setDate(dt.getDate() + 1)
      ) {
        arr.push(new Date(dt));
      }
      return arr;
    },
    getMonday() {
      var d = new Date();
      var day = d.getDay();
      var diff = d.getDate() - day + (day == 0 ? -6 : 1);
      return this.convertDate(new Date(d.setDate(diff)));
    },
  },
});
</script>

<style scoped>
.container {
  font-size: 9pt;
  text-align: center;
}
.timeperiods {
  font-size: 11px;
  text-align: center;

  min-width: 45px;
  max-width: 55px;

  background-color: var(--ion-color-primary);

  padding: 5px;
  margin-top: 5px;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  border-top-left-radius: none;
  border-bottom-left-radius: none;
}
.subject-item {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 9pt;

  padding-top: 10px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-left: 5px;

  border-radius: 5px;
  background-color: none;
}
/* Make every odd indexed column be a different color for contrast */
.subject_columns:nth-child(odd) {
  background-color: var(--ion-color-step-200);
}
/* Make every even indexed column be a different color for contrast */
.subject_columns:nth-child(even) {
  background-color: var(--ion-color-step-100);
}
/* Make current day color the column differently */
/* .subject_columns:nth-child(3){
  background-color: red;
} */
/* On Hover: Basically 'On-Touch' on phones. */
/* .subject-item:hover{
  transition: 10ms;
  background-color: blue;
} */

.subject_columns {
  display: flex;
  flex-direction: row;

  margin-top: 5px;
  margin-left: 5px;

  min-width: 3em;
  max-width: 4;

  border-radius: 5px;
}
.days {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: var(--ion-color-step-50);
}
.days ion-col {
  text-align: center;
  color: var(--ion-color-secondary);
}
.days ion-col:nth-child(2n + 0) {
  background-color: var(--ion-color-step-100);
}
</style>
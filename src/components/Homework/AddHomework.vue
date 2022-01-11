<template>
  <div class="container">
    <form @submit.prevent="addHomework">
      <ion-item lines="full">
        <ion-label position="floating">Titel</ion-label>
        <ion-input
          v-model="homework.homework_title"
          type="text"
          required
        ></ion-input>
      </ion-item>

      <ion-item lines="full">
        <ion-label position="floating">Beschreibung</ion-label>
        <ion-textarea
          v-model="homework.homework_description"
          type="email"
          required
        ></ion-textarea>
      </ion-item>

      <div class="grid-item">
        <ion-button style="width: 100%" fill="outline" id="open-modal"
          >Datum hinzufügen</ion-button
        >
        <ion-modal v-model="selectedDate" trigger="open-modal">
          <ion-content force-overscroll="false">
            <ion-datetime
              @ionChange="addDate($event)"
              display-format="YYYY"
            ></ion-datetime>
          </ion-content>
        </ion-modal>
      </div>

      <ion-row>
        <ion-col>
          <ion-button @click="cancelModal" color="danger" expand="block"
            >Abbrechen</ion-button
          >
          <ion-button type="submit" color="primary" expand="block"
            >Erstellen</ion-button
          >
        </ion-col>
      </ion-row>
    </form>
  </div>
</template> 

<script>
import {
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonCol,
  IonRow,
  IonTextarea,
  IonDatetime,
  IonModal,
  IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonCol,
    IonRow,
    IonTextarea,
    IonDatetime,
    IonModal,
    IonContent,
  },
  data() {
    return {
      homework: {
        homework_title: "",
        homework_description: "",
        homework_date_due: "",
      },
      selectedDate: "",
    };
  },
  methods: {
    addHomework() {
      this.$emit("addHomework", this.homework);
    },
    addDate(ev) {
      this.homework.homework_date_due = ev.detail.value;
    },
    cancelModal() {
      this.$emit("cancelModal");
    },
  },
  setup() {},
});
</script>


<style scoped>
.container {
  padding: 20px;
}
:root {
  --ion-safe-area-top: 20px;
  --ion-safe-area-bottom: 22px;
}

ion-content {
  --background: #f2f2f7;
}

ion-datetime {
  height: auto;
  width: auto;

  max-width: 350px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  grid-gap: 0 10px;
}

ion-modal {
  --width: 290px;
  --height: 382px;
  --border-radius: 8px;
}

ion-modal ion-datetime {
  height: 382px;
}
</style>
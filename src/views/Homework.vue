<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <main>
      <ion-segment v-model="homework_list_type">
        <ion-segment-button value="current">
          <ion-label>Aktuell</ion-label>
        </ion-segment-button>
        <ion-segment-button value="completed">
          <ion-label>Fertig</ion-label>
        </ion-segment-button>
      </ion-segment>
      <div v-if="homework_list_type === 'current' && currentHomework">
        <app-homework-item
          v-for="hw_item in currentHomework"
          :key="hw_item.id"
          :homework="hw_item"
        ></app-homework-item>
      </div>
      <div
        v-if="homework_list_type === 'completed' && completedHomework.length"
      >
        <app-homework-item
          v-for="hw_item in completedHomework"
          :key="hw_item.id"
          :homework="hw_item"
        ></app-homework-item>
      </div>
      <div
        v-else-if="
          homework_list_type === 'completed' && completedHomework.length === 0
        "
      >
        <h2 style="text-align: center">
          Du hast keine erledigten Hausaufgaben 😕
        </h2>
      </div>
      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button class="floating-btn">+</ion-fab-button>
        <ion-fab-list side="start">
          <ion-fab-button><ion-icon :icon="add"></ion-icon></ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </main>
  </ion-page>
</template>

<script>
import {
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonMenuButton,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { add, filterOutline } from "ionicons/icons";

import HomeworkItem from "@/components/Homework/HomeworkItem.vue";

export default defineComponent({
  components: {
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonMenuButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonPage,
    IonFab,
    IonFabButton,
    IonIcon,
    IonFabList,
    "app-homework-item": HomeworkItem,
  },
  data() {
    return {
      homework_list_type: "current",
    };
  },
  created() {
    /*     this.$store.dispatch("loadHomework");
     */
  },
  computed: {
    currentHomework() {
      return this.$store.getters.getHomework.filter(
        (hw) => hw.homework_done === false
      );
    },
    completedHomework() {
      return this.$store.getters.getHomework.filter(
        (hw) => hw.homework_done === true
      );
    },
  },
  setup() {
    return { add, filterOutline };
  },
});
</script>

<style scoped>
.floating-btn {
  align-self: center;
  margin-bottom: 5%;
  text-transform: none;
  font-size: 32px;
}
</style>
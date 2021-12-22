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
    <app-timetable></app-timetable>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonButtons,
} from "@ionic/vue";
import { defineComponent } from "vue";

import Timetable from "@/components/Timetable.vue";

export default defineComponent({
  components: {
    IonPage,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonButtons,
    "app-timetable": Timetable,
  },
});
</script>

<style scoped>
</style>
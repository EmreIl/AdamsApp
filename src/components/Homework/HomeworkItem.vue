<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ homework.homework_title }}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{ homework.homework_description }}
    </ion-card-content>
  </ion-card>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  },
  props: ["homework"],
});
</script>

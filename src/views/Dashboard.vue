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

    <div class="ion-margin-vertical" style="padding-bottom: 5rem">
      <ion-card class="ion-padding">
        <ion-card-header>
          <ion-card-title>Stundenplan</ion-card-title>
          <ion-item-divider color="none" class="divider"></ion-item-divider>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle class="change-date">{{
            new Date().toLocaleDateString({ weekday: "long" }) +
            " der " +
            new Date().toLocaleDateString()
          }}</ion-card-subtitle>
        </ion-card-content>
      </ion-card>

      <ion-card class="ion-padding">
        <ion-card-header>
          <ion-card-title>Termine</ion-card-title>
          <ion-item-divider color="none" class="divider"></ion-item-divider>
        </ion-card-header>
        <ion-card-content>
          <ion-card-subtitle>Klausuren</ion-card-subtitle>
          <ion-card-content></ion-card-content>
          <ion-card-subtitle>Sonstige Termine</ion-card-subtitle>
          <ion-card-content></ion-card-content>
        </ion-card-content>
      </ion-card>

      <ion-card class="ion-padding ion">
        <ion-card-header>
          <ion-card-title name="title">Hausaufgaben</ion-card-title>
          <ion-item-divider
            name="line"
            color="none"
            class="divider"
          ></ion-item-divider>
        </ion-card-header>
      </ion-card>
    </div>
  </ion-page>
</template> 

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonCardTitle,
  IonItemDivider,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCard,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonCardTitle,
    IonItemDivider,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonCard,
  },
  setup() {
    return {};
  },
  methods: {},
  beforeMount() {},
});
</script>

<style scoped>
.trans-back {
  background: none;
}
.empty-margin {
  margin: 20px 0px;
}
.floating-btn {
  align-self: center;
  margin-bottom: 5%;
  text-transform: none;
  font-size: 32px;
}
.change-date {
  text-transform: lowercase !important;
}
.change-date::first-letter {
  text-transform: uppercase !important;
}
.divider {
  min-height: 2px !important;
  background: linear-gradient(
    to right,
    var(--ion-color-primary) 0%,
    var(--ion-color-primary) 30%,
    var(--ion-card-background) 100%
  );
}

.empty-spacer {
  min-height: 5rem;
}
</style>
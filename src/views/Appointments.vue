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
    <ion-segment value="other">
      <ion-segment-button value="other"> Termine </ion-segment-button>
      <ion-segment-button value="exams"> Klausuren </ion-segment-button>
    </ion-segment>

    <div class="ion-margin-vertical">
      <ion-item-sliding>
        <ion-item>
          <ion-label>Inhalt</ion-label>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option color="danger">Löschen</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </div>
    <ion-fab vertical="bottom" horizontal="end">
      <ion-fab-button class="floating-btn">+</ion-fab-button>
      <ion-fab-list side="start">
        <ion-fab-button href="#" name="termine"
          ><ion-icon :icon="calendar"></ion-icon
        ></ion-fab-button>
        <ion-fab-button href="#" name="klausuren"
          ><ion-icon :icon="book"></ion-icon
        ></ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </ion-page>
</template>

<script>
import {
  IonSegment,
  IonSegmentButton,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabList,
  IonFabButton,
  IonIcon,
  IonMenuButton,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonPage,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { book, calendar } from "ionicons/icons";

export default defineComponent({
  components: {
    IonSegment,
    IonSegmentButton,
    IonItemSliding,
    IonItem,
    IonLabel,
    IonItemOptions,
    IonItemOption,
    IonFab,
    IonFabList,
    IonFabButton,
    IonIcon,
    IonMenuButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonPage,
  },
  setup() {
    return {
      book,
      calendar,
    };
  },
});
</script>

<style>
.divider {
  min-height: 2px !important;
  background: linear-gradient(
    to right,
    var(--ion-color-primary) 0%,
    var(--ion-color-primary) 30%,
    var(--ion-card-background) 100%
  );
}
.floating-btn {
  align-self: center;
  margin-bottom: 5%;
  text-transform: none;
  font-size: 32px;
}
</style>
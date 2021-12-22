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
    <ion-card class="ion-padding">
      <ion-card-header>Konto</ion-card-header>
      <ion-card-content class="text-center">
        <ion-text>Max Mustermann</ion-text><br /><br />
        <ion-button color="primary" size="small" @click="logout"
          >Abmelden</ion-button
        >
      </ion-card-content>
    </ion-card>

    <ion-card class="ion-padding">
      <ion-card-header>Darstellung</ion-card-header>
      <ion-card-content>
        <ion-toolbar class="toolbar">
          <ion-segment value="all">
            <ion-segment-button value="system"> System </ion-segment-button>
            <ion-segment-button value="dark"> Dunkel </ion-segment-button>
            <ion-segment-button value="light"> Hell </ion-segment-button>
          </ion-segment>
        </ion-toolbar>
      </ion-card-content>
    </ion-card>

    <ion-card class="ion-padding">
      <ion-card-header>Benachrichtungen</ion-card-header>
      <ion-card-content>
        <ion-toolbar class="toolbar">
          <ion-segment>
            <ion-segment-button value="an"> An </ion-segment-button>
            <ion-segment-button value="wichtig"> Wichtig </ion-segment-button>
            <ion-segment-button value="aus"> Aus </ion-segment-button>
          </ion-segment>
        </ion-toolbar>
      </ion-card-content>
    </ion-card>

    <ion-card class="ion-padding">
      <ion-card-content class="text-center">
        <ion-button color="light" size="small" class="ion-align-center"
          >Datenschutz</ion-button
        >
        <ion-button color="light" size="small" class="ion-align-center"
          >Impressum</ion-button
        >
      </ion-card-content>
    </ion-card>
  </ion-page>
</template>

<script>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonButton,
  IonToolbar,
  IonText,
  IonSegment,
  IonSegmentButton,
  IonMenuButton,
  IonButtons,
  IonTitle,
  IonHeader,
  IonPage,
} from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonButton,
    IonToolbar,
    IonText,
    IonSegment,
    IonSegmentButton,
    IonMenuButton,
    IonButtons,
    IonTitle,
    IonHeader,
    IonPage,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style>
.toolbar {
  --background: none;
}
.text-center {
  text-align: center;
}

ion-segment-button {
  min-width: 5px;
}
</style>
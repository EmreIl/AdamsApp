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
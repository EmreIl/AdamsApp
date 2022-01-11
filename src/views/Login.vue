<template>
  <ion-page>
    <div class="container">
      <div class="center">
        <img id="app-logo" src="@/../public/assets/icon/logo.svg" />
        <form>
          <ion-item>
            <ion-label position="floating">Username</ion-label>
            <ion-input
              v-model="user.username"
              placeholder="Gebe deinen Usernamen ein..."
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Schlüssel</ion-label>
            <ion-input
              v-model="user.key"
              type="password"
              placeholder="Gebe deinen Schlüssel ein..."
            ></ion-input>
          </ion-item>
          <ion-button
            style="margin-top: 20px"
            @click="login"
            color="primary"
            expand="block"
            size="medium"
            >Login</ion-button
          >
        </form>
      </div>
      <ion-loading
        :is-open="$store.getters.authStatus === 'loading'"
        message="Bitte warten..."
      >
      </ion-loading>
    </div>
  </ion-page>
</template>


<script>
import {
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonLoading,
  toastController,
} from "@ionic/vue";
import { defineComponent } from "vue";

import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonLoading,
  },
  data() {
    return {
      user: {
        username: "",
        key: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.user).then(() => {
        if (this.$store.getters.authStatus == "success") {
          this.router.push("/dashboard");
        } else if (this.$store.getters.authStatus == "error") {
          this.showToast();
        }
      });
    },
    async showToast() {
      const toast = await toastController.create({
        message: "Anmeldung fehlgeschlagen",
        duration: 2000,
      });
      return toast.present();
    },
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push("/dashboard");
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.center {
  width: 90%;
}
#app-logo {
  width: 12em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
<template>
  <v-app id="inspire2">
    <MainApp v-if="state == 1" />
    <PasswortModal v-if="state == 0" />
  </v-app>
</template>

<script>
import { getAllUsers } from "./apiService/userService.js";
console.log(getAllUsers());
import MainApp from "./components/MainApp.vue";
import PasswortModal from "./components/PasswortModal.vue";

export default {
  name: "app",
  components: {
    PasswortModal,
    MainApp,
  },
  data: () => ({ drawer: null, state: 1 }),
};
</script>
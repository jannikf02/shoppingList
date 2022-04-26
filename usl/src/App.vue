<template>
  <v-app id="inspire2" mx-md-5>
    <div class="size_wrapper">
    <MainApp v-if="state == 1" />
    <PasswortModal v-if="state == 0" />
    <MenuBar v-if="state == 1" />
    <ContainerCon v-if="state == 1" />
    </div>
    <FooterBar v-if="state == 1" />
    <CookieLaw v-if="state == 1" />
    
  </v-app>
</template>

<script>
import { getAllUsers } from "./apiService/userService.js";
console.log(getAllUsers());
import MainApp from "./components/MainApp.vue";
import PasswortModal from "./components/PasswortModal.vue";
import MenuBar from "./components/MenuBar.vue";
import FooterBar from "./components/FooterBar.vue";
import ContainerCon from "./components/ContainerCon.vue";
import CookieLaw from "./components/CookieLaw.vue";



export default {
  name: "app",
  components: {
    PasswortModal,
    MainApp,
    MenuBar,
    ContainerCon,
    FooterBar,
    CookieLaw
  },
  data: () => ({ drawer: null, state: 1 }),
};
</script>


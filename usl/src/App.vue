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
import { bus } from './main';
import MainApp from "./components/MainApp.vue";
import PasswortModal from "./components/PasswortModal.vue";
import MenuBar from "./components/MenuBar.vue";
import FooterBar from "./components/FooterBar.vue";
import ContainerCon from "./components/ContainerCon.vue";
import CookieLaw from "./components/CookieLaw.vue";
import {isLoggedIn,createLoginUser} from "./apiService/userService";

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
  methods:{

  },
  async created(){
    const loggedin = await isLoggedIn();
    this.state = loggedin?1:1;
    bus.$on("logIn",async(email,password)=>{
      const loggedin = await isLoggedIn() 
      if(!loggedin){
        await createLoginUser(email,password);
        if(!(await isLoggedIn())){
          return;
        }
      }
      this.state = 1;
    })
  }
};
</script>


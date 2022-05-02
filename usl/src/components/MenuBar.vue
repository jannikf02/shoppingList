<template>
<div>
    <v-navigation-drawer
      v-model="drawer"
      :max-width="width"
      src="../assets/img/nav-draw-bg.jpg"
      app
    >
    <v-card
      style="margin:10px"
      :max-width="width"
    >
    <v-img src="../assets/img/nav-draw-bg-top.png" :max-width="width"/>
      <v-card-text  
      >
      Wilkommen {{user}}
      </v-card-text>
      <v-divider></v-divider>
      <v-card-subtitle>
        Dir stehen folgende Optionen zur Auswahl:
      </v-card-subtitle>
    </v-card>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
</div>
</template>

<script>
export default {
  name: "MenuBar",

  data: () => ({
    drawer:true,
    user:"gamer0738@gmail.com"
  }),
  computed: {
      width () {
          console.log("test")
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "300px"
          case 'sm': return "300px"
          case 'md': return "500px"
          case 'lg': return "500px"
        }
        return "500px"
      }
    },
};
</script>
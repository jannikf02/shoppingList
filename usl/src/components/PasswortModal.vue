<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      :width="width"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-toolbar-title>Bitte Einloggen</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>Log In für die Einkaufsliste</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Bitte geben Sie ihre Einloggdaten ein. Diese werden für Sie gespeichert</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
              <v-list-item>
              <v-text-field
                label="E-Mail"
                :rules="rules"
                hide-details="auto"
                width="50%"
                > 
              
                </v-text-field>
                </v-list-item>
                <v-list-item>
                <v-text-field
                label="Passwort"
                :rules="rules"
                hide-details="auto"
                width="50%"
                >
                                    
                </v-text-field>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
         
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
         <!-- <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>-->
        </v-list>
      </v-card>
    </v-dialog>
    <v-fab-transition>
      <v-btn
        v-show="!hidden"
        color="blue"
        dark
        fixed
        bottom
        right
        fab
        @click="sendData"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-row>
</template>

<script>
  export default {
    name: 'PasswortModal',

    data: () => ({
        dialog:true
    }),
    computed: {
      width () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "100%"
          case 'sm': return "90%"
          case 'md': return "80%"
          case 'lg': return "80%"
        }
        return "80%"
      },
      widthBtn () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "40%"
          case 'sm': return "50%"
          case 'md': return "60%"
          case 'lg': return "70%"
        }
        return "80%"
      },
    },
    methods:{
      sendData: function(){
        console.log("Data")
      }
    }
  }
</script>
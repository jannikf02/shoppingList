<template>

  <v-row justify="center">

    <v-dialog
      v-model="dialog"
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
              <v-list-item-title>Bitte geben Sie ihre Einloggdaten ein.<br>Diese werden für Sie gespeichert</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
              <v-list-item>
              <v-text-field
              v-model="email"
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
                v-model="password"
                :rules="rules"
                hide-details="auto"
                width="50%"
                >
                                    
                </v-text-field>
                  <v-fab-transition>
                    <v-btn
                      color="blue"
                      dark
                      fab
                      style="float:right"
                      @click="sendData"
                    >
                      <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-fab-transition>
              </v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>

  </v-row>
</template>

<script>

import { bus } from '../main';

  export default {
    name: 'PasswortModal',

    data: () => ({
        dialog:true,
        email:"",
        password:""
    }),
    computed: {
      width () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "100%"
          case 'sm': return "90%"
          case 'md': return "50%"
          case 'lg': return "40%"
        }
        return "40%"
      }
    },
    methods:{
      sendData: function(){
        bus.$emit("logIn",this.email,this.password);        
      }
    }
  }
</script>
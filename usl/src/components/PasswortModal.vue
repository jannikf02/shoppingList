<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
      hide-overlay
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
              <v-list-item-title>Bitte Ihren Zugangscode eingeben.</v-list-item-title>
              <v-list-item-subtitle>Falls Sie noch keinen haben, erfinden Sie einen.</v-list-item-subtitle>
              <v-list-item-subtitle>
              <v-text-field
                label="Zugangscode"
                :rules="rules"
                hide-details="auto"
                width="50%"
                >

                <v-btn
                    slot="append"
                  color="success"
                  dark
                  @click="getAllUsers()">
                  Bestätigen
                  </v-btn>
                </v-text-field>
              </v-list-item-subtitle>
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
  </v-row>
</template>

<script>
  export default {
    name: 'PasswortModal',

    data: () => ({
        dialog:true
    })
  }
</script>
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <template>
            <v-col class="mt-2" cols="12">
              <strong>Einzukaufen:</strong>
            </v-col>

            <v-col v-for="j in 5" :key="`${n}${j}`" cols="12" md="12">
              <v-divider></v-divider>
              <v-sheet height="fit-content">
                <v-row>
                  <v-col class="d-flex col justify-center align-center">
                    <div class="itemName">Salami</div>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col class="d-flex col justify-center align-center">
                    <div class="itemCount">5</div>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col class="d-flex col justify-center align-center">
                    <v-checkbox></v-checkbox>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>

            <v-col class="mt-2" cols="12">
              <strong>Eingekauft:</strong>
            </v-col>

            <v-col v-for="j in 5" :key="`${n}${j}`" cols="12" md="12">
              <v-divider></v-divider>
              <v-sheet height="fit-content">
                <v-row>
                  <v-col class="d-flex col justify-center align-center">
                    <div class="itemName">Salami</div>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col class="d-flex col justify-center align-center">
                    <div class="itemCount">5</div>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col class="d-flex col justify-center align-center">
                    <v-checkbox></v-checkbox>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </template>
        </v-row>
        <v-row>
          <v-dialog v-model="dialog" max-width="600px" transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-fab-transition>
                <v-btn v-show="!hidden" color="blue" dark fixed bottom right fab v-bind="attrs" v-on="on">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-fab-transition>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark v-on:click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Hinzufügen</v-toolbar-title>
              </v-toolbar>
              <v-card-title>
                <span class="text-h5">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="Produkt" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select :items="items" label="Menge"></v-select>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="onClickOutside">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Save
                </v-btn>
              </v-card-actions>

            </v-card>
          </v-dialog>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "ContainerCon",

    data: () => ({
      dialog: false,
      drawer: null,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      items: [

      ]
    }),
    created() {
      for (let i = 0; i < 30; i++) {
        this.items.push({ text: `${i + 1}`, value: i + 1 });
      }
    }, 
    methods: {
      onClickOutside() {
        this.dialog = false;
      }
    }
    
  };
</script>
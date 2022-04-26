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
                    <v-fab-transition>
                        <v-btn
                        v-show="!hidden"
                        color="blue"
                        dark
                        fixed
                        bottom
                        right
                        fab
                        >
                        <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-fab-transition>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ContainerCon",

  data: () => ({
    drawer: null,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
};
</script>
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

            <v-col
              v-for="uncrossed in uncrossedItems"
              :key="uncrossed.name"
              cols="12"
              md="12"
            >
              <v-divider></v-divider>
              <v-sheet height="fit-content">
                <v-row>
                  <v-col class="d-flex col justify-center align-center">
                    <div class="itemName">{{ uncrossed.name }}</div>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col class="d-flex col justify-center align-center">
                    <div class="itemCount">{{ uncrossed.count }}</div>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col class="d-flex col justify-center align-center">
                    <v-checkbox
                      v-model="uncrossed.crossed"
                      @click="crossItem(uncrossed.uid)"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>

            <v-col class="mt-2" cols="12">
              <strong>Eingekauft:</strong>
            </v-col>

            <v-col
              v-for="crossed in crossedItems"
              :key="crossed.name"
              cols="12"
              md="12"
            >
              <v-divider></v-divider>
              <v-sheet height="fit-content">
                <v-row>
                  <v-col class="d-flex col justify-center align-center">
                    <div class="itemName">
                      <del>{{ crossed.name }}</del>
                    </div>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col class="d-flex col justify-center align-center">
                    <div class="itemCount">{{ crossed.count }}</div>
                  </v-col>
                  <v-divider vertical></v-divider>
                  <v-col class="d-flex col justify-center align-center">
                    <v-checkbox
                      v-model="crossed.crossed"
                      @click="uncrossItem(crossed.uid)"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </template>
        </v-row>
        <v-row>
          <v-dialog
            v-model="dialog"
            max-width="600px"
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-fab-transition>
                <v-btn
                  v-show="!hidden"
                  color="blue"
                  dark
                  fixed
                  bottom
                  right
                  fab
                  v-bind="attrs"
                  v-on="on"
                >
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
                <span class="text-h5">Artikel</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Produkt"
                        required
                        v-model="productName"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="items"
                        label="Menge"
                        v-model="count"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="onClickClose">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="onClickSave">
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
import { getList } from "../apiService/userService";

export default {
  name: "ContainerCon",

  data: () => ({
    dialog: false,
    drawer: null,
    count: 1,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    items: [1, 2, 3, 4, 5],
    list: [
      { uid: 1, name: "Apple", count: 5, crossed: false },
      { uid: 2, name: "Apple2", count: 6, crossed: true },
      { uid: 3, name: "Apple3", count: 7, crossed: false },
      { uid: 4, name: "Apple4", count: 8, crossed: true },
      { uid: 5, name: "Apple5", count: 9, crossed: false },
    ],
    productName: "",
  }),
  async created() {
    const listData = await getList();
    this.list = listData;
    for (let i = 0; i < 100; i++) {
      this.items[i] = i;
    }
  },
  methods: {
    onClickOutside() {
      this.dialog = false;
      this.count = 1;
    },
    onClickClose() {
      this.count = 1;
    },
    onClickSave() {
      if (this.productName == "") return;
      this.list.push({
        name: this.productName,
        count: this.count,
        crossed: false,
      });
      this.dialog = false;
      this.count = 1;
    },
    uncrossItem(uid) {
      this.list.forEach((item) => {
        if (item.uid == uid) {
          item.crossed = false;
        }
      });
    },
    crossItem(uid) {
      this.list.forEach((item) => {
        if (item.uid == uid) {
          item.crossed = true;
        }
      });
    },
  },
  computed: {
    getSelectItems: function () {
      //for(let i = 0;i<100;i++)
    },
    uncrossedItems: function () {
      return this.list.filter(function (u) {
        return !u.crossed;
      });
    },
    crossedItems: function () {
      return this.list.filter(function (u) {
        return u.crossed;
      });
    },
  },
};
</script>
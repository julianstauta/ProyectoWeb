<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs6>
        <v-text-field v-model="name" type="text" label="Summoner name" dark></v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-select v-model="role" :items="roles" label="Role" clearable dark>
          <template slot="selection" slot-scope="data">
            <div>{{ data.item }}</div>
            <v-img :src="getRoleIcon(data.item)" max-height="20" max-width="20" />
          </template>
          <template slot="item" slot-scope="data">
            <v-list-tile-content>
              <v-list-tile-title>{{ data.item }}</v-list-tile-title>
            </v-list-tile-content>
            <v-img :src="getRoleIcon(data.item)" max-height="20" max-width="20" />
          </template>
        </v-select>
      </v-flex>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="players"
          item-key="name"
          class="elevation-1"
          :search="search"
          dark
        >
          <template v-slot:item.role="{ item }">
            <v-img :src="getRoleIcon(item.role)" max-height="30" max-width="30"></v-img>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon medium>monetization_on</v-icon>
            <v-icon medium @click="goInfoPlayer(item)">info</v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const axios = require("axios");
const url = "http://localhost:3000"
export default {
  data() {
    return {
      search: "",
      name: "",
      role: "",
      roles: ["Top Laner", "Jungler", "Middle Laner", "Bot Laner", "Support"],
      players: []
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Summoner Name",
          align: "left",
          value: "name",
          filter: f => {
            return (f + "").toLowerCase().includes(this["name"].toLowerCase());
          }
        },
        {
          text: "Role",
          value: "role",
          filter: f => {
            if (this["role"] !== undefined) {
              return (f + "")
                .toLowerCase()
                .includes(this["role"].toLowerCase());
            }
            return true;
          }
        },
        {
          text: "KDA",
          value: "kda"
        },
        {
          text: "CS Per Minute",
          value: "cs_min"
        },
        {
          text: "Price",
          value: "price"
        },
        { text: "", value: "action", sortable: false }
      ];
    }
  },
  methods: {
    getRoleIcon(irole) {
      if (irole === "Top Laner") {
        return "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ef/Top_icon.png/revision/latest?cb=20181117143602";
      } else if (irole === "Jungler") {
        return "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Jungle_icon.png/revision/latest?cb=20181117143559";
      } else if (irole === "Middle Laner") {
        return "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png/revision/latest?cb=20181117143644";
      } else if (irole === "Bot Laner") {
        return "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/97/Bottom_icon.png/revision/latest?cb=20181117143632";
      } else {
        return "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e0/Support_icon.png/revision/latest?cb=20181117143601";
      }
    },

    getPlayers() {
      axios
        .get(url + "/api/getPlayers/")
        .then(response => {
          this.players = response.data;
        })
        .catch(error => {
          console.log(error);
          alert("Oh no, error.");
        });
    },

    goInfoPlayer(item){
      let p = Object.assign({}, item);
      localStorage.setItem("player",JSON.stringify(p));
      this.$router.push({ path: "playerdetail" });
    }

  },
  beforeMount() {
    this.getPlayers();
  }
};
</script>
<style>
.playerchart {
  margin: auto;
  background-color: #303030;
  padding: 2px;
}
</style>
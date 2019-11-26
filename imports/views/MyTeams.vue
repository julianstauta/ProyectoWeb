<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs6>
        <v-text-field v-model="name" type="text" label="Summoner name" dark></v-text-field>
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
      user: localStorage.getItem("user")
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Team Name",
          align: "left",
          value: "name",
          filter: f => {
            return (f + "").toLowerCase().includes(this["name"].toLowerCase());
          }
        },
        {
          text: "Budgect",
          value: "budgect"
        }
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
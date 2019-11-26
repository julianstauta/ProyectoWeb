<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-row justify="start">
          <v-col cols="4">
            <div class="Wtext">View</div>
            <v-select v-model="view" :items="views" dark outlined color="#F2C94C"></v-select>
          </v-col>
          <v-col cols="4">
            <v-btn
              class="mybtn"
              block
              outlined
              color="white"
              style="text-transform:none"
              type="button"
              @click="getPlayers()"
            >Autopick</v-btn>
            <div class="Wtext">Players Select</div>
          </v-col>
          <v-col cols="4">
            <v-btn
              class="mybtn"
              block
              outlined
              color="white"
              style="text-transform:none"
              type="button"
              @click="reset"
            >Reset</v-btn>
            <div class="Wtext">Remaining</div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <player-table :players="players"></player-table>
          <v-img :src="rift" max-height="882" max-width="735"></v-img>
        </v-row>
      </v-col>
      <v-col cols="4">
        <div class="Wtext">Player selection</div>
        <div class="Wtext">Roles</div>
        <v-select v-model="role" :items="roles" dark outlined color="#F2C94C"></v-select>
        <div class="Wtext">Sort</div>
        <v-select v-model="point" :items="points" dark outlined color="#F2C94C"></v-select>
        <div class="Wtext">Price</div>
        <v-select v-model="price" :items="prices" dark outlined color="#F2C94C"></v-select>
        <div class="Wtext">Search</div>
        <v-text-field v-model="search" label="Search" dark single-line outlined color="#F2C94C"></v-text-field>
        <search-table :players="players"></search-table>
        <br />
        <v-btn
          class="mybtn"
          block
          outlined
          color="white"
          style="text-transform:none"
          type="button"
          @click="create"
        >Create Team</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const axios = require("axios");
const url = "http://localhost:3000"
import PlayerTable from "../components/PlayerTable";
import SearchTable from "../components/SearchTable";
export default {
  components: {
    playerTable: PlayerTable,
    searchTable: SearchTable
  },
  data() {
    return {
      view: "Map",
      views: ["Map", "List"],
      role: "All roles",
      roles: ["All roles", "Top", "Jungle", "Mid", "Adc", "Support", "Coach"],
      point: "High Points",
      points: ["High Points", "Low Points", "Name"],
      price: "Low First",
      prices: ["Low First", "High First"],
      search: "",
      players: [],
      rift:
        "https://sites.google.com/site/leagueoflegendscolombia/_/rsrc/1472775682339/home/la-grieta-del-invocador/hwaXBDe.jpg"
    };
  },
  methods: {
    reset: function() {},
    autopick: function() {},
    create: function() {},
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
    created() {
      this.getPlayers();
    }
  }
};
</script>

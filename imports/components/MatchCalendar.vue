<template>
  <table>
    <tr>
      <th class="text-left"></th>
      <th class="text-center">MATCH CALENDAR</th>
    </tr>

    <tr v-for="match in calendar" :key="match.team1">
      <td>{{ match.time }}</td>
      <td>
        <v-row justify="start">
          <v-col cols="3" class="text-right">{{match.team1}}</v-col>
          <v-col cols="2">
            <v-img :src="getImg(match.team1)" max-width="100" max-height="100"></v-img>
          </v-col>
          <v-col cols="2">
            <v-img :src="duel" max-width="50" max-height="50"></v-img>
          </v-col>
          <v-col cols="2">
            <v-img :src="getImg(match.team2)" max-width="100" max-height="100"></v-img>
          </v-col>
          <v-col cols="3" class="text-left">{{match.team2}}</v-col>
        </v-row>
      </td>
    </tr>
  </table>
</template>
<script>
const axios = require("axios");
const url = "http://localhost:3000";
export default {
  data() {
    return {
      duel:
        "https://cdn2.iconfinder.com/data/icons/long-live-the-queen-1/60/swords-512.png"
    };
  },
  props: {
    calendar: Array,
    teams: Array
  },
  methods: {
    getTeams(name) {
      axios
        .get(url + "/api/getTeam/" + name)
        .then(response => {
          return "https://cdn2.iconfinder.com/data/icons/long-live-the-queen-1/60/swords-512.png";
        })
        .catch(error => {
          console.log(error);
        });
    },
    getImg(name) {
      for(i=0; i<this.teams.length; i++) {
        if(this.teams[i].name == name){
          return this.teams[i].logo
        }
      }
    }
  },
  mounted(){
  },
  beforeMount() {
  }
};
</script>
<style>
table,
th,
td {
  border: 1px solid gray;
  padding: 10px;
  color: white;
  vertical-align: center;
}
table {
  border-collapse: collapse;
  background-color: black;
  width: 100%;
}
</style>
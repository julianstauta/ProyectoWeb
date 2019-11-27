<template>
  <v-container fluid>
    <v-row justify="start">
      <v-col cols="1">
        <v-img :src="image" max-width="70" max-height="70"></v-img>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="league"
          :items="leagues"
          dark
          outlined
          color="#F2C94C"
          v-on:change="getMatches(`${league}`);getTeams(`${league}`)"
        ></v-select>
      </v-col>
    </v-row>
    <v-carousel hide-delimiters height="120">
      <v-carousel-item :key="i" v-for="i in 2">
        <v-layout row>
          <v-flex xs6 sm4 md2 :key="j" v-for="j in 6">
            <cr-card :match="matches[j]" :teams="allTeams"></cr-card>
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="4">
        <team-clas :teams="teams"></team-clas>
      </v-col>
      <v-col cols="8">
        <calendar :calendar="matches"  :teams="allTeams"></calendar>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
const axios = require("axios");
const url = "http://localhost:3000";
import Card from "../components/Card";
import Clasification from "../components/Clasification";
import Calendar from "../components/MatchCalendar";
export default {
  name: "Home",
  components: {
    crCard: Card,
    teamClas: Clasification,
    calendar: Calendar
  },
  data() {
    return {
      image:
        "https://am-a.akamaihd.net/image?f=https://lolstatic-a.akamaihd.net/esports-assets/production/league/lla-55ylm4hf.png",
      league: "Liga latinoamerica",
      leagues: ["Liga latinoamerica", "North America LCS"],
      matches: [],
      allTeams: [],
      teams: []
    };
  },
  methods: {
    getMatches(league) {
      axios
        .get(url + "/api/getMatches/" + league)
        .then(response => {
          this.matches = response.data;
        })
        .catch(error => {
          console.log(error);
          alert("Oh no, error.");
        });
    },
    getTeams(league) {
      axios
        .get(url + "/api/getTeamLeague/" + league)
        .then(response => {
          this.teams = response.data;
        })
        .catch(error => {
          console.log(error);
          alert("Oh no, error.");
        });
    },
    getAllTeams() {
      axios
        .get(url + "/api/getTeam")
        .then(response => {
          this.allTeams = response.data.sort((a, b) => parseInt(a.position) - parseInt(b.position));
          console.log(this.allTeams)
        })
        .catch(error => {
          console.log(error);
          alert("Oh no, error.");
        });
    }
  },
  beforeMount() {
    this.getMatches(this.league);
    this.getTeams(this.league);
    this.getAllTeams();
  }
};
</script>

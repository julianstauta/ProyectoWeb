<template>
  <v-container fluid>
      <v-row justify="start">
        <v-col cols="1">
          <v-img :src="image" max-width="70" max-height="70"></v-img>
        </v-col>
        <v-col cols="3">
          <v-select v-model="league" :items="leagues" dark outlined color="#F2C94C"></v-select>
        </v-col>
      </v-row>
      <v-carousel hide-delimiters height="120">
        <v-carousel-item :key="i" v-for="i in 2">
          <v-layout row>
            <v-flex xs6 sm4 md2 :key="j" v-for="j in 6">
              <cr-card :match="matches[0]"></cr-card>
            </v-flex>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    <v-row >
      <v-col cols="4">
        <team-clas :teams="teams"></team-clas>
      </v-col>
      <v-col cols="8">
        <calendar :calendar="calendar"></calendar>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
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
      league: "Liga Latino America",
      leagues: ["Liga Latino America"],
      matches: [
        {
          date: "18 AGO 2019",
          imgone:
            "https://am-a.akamaihd.net/image?f=https://lolstatic-a.akamaihd.net/esports-assets/production/team/all-knights-1f7lc85l.png",
          imgtwo:
            "https://am-a.akamaihd.net/image?f=https://lolstatic-a.akamaihd.net/esports-assets/production/team/furious-gaming-ej5t1yl9.png",
          score: { scoreone: "3", scoretwo: "0" },
          time: "15:00"
        }
      ],
      teams: [
        {
          name: "ISG",
          img:
            "https://am-a.akamaihd.net/image?f=https://lolstatic-a.akamaihd.net/esports-assets/production/team/isurus-gaming-gm56rd33.png",
          pos: "1",
          points: "17"
        }
      ],
      calendar: [
        {
          time: "6:00",
          nameone: "Pixel",
          nametwo: "Kaos Latin Gamers",
          imgone:
            "https://am-a.akamaihd.net/image?f=https://lolstatic-a.akamaihd.net/esports-assets/production/team/pixel-esports-club-bkwbovq7.png",
          imgtwo:
            "https://am-a.akamaihd.net/image?f=https://lolstatic-a.akamaihd.net/esports-assets/production/team/kaos-latin-gamers-bf1uzplu.png"
        }
      ]
    };
  }
};
</script>

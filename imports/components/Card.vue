<template>
  <v-card class="signinchart" max-width="205" style="background-color: #222222">
    <v-flex>
      <div style="text-align:center">{{match.date}}</div>
      <v-flex>
        <v-row justify="center">
          <v-col cols="3">
            <v-img :src="getImg(match.team1)" ></v-img>
          </v-col>
          <v-col cols="6">
            <div style="text-align:center">{{match.score1}} VS {{match.score2}}</div>
          </v-col>
          <v-col cols="3">
            <v-img :src="getImg(match.team2)"></v-img>
          </v-col>
        </v-row>
      </v-flex>
      <div style="text-align:center">{{match.time}}</div>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  props: {
    match: Object,
    teams: Array
  },
  methods: {
    getImg(name) {
      for(i=0; i<this.teams.length; i++) {
        if(this.teams[i].name == name){
          return this.teams[i].logo
        }
      }
    }
  }
};
</script>



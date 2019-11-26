<template>
  <v-container grid-list-md class="mt-10">
    <v-layout row wrap justify-center>
      <v-flex xs9>
        <v-card style="background-color: #222222">
          <v-row class="mb-2 ml-5 mt-2" justify="left" no-gutters>
            <v-spacer></v-spacer>
            <v-col md="4">
              <v-flex just d-flex justify-left md="auto">
                <v-img :src="player.photourl" max-height="250px" max-width="250px"></v-img>
              </v-flex>
            </v-col>
            <v-col md="6">
              <v-col md="12">
                <v-flex xs12 class="text-xs-left">
                  <h1 class="Wtext">{{player.name}}</h1>
                </v-flex>
                <v-row no-gutters align="center">
                  <v-col>
                    <v-flex xs12 class="text-xs-left">
                      <h3 class="Wtext" style="font-size: large">Nationality:</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-flex xs12 class="text-xs-left">
                      <h3 class="Wtext" style="font-size: large">{{player.natinonality}}</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-img :src="natio.flag" max-height="40" max-width="40"></v-img>
                  </v-col>
                </v-row>
                <v-row no-gutters align="center">
                  <v-col>
                    <v-flex xs12 class="text-xs-left">
                      <h3 class="Wtext" style="font-size: large">Role:</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-flex xs12 class="text-xs-left">
                      <h3 class="Wtext" style="font-size: large">{{player.role}}</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-img :src="getRoleIcon(player.role)" max-height="40" max-width="40"></v-img>
                  </v-col>
                </v-row>
                <v-row no-gutters align="center">
                  <v-col>
                    <v-flex xs12 class="text-xs-left">
                      <h3 class="Wtext" style="font-size: large">Team:</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-flex xs12 class="text-xs-left">
                      <h3 class="Wtext" style="font-size: large">{{player.team}}</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-img :src="team.logo" max-height="50" max-width="50"></v-img>
                  </v-col>
                </v-row>
              </v-col>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-card>
      </v-flex>
      <v-flex xs9 mt-3>
        <v-card xs12 style="background-color: #222222">
          <v-layout row warp class="ml-10">
            <v-flex xs12 class="text-xs-left" py-10>
              <h2 class="Wtext">Stats on most recent tournament</h2>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Games played:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">{{player.played}}</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">KDA:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">{{player.kda}}</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Kills:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">{{player.kills}}</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Deaths:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">{{player.deaths}}</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Asists:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">{{player.assists}}</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Kill participation:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">{{player.kill_participation}}</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">CS per min:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">{{player.cs_min}}</p>
            </v-flex>
            <v-flex xs4 class="text-xs-center">
              <v-btn
                class="mybtn"
                block
                outlined
                color="white"
                style="text-transform:none"
                type="button"
              >Buy</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs9 mt-3>
        <!-- <v-card xs12 style="background-color: #222222">
          <apexchart width="500" type="donut" :options="options" :series="series"></apexchart>
        </v-card>-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const axios = require("axios");
const url = "http://localhost:3000"
export default {
  // components: {
  //   apexchart: VueApexCharts
  // },
  data() {
    return {
      player: JSON.parse(localStorage.getItem("player")),
      team: {
        logo: "",
        name: ""
      },
      natio: {
        name: "",
        flag: ""
      }
    };
  },
  methods: {
    getTeam() {
      axios
        .get(url + "/api/getTeam/" + this.player.team)
        .then(response => {
          this.team = response.data[0];
        })
        .catch(error => {
          console.log(error);
          alert("Oh no, error.");
        });
    },
    getNatio() {
      axios
        .get(url + "/api/getNationality/" + this.player.natinonality)
        .then(response => {
          this.natio = response.data[0];
        })
        .catch(error => {
          console.log(error);
          alert("Oh no, error.");
        });
    },
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
    }
  },
  beforeMount() {
    this.getTeam();
    this.getNatio();
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
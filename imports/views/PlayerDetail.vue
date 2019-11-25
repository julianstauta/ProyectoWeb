<template>
  <v-container grid-list-md class="mt-10">
    <v-layout row wrap justify-center>
      <v-flex xs9>
        <v-card style="background-color: #222222">
          <v-row class="mb-2 ml-5 mt-2" justify="left" no-gutters>
            <v-spacer></v-spacer>
            <v-col md="4">
              <v-flex just d-flex justify-left md="auto">
                <v-img
                  src="https://lolstatic-a.akamaihd.net/esports-assets/production/player/faker-jgj38q70.png"
                  max-height="250px"
                  max-width="250px"
                ></v-img>
              </v-flex>
            </v-col>
            <v-col md="6">
              <v-col md="12">
                <v-flex xs12 class="text-xs-left">
                  <h1 class="Wtext">Faker</h1>
                </v-flex>
                <v-row no-gutters align="center">
                  <v-col>
                    <v-flex xs12 class="text-xs-left">
                      <h3 class="Wtext" style="font-size: large">Nationality:</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-flex xs12 class="text-xs-left">
                      <h3 class="Wtext" style="font-size: large">Suth Corea</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-img
                      src="https://image.flaticon.com/icons/svg/206/206758.svg"
                      max-height="50"
                      max-width="50"
                    ></v-img>
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
                      <h3 class="Wtext" style="font-size: large">Middle lane</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-img
                      src="https://vignette.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png/revision/latest?cb=20181117143644"
                      max-height="50"
                      max-width="50"
                    ></v-img>
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
                      <h3 class="Wtext" style="font-size: large">SKTelecom T1</h3>
                    </v-flex>
                  </v-col>
                  <v-col>
                    <v-img
                      src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/5/59/SK_Telecom_T1logo_square.png/900px-SK_Telecom_T1logo_square.png?version=90d95e4116294b61db9592755c6c03f4"
                      max-height="50"
                      max-width="50"
                    ></v-img>
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
              <p class="Wtext">10</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">KDA:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">10</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Kills:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">10</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Deaths:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">10</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Asists:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">10</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Kill participation:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">10</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">CS per min:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">10</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">CS:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">10</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left">
              <p class="Wtext">Minutes Played:</p>
            </v-flex>
            <v-flex xs2 class="text-xs-left" pb-10>
              <p class="Wtext">10</p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
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
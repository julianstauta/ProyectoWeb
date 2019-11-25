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
            <v-icon medium>info</v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      name: "",
      role: "",
      roles: ["Top Laner", "Jungler", "Middle Laner", "Bot Laner", "Support"],
      players: [
        {
          name: "Faker",
          role: "Middle Laner",
          kda: 6.0,
          winrate: 24,
          price: 10000000
        },
        {
          name: "The Shy",
          role: "Top Laner",
          kda: 6.0,
          winrate: 37,
          price: 10000000
        },
        {
          name: "Teddy",
          role: "Bot Laner",
          kda: 16.0,
          winrate: 23,
          price: 10000000
        },
        {
          name: "Seiya",
          role: "Middle Laner",
          kda: 3.7,
          winrate: 67,
          price: 10000000
        },
        {
          name: "Crisp",
          role: "Support",
          kda: 16.0,
          winrate: 49,
          price: 10000000
        },
        {
          name: "Tarzan",
          role: "Jungler",
          kda: 0.0,
          winrate: 94,
          price: 10000000
        },
        {
          name: "Bjergsen",
          role: "Middle Laner",
          kda: 0.2,
          winrate: 98,
          price: 10000000
        },
        {
          name: "Cotopaco",
          role: "Middle Laner",
          kda: 3.2,
          winrate: 87,
          price: 10000000
        },
        {
          name: "Perkz",
          role: "Bot Laner",
          kda: 25.0,
          winrate: 51,
          price: 10000000
        },
        {
          name: "DoinB",
          role: "Middle Laner",
          kda: 26.0,
          winrate: 65,
          price: 10000000
        }
      ]
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
          text: "Win Rate",
          value: "winrate"
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
    }
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
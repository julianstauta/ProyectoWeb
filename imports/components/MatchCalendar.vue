<template>
  <table>
    <tr>
      <th class="text-left"></th>
      <th class="text-center">MATCH CALENDAR</th>
    </tr>

    <tr v-for="match in calendar" :key="match.nameone">
      <td>{{ match.time }}</td>
      <td>
        <v-row justify="start">
          <v-col cols="3" class="text-right">{{match.nameone}}</v-col>
          <v-col cols="2">
            <v-img :src="match.imgone" max-width="100" max-height="100"></v-img>
          </v-col>
          <v-col cols="2">
            <v-img :src="duel" max-width="50" max-height="50"></v-img>
          </v-col>
          <v-col cols="2">
            <v-img :src="match.imgtwo" max-width="100" max-height="100"></v-img>
          </v-col>
          <v-col cols="3" class="text-left">{{match.nametwo}}</v-col>
        </v-row>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  data() {
    return {
      duel:
        "https://cdn2.iconfinder.com/data/icons/long-live-the-queen-1/60/swords-512.png"
    };
  },
  props: {
    calendar: Array
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
  width:100%;
}
</style>
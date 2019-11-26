<template>
  <table>
    <tr>
      <th class="text-left"></th>
      <th class="text-left">CLASIFICATION</th>
      <th class="text-left"></th>
    </tr>

    <tr v-for="team in teams" :key="team.name">
      <td>{{ team.pos }}</td>
      <td>
        <v-row justify="start">
          <v-col cols="2">
            <v-img :src="team.img" max-width="100" max-height="100"></v-img>
          </v-col>
          <v-col cols="10">{{team.name}}</v-col>
        </v-row>
      </td>
      <td>{{ team.points }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    teams: Array
  }
};
</script>
<style scoped>
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
}
</style>
<template>
  <table>
    <tr v-for="player in players" :key="player.name">
      <td>
        <div>{{player.name}}</div>
      </td>
      <td>
        <div>{{player.role}}</div>
      </td>
      <td>
        <div>{{player.price}}</div>
      </td>
      <td >
        <v-btn
          class="mybtn"
          block
          outlined
          color="white"
          style="text-transform:none"
          type="button"
          @click="Add(player)"
        >Add</v-btn>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    players: Array
  },
  methods: {
    Add: function(player) {
      
    }
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
}
</style>
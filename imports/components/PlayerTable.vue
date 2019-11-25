<template>
  <table>
    <tr>
      <th class="text-left"></th>
      <th class="text-left">Summoner's Name</th>
      <th class="text-left">Role</th>
      <th class="text-left">KDA</th>
      <th class="text-left">Price</th>
      <th class="text-left"></th>
    </tr>

    <tr v-for="player in players" :key="player.name">
      <td>
        <v-img :src="player.img" max-width="100" max-height="100"></v-img>
      </td>
      <td>
        <div>{{player.name}}</div>
      </td>
      <td>
        <div>{{player.role}}</div>
      </td>
      <td>
        <div>{{player.kda}}</div>
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
          @click="Delete(player.name)"
        >Delete</v-btn>
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
    Delete: function(id) {
      
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
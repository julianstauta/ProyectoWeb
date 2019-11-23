<template>
  <v-app>
    <div>
      <v-app-bar color="#212121" dark>

        <v-toolbar-title style="margin: 10px">Esports Manager</v-toolbar-title>
        
        <v-toolbar-items v-for="item in menuItems" :key="item.title" :name="item.title">
          <template>
            <v-btn text :to="item.path" color="white" style="text-transform:none">{{item.title}}</v-btn>
          </template>
        </v-toolbar-items>
        <div class="flex-grow-1"></div>
        <div v-for="item in authOptions" :key="item.title" :name="item.title">
          <template v-if="item.title==='Log out'">
            <v-btn text @click="onLogout" color="white" to="signin">{{item.title}}</v-btn>
          </template>
          <template v-else>
            <v-btn class="mybtn" outlined depressed :to="item.path" style="text-transform:none">{{item.title}}</v-btn>
          </template>
          <v-spacer></v-spacer>
        </div>
      </v-app-bar>
    </div>

    <v-content class="bground" >
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: "Awesome App",
      sidebar: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { title: "Home", path: "/a" },
        { title: "Players", path: "/b" },
        { title: "Fantasy League", path: "/c" },
        { title: "My Teams", path: "/d" },
      ];
      return menuItems;
    },
    authOptions(){
      let authOptions = [
        { title: "Sign Up", path: "/signup" },
        { title: "Sign In", path: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        authOptions = [
          { title: "Log out", path: "/signin" }
        ];
      };
      return authOptions;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style>
.mybtn {
  border-color: #F2C94C !important;
  color: "white";
  margin-left: 10px;
  border-radius: 10px;
}
*, body{
  margin: 0;
  padding: 0;

}
.bground{
  background-color: #303030;
}
.Wtext{
  color: white !important;
  font-weight:normal;
  text-decoration: none;
}
.signinchart {
  margin: auto;
  background-color: #303030;
  padding-top: 5px;
}
</style>

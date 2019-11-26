<template>
  <v-container fluid>
    <v-card class="signinchart" max-width="450" style="background-color: #222222">
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1 class="Wtext">Sign In</h1>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field 
                name="email"
                label="Email"
                placeholder="Email"
                id="email"
                type="email"
                v-model="email"
                dark
                outlined
                color= "#F2C94C">
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field 
                name="password"
                label="Password"
                placeholder="Password"
                id="password"
                type="password"
                v-model="password"
                dark
                outlined
                color= "#F2C94C">
              </v-text-field>
            </v-flex>
            <v-flex>
              <v-checkbox v-model="remember" dark label="Remember me"></v-checkbox>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn
                class="mybtn"
                block
                outlined
                color="white"
                style="text-transform:none"
                type="button"
                @click="signIn"
              >Sign In</v-btn>
            </v-flex>
            <v-flex mt-5 mb-5>
              <router-link class="Wtext" :to="{ path: '/' }">Forgot your password?</router-link>
              <v-spacer></v-spacer>
              <router-link class="Wtext" :to="{ path: '/signup' }">Create new acount</router-link>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
const axios = require("axios");
const url = "http://localhost:3000"
import { watch } from "fs";
export default {
  name: "signin",
  data() {
    return {
      remember: false,
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      if (this.username === "" || this.password === "") {
        alert("You must fill all the fields.");
      } else {
        axios
        .post(url+"/api/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.status == 200) {
            localStorage.setItem("user", this.user);
            this.$emit("validUser", true);
            this.$router.push({ path: "home" });
          }
        })
        .catch(error => {
          if (error.response.status == 401) {
            alert(error.response.data.message);
          } else {
            alert("Unexpected error, please contact the admin");
          }
        });
      }
    }
  },
  computed: {
    user() {
      return null;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("users");
      }
    }
  }
};
</script>
<style>
.signinchart {
  margin: auto;
  background-color: #303030;
  padding-top: 5px;
}
</style>
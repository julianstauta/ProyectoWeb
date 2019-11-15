<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="450">
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign In</h1>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="username"
                label="Username"
                id="username"
                type="username"
                required
                v-model="email"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-checkbox v-model="remember" label="Remember me"></v-checkbox>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn block dark type="button" @click="signIn">Sign In</v-btn>
            </v-flex>
            <v-flex mt-5 mb-5>
              <router-link :to="{ path: '/' }">Forgot your password?</router-link>
              <v-spacer></v-spacer>
              <router-link :to="{ path: '/signup' }">Create new acount</router-link>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
import { watch } from "fs";
export default {
  name: "signin",
  data() {
    return {
      remember: false,
      username: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      if (this.username === "" || this.password === "") {
        alert("You must fill all the fields.");
      } else {
        this.$store.dispatch("signUserIn", {
          username: this.username,
          password: this.password
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

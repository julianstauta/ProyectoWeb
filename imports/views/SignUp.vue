<template>
  <v-container fluid>
    <v-card class="signinchart" max-width="800" style="background-color: #222222">
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1 class="Wtext">Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm10 offset-sm1 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="name"
                label="Name"
                id="name"
                placeholder="Name"
                v-model="name"
                required
                dark
                outlined
                color="#F2C94C"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="lastname"
                label="Last Name"
                id="lastname"
                placeholder="Last Name"
                v-model="lastname"
                required
                dark
                outlined
                color="#F2C94C"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                placeholder="e-mail"
                v-model="email"
                required
                dark
                outlined
                color="#F2C94C"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="phone"
                label="Phone Number"
                id="phone"
                type="phone"
                placeholder="Phone number"
                dark
                outlined
                color="#F2C94C"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                placeholder="Password"
                v-model="password"
                required
                dark
                outlined
                color="#F2C94C"
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                id="confirmPassword"
                type="password"
                v-model="cpassword"
                required
                dark
                outlined
                color="#F2C94C"
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5 mb-5>
              <v-btn
                class="mybtn"
                block
                outlined
                color="white"
                style="text-transform:none"
                type="button"
                @click="signUp"
              >Sign Up</v-btn>
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
export default {
  name: "signup",
  data() {
    return {
      male: false,
      female: false,
      others: false,
      name: "",
      lastname: "",
      phone: "",
      email: "",
      password: "",
      cpassword: ""
    };
  },
  methods: {
    signUp: function() {
      if (
        this.name === "" ||
        this.lastname === "" ||
        this.phone === "" ||
        this.email === "" ||
        this.password === "" ||
        this.cpassword === ""
      ) {
        alert("You must fill all the fields.");
      } else if (this.cpassword != this.password) {
        alert("Password does not coincide with confirmation.");
      } else if (this.password.length < 6) {
        alert("Password must be at least 6 digists long.");
      } else {
        axios
          .post(url + "/api/singup", {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            phone: this.phone,
            password: this.password
          })
          .then(response => {
            if (response.status == 200) {
              this.$emit("validUser", true);
              this.$router.push({ path: "signin" });
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
    },
    dependencies() {
      let dependencies = [];
      let dependencies_names = [];
      dependencies = [];
      for (let i = 0; i < dependencies.length; i++) {
        dependencies_names.push(dependencies[i].name);
      }
      return dependencies_names;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("users");
      }
    }
  },
  beforeMount() {
    this.$store.dispatch("getDependencies");
  }
};
</script>

<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="800">
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm10 offset-sm1 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field name="name" label="Name" id="name" v-model="name" required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="lastname"
                label="Last Name"
                id="lastname"
                v-model="lastname"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                v-model="email"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-row justify="space-around">
                <div class="d-flex align-center">Gender</div>
                <v-col cols="3">
                  <v-checkbox v-model="male" label="Male"></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox v-model="female" label="Female"></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox v-model="others" label="Other"></v-checkbox>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex>
              <v-row justify="space-around">
                <div class="d-flex align-center">Birth date</div>
                <v-col cols="3">
                  <v-select v-model="month" :items="month"></v-select>
                </v-col>
                <v-col cols="3">
                  <v-select v-model="day" :items="day"></v-select>
                </v-col>
                <v-col cols="3">
                  <v-select v-model="year" :items="year"></v-select>
                </v-col>
              </v-row>
            </v-flex>
            <v-flex>
              <v-select v-model="country" :items="country" label="Country"></v-select>
            </v-flex>
            <v-flex>
              <v-text-field v-model="value" label="Phone Number"></v-text-field>
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
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                v-model="cpassword"
                required
              ></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5 mb-5>
              <v-btn block dark type="button" @click="signUp">Sign Up</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      male: false,
      female: false,
      others: false,
      name: "",
      lastname: "",
      dependency: "",
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
        this.dependency === "" ||
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
        this.$store.dispatch("signUserUp", {
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          dependency: this.dependency,
          password: this.password
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

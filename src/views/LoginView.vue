<template>
  <div class="login" v-if="!token">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" name="email" v-model="email"/>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Password</label>
        <input type="password"  class="form-control" name="password" v-model="password" />
      </div>
      <button type="button" class="btn btn-success" v-on:click="login()">LOGIN</button> 
    </form>

    <br />
    <div class="account">
      <router-link to="/register">Register now!</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/services/api";

export default defineComponent({
  name: "LoginView",
  setup() {
    return {
      email: "",
      password: "",
      token: "",
      error: ""
    }
  },
  methods: {
    async login() {
      await api.post("/login", {
        email: this.email,
        password: this.password})
      .then((result) => {
          localStorage.setItem('token', result.data.access_token);
          localStorage.setItem('user_id', result.data.id);
          localStorage.setItem('account_id', result.data.account_id);
          localStorage.setItem('account_number', result.data.account_number);

          console.log('go to: /balance');
          this.$router.push("/balance");
      })
      .catch(error => {
          this.error = error.response.data.message
          return false;
      });
    },
    onSubmit () {
      // Do something...
    }
  }
});
</script>


<style scoped>
.input-group {
  margin-top: 15px;
}
.account {
   margin-top: 25px;
}
.login {
  margin: auto;
  width: 30%;
  min-width: 300px;
  padding: 10px;
}
</style>
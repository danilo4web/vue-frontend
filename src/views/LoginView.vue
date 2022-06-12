<template>

<div class="center">
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
      <button type="button" class="btn btn-link" v-on:click="login()">LOGIN</button> 
    </form>

    <div class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    </div>
  </div>
  
</template>



<script lang="ts">
import { defineComponent, onMounted, ref,  } from "vue";
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
      console.log(this.password);
      console.log(this.email);

      await api.post("/login", {
        email: this.email,
        password: this.password})
      .then((result) => {
          localStorage.setItem('token', result.data.access_token);
          this.$router.push("/balance");
      })
      .catch(error => {
        this.error = error.response.data.message
      });
    },
    onSubmit () {
      // Do something...
    }
  }
});
</script>


<style scoped>
.center {
  margin: auto;
  width: 40%;
  min-width: 200px;
  padding: 10px;
}
</style>
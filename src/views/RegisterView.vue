<template>
  <div class="register">
    <form @submit.prevent="onSubmit">

    <h3>Register</h3>
      <div class="input-group">
        <input type="string" class="form-control" id="name" placeholder="Name" name="name" v-model="name"/>
      </div>
      <div class="input-group">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input type="email" class="form-control" id="email" placeholder="email" name="email" v-model="email"/>
      </div>
      <div class="input-group">
        <input type="password"  class="form-control" name="password" placeholder="password" v-model="password" />
      </div>
      <div class="input-group">
          <button type="button" class="btn btn-primary" v-on:click="signUp()">SIGN UP</button> 
      </div>
      <div class="account">
        <router-link to="/login">Already have an account?</router-link>
      </div>
    </form>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import api from "@/services/api";

export default defineComponent({
  name: "RegisterView",
  setup() {
    return {
      name: "",
      email: "",
      password: ""
    }
  },
  methods: {
    async signUp() {
      await api.post("/register", {
        name: this.name,
        email: this.email,
        password: this.password})
    .then((result) => {
      console.log(result);
          localStorage.setItem('token', result.data.access_token);
          localStorage.setItem('user_id', result.data.id);
          localStorage.setItem('account_id', result.data.account_id);

          this.$router.push("/balance");
    })
    .catch(error => {
      console.error("There was an error!", error);
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
.register {
  margin: auto;
  width: 40%;
  min-width: 300px;
  padding: 10px;
}
</style>
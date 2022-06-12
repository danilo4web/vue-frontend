<template>
  <div class="col-4">
    <aside class="sidebar">
          <header>
            <router-link to="/" class="logo">
                <img src="@/assets/img/logo.png" width="70" />
                BNB Bank
            </router-link>
            <div class="row"><small>Account Number: <strong>{{ accountNumber() }}</strong></small></div>
            <div class="row"><small>User ID: {{ userId() }}</small></div>
        </header>
      <nav class="sidebar-nav">
        <ul>
          <li><router-link to="/balance">Balance</router-link></li>
          <li><router-link to="/incomes">Incomes</router-link></li>
          <li><router-link to="/expenses">Expenses</router-link></li>
          <li><router-link to="/checks">Checks</router-link></li>
          <li><router-link to="/help">Help</router-link></li>
          <li style="margin: 20px 0 0 13px;"><button class="btn btn-outline-info btn-sm" v-on:click="logout()">Logout</button></li>
        </ul>
        
      </nav>
    </aside>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarComponent",
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("account_id");
      localStorage.removeItem("account_number");

      this.$router.push("/login");
    },
    accountNumber() {
      return localStorage.getItem('account_number');
    },
    userId() {
      return localStorage.getItem('user_id');
    }
  }
});
</script>

<style scoped>
#nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  color: #000;
  text-decoration: none;
  font-size: 32px;
}
</style>
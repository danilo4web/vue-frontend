<template>

<div class="col-4">
  <aside class="sidebar">
         <header>
          <router-link to="/">
              BNB Bank
          </router-link>
      </header>
    <nav class="sidebar-nav">
      <ul>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/logout">Logout</router-link></li>
        <li><router-link to="/balance">Balance</router-link></li>
        <li><router-link to="/incomes">Incomes</router-link></li>
        <li><router-link to="/expenses">Expenses</router-link></li>
        <li><router-link to="/checks">Checks</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/help">Help</router-link></li>
      </ul>
    </nav>
  </aside>
</div>

</template>

<script lang="ts">
export default {
    name: "NavbarComponent"
}
</script>

<style scoped>
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
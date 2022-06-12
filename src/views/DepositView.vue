<template>
  <div class="page">
    <h3>Deposit a Check in account:  {{ accountNumber() }}</h3>
    <br />
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" id="description" name="description" v-model="description"/>
      </div>
      <div class="mb-3">
        <label for="amount" class="form-label">Amount</label>
        <input type="text" class="form-control" id="amount" name="amount" placeholder="$" v-model="amount"/>
      </div>
      <div class="mb-3">
        <label for="file" class="form-label">File</label>
        <input type="file"  class="form-control" name="file" />
      </div>
      <button type="button" class="btn btn-success" v-on:click="depositCheck()">DEPOSIT IT</button> 
    </form>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import api from "@/services/api";

export default defineComponent({
  name: "DepositView",
  setup() {
    return {
      amount: "",
      file: "",
      description: ""
    }
  },
  methods: {
    async depositCheck() {
      await api.post("/checks", {
        file: "https://via.placeholder.com/640x480.png/001133?text=autem",
        amount: this.amount,
        description: this.description,
        account_id: localStorage.getItem('account_id')
    }).then((result) => {
      this.$router.push("/checks/pending");
    })
    .catch(error => {
      console.error("There was an error!", error);
    });

    },
    onSubmit () {
      // Do something...
    },

    accountNumber() {
      return localStorage.getItem('account_number')
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
.page {
  margin: auto;
  width: 40%;
  min-width: 300px;
  padding: 10px;
}
</style>
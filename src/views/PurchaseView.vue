<template>
  <div class="page">
    <h3>Purchase:  {{ accountNumber() }}</h3>
    <br />
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="date" class="form-label">Amount</label>
        <input type="text"  class="form-control" name="amount" v-model="amount" />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" id="description" name="description" v-model="description" />
      </div>      
      <button type="button" class="btn btn-success" v-on:click="addPurchase()">ADD PURCHASE</button> 
    </form>

    {{ messages() }}
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import api from "@/services/api";

export default defineComponent({
  name: "PurchaseView",
  setup() {
    return {
      amount: "",
      date: "",
      description: "",
      message: ""
    }
  },
  methods: {
    async addPurchase() {
      await api.post("/purchase", {
        amount: this.amount,
        description: this.description,
        account_id: localStorage.getItem('account_id')
      }).then((result) => {
          alert(result.data.message);
      })
      .catch(error => {
        alert(error.message);
      });
    },
    onSubmit () {
      // Do something...
    },

    accountNumber() {
      return localStorage.getItem('account_number')
    },

    messages() {
      return this.message;
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
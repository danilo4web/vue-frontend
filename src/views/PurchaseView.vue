<template>
  <div class="register">
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="amount" class="form-label">Date</label>
        <input type="text"  class="form-control" name="amount" v-model="amount" />
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input type="text"  class="form-control" name="date" v-model="date" />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" id="description" name="description" v-model="description"/>
      </div>      
      <button type="button" class="btn btn-link" v-on:click="addPurchase()">ADD PURCHASE</button> 
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import api from "@/services/api";

export default defineComponent({
  name: "PurchaseView",
  setup() {
    return {
      amount: "",
      date: "",
      description: ""
    }
  },
  methods: {
    async addPurchase() {

      console.log(this.description);
      console.log(this.date);
      console.log(this.amount);

      await api.post("/purchase", {
        date: this.date,
        description: this.description,
        amount: this.amount})
    .then((result) => {
        console.log(result);
         console.log('Purchase OK');
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
<template>
  <div class="register">
    <form @submit.prevent="onSubmit">

      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" id="description" name="description" v-model="description"/>
      </div>
      <div class="mb-3">
        <label for="amount" class="form-label">Amount</label>
        <input type="text" class="form-control" id="amount" name="amount" v-model="amount"/>
      </div>
      <div class="mb-3">
        <label for="file" class="form-label">File</label>
        <input type="file"  class="form-control" name="file" />
      </div>
      <button type="button" class="btn btn-link" v-on:click="depositCheck()">DEPOSIT CHECK</button> 
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
      file: "",
      description: ""
    }
  },
  methods: {
    async depositCheck() {

      console.log(this.file);
      console.log(this.amount);
      console.log(this.description);

      await api.post("/purchase", {
        amount: this.amount,
        file: this.file,
        description: this.description})
    .then((result) => {
        console.log(result);
         console.log('DEPOSIT SENT');
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
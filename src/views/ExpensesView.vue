<template>
  <div class="container">
    <h3 class="p-3 text-center">My Expenses:</h3>

    <a href="/purchase" class="btn btn-danger">+ Purchase</a><br /><br />

    <table class="table table-striped table-bordered">
      <thead>
          <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
            <td>{{transaction.date}}</td>
            <td>{{transaction.description}}</td>
            <td>{{transaction.amount}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "@/services/api";

export default defineComponent({
    name: "ExpensesView",
    setup() {
        const transactions = ref([]);

        api.post("/transactions/debits/2022-06", {
            account_id: localStorage.getItem('account_id')
        }).then(response => {
            transactions.value = response.data
        }).catch(error => {
            console.log(error);
        });

        return {transactions}
    }
});
</script>
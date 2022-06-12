<template>
  <div class="container">
    <h3 class="p-3 text-center">My incomes:</h3>

    <a href="/deposit" class="btn btn-success">+ Deposit a Check</a><br /><br />
    
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
import { computed, defineComponent, onUpdated, ref } from "vue";
import Check from '@/types/Check'
import api from "@/services/api";
import { DOMDirectiveTransforms } from "@vue/compiler-dom";

export default defineComponent({
    name: "IncomesView",
    props: {
        searchForType: {
            required: true,
            type: String
        },
    },
    setup(props) {
        const transactions = ref([]);

        api.post("/transactions/credits/2022-06", {
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
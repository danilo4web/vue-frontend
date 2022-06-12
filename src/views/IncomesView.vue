<template>
  <div class="container">
    <h3 class="p-3 text-center">Incomes</h3>
    <table class="table table-striped table-bordered">
      <thead>
          <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>type</th>
              <th>date</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="transaction in transactions" :key="transaction.id">
              <td>{{transaction.description}}</td>
              <td>{{transaction.amount}}</td>
              <td>{{transaction.type}}</td>
              <td>{{transaction.check_id}}</td>
              <td>{{transaction.created_at}}</td>
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

        api.get("/transactions/credit/1", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
                transactions.value = response.data
        }).catch(error => {
                console.log(error);
        });

        return {transactions}
    }
});
</script>
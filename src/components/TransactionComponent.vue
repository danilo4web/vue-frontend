<template>
    <div class="transactions">
        <h5>Transactions:</h5>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>type</th>
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
    name: "TransactionComponent",
    props: {
        searchForType: {
            required: true,
            type: String
        },
    },
    setup(props) {
        const transactions = ref([]);

        console.log(localStorage.getItem('token'));

        api.post("/transactions/month/2022-06", {
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

<style>
.transactions {
    padding-top: 50px;
}
</style>
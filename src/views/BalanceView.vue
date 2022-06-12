<template>
  <div class="page">

    <div class="row">
      Current Balance: 
    </div>
    

  <div class="row">
    <div class="col-3">
      Incomes: XXXXXXX
      Expenses: XXXXXXXXXX
    </div>
    <div class="status">
      <a href="/check-deposit" class="btn btn-success">+ Deposit a Check</a><br />
      <a href="/purchase" class="btn btn-danger">+ Purchase</a>
    </div>
  </div>

    <TransactionComponent searchForType="all" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import TransactionType from "@/types/TransactionType";
import TransactionComponent from "@/components/TransactionComponent.vue"

export default defineComponent({
  name: "ChecksView",
  components: {
    TransactionComponent
  },
  setup() {
    return { }
  }
})
</script>

<style>
.page {
  margin: auto;
  width: 60%;
  padding: 10px;
}
</style>

<template>
  <div class="page">
    <div id="geral">
      <div id="conteudo-1">
        <h3>Account Resume:</h3>

        <div class="block">
                  <div class="row balance">
          Current Balance: <strong>$ {{ balance.balance }}</strong>
        </div>

        <div class="row">
          Incomes: <strong>$ {{ balance.incomesAmount }}</strong>
        </div>
        <div class="row">
          Expenses: <strong>$ {{ balance.expenseAmount }}</strong>
        </div>
          </div>


      </div>
      <div id="conteudo-2">
        <div class="status">
          <div class="row"><a href="/deposit" class="btn btn-success">+ Deposit a Check</a></div>
          <br />
          <div class="row"><a href="/purchase" class="btn btn-danger">+ Purchase</a></div>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
    <TransactionComponent searchForType=" " />
  </div>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { defineComponent, ref } from "vue";
import TransactionComponent from "@/components/TransactionComponent.vue"
import api from "@/services/api";

export default defineComponent({
  name: "ChecksView",
  components: {
    TransactionComponent
  },
    setup() {
      const balance = ref([]);

      api.post("/accounts/resume/2022-06", {
        account_id: localStorage.getItem('account_id')
      }).then(response => {
            balance.value = response.data
      }).catch(error => {
              console.log(error);
      });

      return { balance }
    }
})
</script>

<style>
.page {
  margin: 0 auto;
  float: left;
  width: 60%;
  padding: 10px;
}


body {
    margin:0;
    padding:0;
    color:#000;
    background:#fff;
}
#content {
    width:90%;
    margin:0 auto;
}

#conteudo-1 {
    font-size: 14px;
    float:left;
    width:60%;
    padding: 15px;
}
#conteudo-2 {
    float: right;
    width: 40%;
    padding: 15px;
}

.balance {
  font-size: 16px;
  padding-bottom: 10px;
}

.block {
  padding-left: 25px;
}

</style>

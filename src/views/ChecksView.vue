<template>
  <div class="page">
      <header>
        <h3 class="p-3 text-center">Checks</h3>
        <div class="status">
          <button @click="handleClick('pending')" class="btn btn-warning">Pending</button>
          <button @click="handleClick('approved')" class="btn btn-success">Approved</button>
          <button @click="handleClick('rejected')" class="btn btn-danger">Rejected</button>
        </div>
      </header>
      <br />
      <ChecksComponent :searchForStatus="searchForStatus" />
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from "vue";
import StatusCheck from "@/types/StatusCheck";
import ChecksComponent from "@/components/ChecksComponent.vue"

export default defineComponent({
  name: "ChecksView",
  components: {
    ChecksComponent
  },
  setup() {
    const searchForStatus = ref<StatusCheck>('pending')
    const handleClick = (statusValue: StatusCheck) => {
      searchForStatus.value = statusValue
    }

    return {handleClick, searchForStatus}
  }
})

</script>

<style>
.status button {
  margin-left: 5px;
}
.status {
  margin: 0 auto;
  width: 300px;
}
.page {
  margin: auto;
  width: 60%;
  padding: 10px;
}
</style>
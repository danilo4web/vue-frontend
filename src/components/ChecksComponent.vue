<template>
    <table class="table table-striped table-bordered">
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="check in foundChecks" :key="check.id">
                  <td>{{ check.created_at }}</td>
                  <td>{{ check.description }}</td>
                  <td>{{ check.amount }}</td>
                  <td>{{ check.status }}</td>
              </tr>
          </tbody>
      </table>
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, ref } from "vue";
import Check from '@/types/Check'
import api from "@/services/api";
import { DOMDirectiveTransforms } from "@vue/compiler-dom";

export default defineComponent({
    name: "ChecksComponent",
    props: {
        searchForStatus: {
            required: true,
            type: String
        },
    },
    setup() {
        let foundChecks: any = '.';
        return {foundChecks}
    },
    watch: {
        searchForStatus(status) {
            let checks = this.getChecksByStatus(status);

            this.foundChecks = checks;
        }
    },
    methods: {
        getChecksByStatus(status: string) {
            const checks = ref([]);

            api.get("/checks/status/" + status).then(response => {
                    checks.value = response.data
            }).catch(error => {
                    console.log(error);
            });


            return checks;
        }
    }
});
</script>
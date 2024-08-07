<template>
  <v-container class="mt-16">
    <v-row>
      <v-col>
        <h4 class="font-weight-bold text-uppercase" style="color: #666">
          Management Products
        </h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div
          class="card mb-3"
          style="height: 200px; background-color: #f55252; color: #ffe"
        >
          <div class="card-body d-flex justify-space-around align-center">
            <div class="left m1-2 d-flex flex-column align-center">
              <h1 class="card-title text-white">278</h1>
              <h3 class="card-text text-uppercase text-white">Products</h3>
            </div>
            <div class="right">
              <v-icon size="x-large" style="font-size: 100px"> mdi-gift</v-icon>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <div
          class="card mb-3"
          style="height: 200px; background-color: #f77e17; color: #ffe"
        >
          <div class="card-body d-flex justify-space-around align-center">
            <div class="left m1-2 d-flex flex-column align-center">
              <h1 class="card-title">315</h1>
              <h3 class="card-text text-uppercase">Latest Added</h3>
            </div>
            <div class="right">
              <v-icon size="x-large" style="font-size: 100px">
                mdi-history</v-icon
              >
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h4 class="text-uppercase mt-16 font-weight-bold" style="color: #666">
          product list
        </h4>
      </v-col>
    </v-row>
    <data-table></data-table>
  </v-container>
</template>

<script>
import DataTable from "@/components/DataTable.vue";

// import LineChart from "./components/LineChart.vue";

export default {
  components: {
    DataTable,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>

<template>
  <v-container>
    <v-card class="mx-auto my-5" max-width="1200">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>Product Statistics</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="my-4">
              <v-card-title>Sales Line Chart</v-card-title>
              <v-card-text>
                <div>
                  <canvas id="line-chart"></canvas>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="my-4">
              <v-card-title>Sales Bar Chart</v-card-title>
              <v-card-text>
                <div>
                  <canvas id="bar-chart"></canvas>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="my-4">
              <v-card-title>Color Distribution Pie Chart</v-card-title>
              <v-card-text>
                <div>
                  <canvas id="pie-chart"></canvas>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="my-4">
              <v-card-title>Color Distribution Doughnut Chart</v-card-title>
              <v-card-text>
                <div>
                  <canvas id="doughnut-chart"></canvas>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { onMounted } from "vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "ChartsPage",
  setup() {
    onMounted(() => {
      // Line Chart
      new Chart(document.getElementById("line-chart"), {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Sales",
              backgroundColor: "#f87979",
              borderColor: "#f87979",
              data: [40, 39, 10, 40, 39, 80, 40],
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      // Bar Chart
      new Chart(document.getElementById("bar-chart"), {
        type: "bar",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Sales",
              backgroundColor: "#f87979",
              data: [40, 39, 10, 40, 39, 80, 40],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      // Pie Chart
      new Chart(document.getElementById("pie-chart"), {
        type: "pie",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "Colors",
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
              ],
              data: [12, 19, 3, 5, 2, 3],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      // Doughnut Chart
      new Chart(document.getElementById("doughnut-chart"), {
        type: "doughnut",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "Colors",
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
              ],
              data: [12, 19, 3, 5, 2, 3],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    });
  },
};
</script>

<style scoped>
.v-toolbar-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.v-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  font-weight: bold;
  font-size: 1.2rem;
}

canvas {
  width: 100% !important;
  height: 400px !important;
}
</style>

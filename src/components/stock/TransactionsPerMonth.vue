<template>
  <ion-card>
    <ion-card-content>
      <Chart type="bar" :data="basicData" :options="basicOptions" />
    </ion-card-content>
  </ion-card>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const basicData = ref({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#43A047',
          data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#EF5350',
          data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56, 55, 40],
        },
      ],
    });

    const basicOptions = ref({
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      },
    });

    return { basicData, basicOptions };
  },
};
</script>

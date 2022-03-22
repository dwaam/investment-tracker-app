<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Bank summary</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <Chart type="pie" :data="chartData" :options="lightOptions" />
    </ion-card-content>
  </ion-card>
</template>

<script>
import { defineComponent } from 'vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { ref } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle },
  setup() {
    const chartData = ref({
      labels: ['Revolut','Boursorama','Crédit Agricole'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#42A5F5","#ed4981","#2a602c"],
          hoverBackgroundColor: ["#64B5F6","#e91e63","#1e4620"],
          borderColor: "black",
        }
      ]
    });

    const lightOptions = ref({
      plugins: {
        legend: {
          display: false,
        }
      }
    });

    return { chartData, lightOptions }
  }
});
</script>

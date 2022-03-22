<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Symmary</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Summary</ion-title>
        </ion-toolbar>
      </ion-header>

      <OverallBalance/>
      <StockBalance/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import StockBalance from '@/components/stock/StockBalance.vue';
import OverallBalance from '@/components/OverallBalance.vue';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/vue";

export default defineComponent({
  name: 'SummaryPage',
  components: { StockBalance, OverallBalance, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>

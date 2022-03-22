<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Stock</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Stock</ion-title>
        </ion-toolbar>
      </ion-header>
      <StockBalance/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import StockBalance from '@/components/stock/StockBalance.vue';

export default defineComponent({
  name: 'CryptoPage',
  components: { StockBalance, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>

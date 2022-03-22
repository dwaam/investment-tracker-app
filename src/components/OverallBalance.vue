<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title class="flex justify-content-between">
        Overall balance
        <MoneyBag/>
      </ion-card-title>
    </ion-card-header>

    <ion-card-content class="text-xl">
      <div class="flex justify-content-between mb-1 text-orange-500">
        <span>
          <font-awesome-icon :icon="['fab', 'bitcoin']" class="mr-2"/>Crypto
        </span>
        <span class="text-white">19800€</span>
      </div>
      <div class="flex justify-content-between mb-1 text-green-500">
        <span>
          <font-awesome-icon :icon="['fas', 'arrow-trend-up']" class="mr-2"/>Stocks
        </span>
        <span class="text-white">9120€</span>
      </div>
      <div class="flex justify-content-between text-cyan-600">
        <span>
          <font-awesome-icon :icon="['fas', 'piggy-bank']" class="mr-2"/>Bank
        </span>
        <span class="text-white">78800€</span>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { defineComponent } from 'vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';

import MoneyBag from '@/components/ui/icons/MoneyBag.vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, MoneyBag },
});
</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ bankName }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div
          v-for="asset in assets"
          :key="asset.name"
          class="flex justify-content-between border-bottom-2 py-2">
        <span>{{ asset.name }}</span>
        <span class="text-white">{{ asset.amount }}</span>
      </div>
      <div class="flex justify-content-between text-white text-2xl py-2">
        <span>Total</span>
        <span class="font-bold">{{ sumOfAssetAmounts }}</span>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {computed, defineComponent, toRefs} from 'vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle },
  props: {
    bankName: {
      type: String,
      required: true,
    },
    assets: {
      required: true,
      type: Array,
    }
  },
  setup(props) {
    const sumOfAssetAmounts = computed(() => props.assets.reduce((a, b) => a + b.amount, 0))

    return {
      sumOfAssetAmounts,
    }
  }
});
</script>

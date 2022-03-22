<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Stock balance</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <div class="grid">
        <div class="col">
          <div>Invested</div>
          <div class="font-bold text-4xl text-white">9538€</div>
        </div>
        <div class="col">
          <div>Bought</div>
          <div class="font-bold mb-2 text-xl text-green-300">10538€</div>
          <div>Sold</div>
          <div class="font-bold text-xl text-pink-300">138€</div>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { defineComponent } from 'vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle },
});
</script>

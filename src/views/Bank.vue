<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Bank accounts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Bank accounts</ion-title>
        </ion-toolbar>
      </ion-header>
      <BankSummary/>
      <BankBalance bank-name="Crédit Agricole" :assets="assets"/>
      <BankBalance bank-name="Revolut" :assets="assets"/>
      <BankBalance bank-name="Boursorama" :assets="assets"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import BankBalance from '@/components/bank/BankBalance.vue';
import BankSummary from '@/components/bank/BankSummary.vue';

export default defineComponent({
  name: 'BankPage',
  components: { BankBalance, BankSummary, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    const assets = ref([
      {
        name: 'Compte courant',
        amount: 12345,
      },
      {
        name: 'Livret A',
        amount: 21345,
      },
      {
        name: 'LDD',
        amount: 12345,
      },
      {
        name: 'PEL',
        amount: 72345,
      },
      {
        name: 'Assurance vie',
        amount: 2345,
      },
    ]);

    return {
      assets,
    }
  }
});
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="summary" href="/section/summary">
          <font-awesome-icon class="text-3xl" :icon="['fas', 'wallet']"/>
        </ion-tab-button>

        <ion-tab-button tab="crypto" href="/section/crypto">
          <font-awesome-icon class="text-3xl" :icon="['fab', 'bitcoin']"/>
        </ion-tab-button>

        <ion-tab-button tab="bank" href="/section/bank">
          <font-awesome-icon :icon="['fas', 'piggy-bank']" class="text-3xl"/>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/section/stock">
          <font-awesome-icon :icon="['fas', 'chart-line']" class="text-3xl"/>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonPage, IonRouterOutlet } from '@ionic/vue';

export default defineComponent({
  name: 'TabsPage',
  components: { IonTabs, IonTabBar, IonTabButton, IonPage, IonRouterOutlet },
});
</script>

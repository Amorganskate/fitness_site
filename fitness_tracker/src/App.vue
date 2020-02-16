<template>
  <v-app>
    <v-content>
      <v-sheet light class="px-3 pt-3 pb-12">
        <v-skeleton-loader class="mx-auto" max-width="800" type="card">
          <calculator/>
        </v-skeleton-loader>
      </v-sheet>
    </v-content>
  </v-app>
</template>

<script>
import calculator from './components/macro_calculator';

export default {
  name: 'App',

  components: {
    calculator,
  },

  data: () => ({
    //
  }),
};
</script>

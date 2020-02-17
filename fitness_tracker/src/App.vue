<template>
  <v-app>
    <v-content>
      <v-sheet light class="px-3 pt-3 pb-12">
        <v-skeleton-loader class="mx-auto" type="card">
          <v-row>
            <v-col class="xs12">
              <caloriecalculator :send_calories="send_calories"/>
            </v-col>
            <v-col v-if="tdee_calories != 0" class="xs12">
              <macrocalculator :calories="tdee_calories" />
            </v-col>
          </v-row>
        </v-skeleton-loader>
      </v-sheet>
    </v-content>
  </v-app>
</template>

<script>
import caloriecalculator from './components/calorie_calculator';
import macrocalculator from './components/macro_calculator';

export default {
  name: 'App',

  components: {
    caloriecalculator,
    macrocalculator
  },

  data: () => ({
    tdee_calories: 0,
    calories: 0,
  }),
  methods:{
    send_calories(value){
      console.log(value)
      this.tdee_calories = value;
    }
  }
};
</script>

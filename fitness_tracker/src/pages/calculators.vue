<template>
  <v-row>
      <v-col xs12>
          <h1>Calculate Your Calories & Macros</h1>
          <v-row>
              <v-col>
                <calorie_calc :send_calories="send_calories"/>
              </v-col>
              <v-col v-if="tdee_calories != 0">
                  <macros_calc :calories="tdee_calories"/>
              </v-col>
          </v-row>
      </v-col>
  </v-row>
</template>


<script>
import calorie_calc from '../components/calorie_calculator'
import macros_calc from '../components/macro_calculator'
export default {
    components: { 
        calorie_calc,
        macros_calc 
    },
    data: () => ({
        tdee_calories: 0
    }),
    methods:{
        send_calories(value){
            this.tdee_calories = value;
        }
    }
};
</script>

<style scoped>

</style>


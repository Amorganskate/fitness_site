<template>
  <v-card elevation="7">
      <v-card-title class="text-center headline">Macro Calculator</v-card-title>
      <v-row>
          <v-col class="text-center headline">
              {{calories}} Calories
          </v-col>
      </v-row>

      <v-row>
          <v-col class="ml-3">
              <v-select v-model="selected_protein" :items="protein_percentage" label="Protein Percentage"></v-select>
          </v-col>
          <v-col>
              <v-select v-model="selected_carb" :items="carb_percentage" label="Carb Percentage"></v-select >
          </v-col>
          <v-col class="mr-3">
              <v-select v-model="selected_fat" :items="fat_percentage" label="Fat Percentage"></v-select >
          </v-col>
      </v-row>

      <v-row v-if="over_hundred_percent">
          <v-col>
            <v-alert color="error">Make Sure Percentages are not over 100%</v-alert>
          </v-col>
      </v-row>
      <v-row v-if="!over_hundred_percent" class="title">
        <v-col class="ml-3">
            Protein Macros: {{protein_macro_total}}
        </v-col>
        <v-col>
            Carb Macros: {{carb_macro_total}}
        </v-col>
        <v-col class="mr-3">
            Fat Macros: {{fat_macro_total}}
        </v-col>
      </v-row>
  </v-card>
</template>

<script>
export default {
    props: ['calories'],
    computed:{
        over_hundred_percent: function(){
            return this.selected_protein + this.selected_carb + this.selected_fat > 100;
        },
        carb_macro_total: function(){
            var result = (this.calories * this.selected_carb) 
            return (result / 4).toFixed(0);
        },
        protein_macro_total: function(){
            return ((this.calories * this.selected_protein) / 4).toFixed(0);
        },
        fat_macro_total: function(){
            return ((this.calories * this.selected_fat) / 9).toFixed(0);
        },
        
    },
    data(){
        return {
            fat_percentage: [
            ],
            carb_percentage: [
            ],
            protein_percentage: [
            ],
            selected_protein: 0,
            selected_carb: 0,
            selected_fat: 0,
            
        }
    },
    methods:{

    },
    mounted(){
        var num = .05;
        for(var i = 0; i < 20; i++){
            
            if(i != 0)
            {
                num = num + .05;
            }
            var string_percent = num.toFixed(2) + '%'

            this.fat_percentage.push({ text: string_percent, value: num})
            this.carb_percentage.push({ text: string_percent, value: num})
            this.protein_percentage.push({ text: string_percent, value: num})
        }

    }
}
</script>

<style>

</style>
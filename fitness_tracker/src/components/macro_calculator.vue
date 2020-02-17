<template>
  <v-card elevation="7">
      <v-card-title class="text-center headline">Macro Calculator</v-card-title>
      <v-row>
          <v-col>
              {{calories}}
          </v-col>
          
      </v-row>
  </v-card>
</template>

<script>
export default {
    props: ['calories'],
    data(){
        return {

        }
    },
    methods:{

    },
    mounted(){
        console.log(this.calories)
    }
}
</script>

<style>

</style>
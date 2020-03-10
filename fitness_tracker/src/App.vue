<template>
  <v-app>
     <app-navigation-drawer></app-navigation-drawer>
    <v-content>
      <v-container class="grey lighten-5" fluid="fluid" fill-height="fill-height">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from './components/navigation.vue';
export default {
  name: 'App',

  components: { 'app-navigation-drawer': NavigationDrawer },


  data: () => ({
    tdee_calories: 0,
    calories: 0,
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
  }),
  methods:{
  },
  mounted(){
  }
};
</script>

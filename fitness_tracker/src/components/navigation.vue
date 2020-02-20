<template>
    <v-navigation-drawer app stateless value="true">
        <v-list-item v-for="item in navigation" :key="item.name" link>
            <v-list-item-content>
              <v-list-item-title>
                  <router-link :to="item.to">{{ item.name }}</router-link>
                  
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

    </v-navigation-drawer>
</template>
<script>
import navigation from '@/navigation'
export default {
    name: 'app-navigation-drawer',
    data(){
        return {
            navigation: navigation,
        }
    },
    mounted(){
        console.log(this.navigation)
    }
}
</script>
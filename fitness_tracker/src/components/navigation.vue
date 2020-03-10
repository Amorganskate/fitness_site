<template>
    <v-navigation-drawer dark app value="true">
        <v-list-item v-for="item in navigation" :key="item.name" link>
            <v-list-item-content>
            <!-- <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon> -->
              <v-list-item-title>
                  <router-link class="router_link" :to="item.to">{{ item.name }}</router-link>
                  
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

    </v-navigation-drawer>
</template>
<script>
import navigation from '@/navigation'
import '@mdi/font/css/materialdesignicons.css'
export default {
    name: 'app-navigation-drawer',    
    data(){
        return {
            navigation: navigation,
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
.router_link{
    color: white;
    font-weight: bold;
    text-decoration: none;
}
</style>
import Vue from 'vue'
import Router from 'vue-router'
import calorie_calculator from '../components/calorie_calculator'
import index from '../pages/index'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "index",
            component: index
        },
        
        {
            path: '/calorie_calculator',
            name: 'calorie_calculator',
            component: calorie_calculator
        }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import calorie_calculator from '../pages/calculators'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/home",
            name: "home",
            component: index
        },
        
        {
            path: '/calculators',
            name: 'calorie_calculator',
            component: calorie_calculator
        }
    ]
})
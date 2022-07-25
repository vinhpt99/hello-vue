import MyHome from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import LoginPage  from './components/Login.vue'
import AddRestaurant from './components/Addrestaurant.vue'
import UpdateRestaurant from './components/Updaterestaurant.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export const router = new VueRouter({
   routes: [
   {  
      name: 'Home',
      component: MyHome,
      path: "/",
   },
   {  
      name: 'SignUp',
      component: SignUp,
      path: "/sign-up",
   },
   {  
      name: 'LoginPage',
      component: LoginPage,
      path: "/login",
   },
   {  
      name: 'AddRestaurant',
      component: AddRestaurant,
      path: "/add",
   },
   {  
      name: 'UpdateRestaurant',
      component: UpdateRestaurant,
      path: "/update/:id",
   }
   ]
})


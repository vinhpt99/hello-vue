<template>
   <div>
        <Header/>
        <h1>Cập nhật thông tin nhà hàng</h1>
        <form class="add">
             <input type="text" name="name"    placeholder="Enter Name" v-model = "restaurant.name"/>
             <input type="text" name="address" placeholder="Enter Name" v-model = "restaurant.address"/>
             <input type="text" name="contact" placeholder="Enter Name" v-model = "restaurant.contact"/>
             <button type="button"  v-on:click="updateRestaurant">Update restaurant</button>
        </form>
   </div>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: 'UpdateRestaurant',
    data(){
         return {
            name: '',
            restaurant: [],
         }
   },
   async mounted(){
         let user = localStorage.getItem('user-info');
         if(!user){
            this.$router.push({name:'SignUp'})
         }
         const result      = await axios.get("http://localhost:3000/restaurant/"+ this.$route.params.id);
         this.restaurant   = result.data;
         console.log(this.$route.params.id);
   },
   components: {
       Header
    },
    methods: {
         async updateRestaurant(){
             const result = await axios.put("http://localhost:3000/restaurant/"+ this.$route.params.id, {
                 name:    this.restaurant.name,
                 address: this.restaurant.address,
                 contact: this.restaurant.contact,
             });
             if(result.status == 200){
                 this.$router.push({name:'Home'})
             }
         }

    }
 } 
</script>
<style>
.nav {
   background-color: #333;
   overflow: hidden;
}
.nav a {
   float: left;
   color: #ffff;
   padding: 14px 16px;
   text-align: center;
   font-size: 17px;
   text-decoration: none;
   margin-right: 5px;
}
.nav a:hover {
  background: #ddd;
  color: #333;
}
     



</style>
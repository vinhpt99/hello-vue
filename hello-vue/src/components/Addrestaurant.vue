<template>
   <div>
        <Header/>
        <h1>Trang thêm mới nhà hàng</h1>
        <form class="add">
             <input type="text" name="name"    placeholder="Enter Name" v-model = "restaurant.name"/>
             <input type="text" name="address" placeholder="Enter Name" v-model = "restaurant.address"/>
             <input type="text" name="contact" placeholder="Enter Name" v-model = "restaurant.contact"/>
             <button type="button" v-on:click="addRestaurant" >Add new restaurant</button>
        </form>
   </div>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'AddRestaurant',
    components: {
       Header
    },
    data(){
      return {
         restaurant: {
            name:    '',
            address: '',
            contact: ''
         }
      }
    },
    methods: {
         async addRestaurant(){
            const result = await axios.post("http://localhost:3000/restaurant", {
                 name:    this.restaurant.name,
                 address: this.restaurant.address,
                 contact: this.restaurant.contact,
             });
             if(result.status == 201){
                 this.$router.push({name:'Home'})
             }
             console.log(result);
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
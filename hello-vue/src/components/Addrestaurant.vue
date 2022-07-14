<template>
   <div>
        <Header/>
        <h1>Trang thêm mới nhà hàng</h1>
   </div>
</template>
<script>
import Header from './Header.vue';
export default {
    name: 'AddRestaurant',
    components: {
       Header
    },
    methods: {
      logout(){
           localStorage.clear();
           this.$router.push({name: 'LoginPage'});
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
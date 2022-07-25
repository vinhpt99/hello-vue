<template>
 <div>    
         <Header/>
         <h1>Xin chào bạn {{name}}, chào mừng đến với trang chủ</h1>
         <table border="1">
             <tr>
               <td>ID</td>
               <td>Name</td>
               <td>Contact</td>
               <td>Address</td>
               <td>Actions</td>
             </tr>
             <tr v-for="item in restaurant" :key= "item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
                <td>
                    <div>
                        <router-link :to="'/update/' + item.id">Update</router-link>
                    </div>
                    <div style = "margin-top: 5px;">
                        <button v-on:click="deleteRestaurant(item.id)">Delete</button>
                    </div>
                </td>
             </tr>
         </table>
        
        <input type="text" v-model="message">
        <div>{{ reverseMessage }}</div>
       
        
      
        
 </div>

   
</template>
<script>
   import Header from './Header.vue';
   import axios from 'axios';
   
   
   export default {
      name: 'MyHome',
      data(){
         return {
            count : '',
            name: '',
            restaurant: [],
            message: 'this is text'
         }
      },
      computed: {
            reverseMessage() {
               
              
                return this.message.split('').reverse().join('')
            },
            
            // username(){
            //    console.log($store);
            //    return 5;
            //    //  return this.$store.state.username;
            // }
        },
      components: {
         Header
      },
      methods:{
         async deleteRestaurant(id){
                const result = await axios.delete("http://localhost:3000/restaurant/"+ id);
                if(result.status == 200){
                     this.loadData();
               }
          },
         async loadData(){
            let user  = localStorage.getItem('user-info');
            this.name = JSON.parse(user).username;
            if(!user){
                   this.$router.push({name: 'SignUp'})
            }
            let result = await axios.get('http://localhost:3000/restaurant');
            this.restaurant = result.data;


         }
      },
      async mounted(){
           this.loadData();
      }
   }

</script>
<style>
td {
   width: 160px;
   height: 40px;
}


</style>
<template>
 <div>    
         <Header/>
         <h1>Xin chào bạn {{name}}, chào mừng đến với trang chủ</h1>
        
 </div>

   
</template>
<script>
   import Header from './Header.vue';
   export default {
      name: 'MyHome',
      data(){
         return {
            name: ''
         }
      },
      components: {
         Header
      },
      mounted(){
            let user  = localStorage.getItem('user-info');
            this.name = JSON.parse(user).username;
            console.log(user);
            if(!user){
                   this.$router.push({name: 'SignUp'})
            }
        }
   }

</script>
<template>
    <div>
            <img class="logo" src="../assets/logo_cmc.webp" alt="">
            <h1>Sign Up</h1>
            <div class="register">
                <input v-model="name" type="text" placeholder="Enter Name"/>
                <input v-model="email" type="text" placeholder="Enter Email"/>
                <input v-model="password" type="text" placeholder="Enter Password"/>
                <button v-on:click="signUp">Sign Up</button>
            </div>
            <p>
                <router-link to="/login">Login</router-link>
            </p>
    </div>
    
    
</template>
<script>
   import axios from 'axios'
   export default {
        name: 'SignUp',
        data()
        {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            async signUp(){
                  let result = await axios.post("http://localhost:3000/user", {
                      email: this.email,
                      password: this.password,
                      username: this.name
                  });
                  console.log(result);
                  if(result.status == 201){
                       localStorage.setItem("user-info", JSON.stringify(result.data))
                       this.$router.push({name: 'Home'})
                  }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                   this.$router.push({name: 'Home'})
            }
        }
   }

</script>
<style>


</style>
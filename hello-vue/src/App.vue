<template>
  <div id="app">
      <router-view/>
      
  </div>
</template>
<Home/>
<script>

export default {
  name: 'App',
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.logo {
     width:  450px;
     height: 150px;
}
.register input, .login input, .add input {
     width: 300px;
     height: 40px;
     padding-left: 20px;
     display: block;
     margin-bottom: 30px;
     margin-right: auto;
     margin-left: auto;
     border: 1px solid skyblue;
}

.register button, .login button, .add button {
     width:  320px;
     height: 40px;
     border: 1px solid skyblue;
     background: skyblue;
     color: #fff;
     cursor: pointer;

}
body {
  margin: 0;
  padding: 0;
}
table {
  margin: 0 auto;
}

</style>

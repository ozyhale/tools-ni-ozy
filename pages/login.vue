<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" placeholder="Username">
      <input type="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  methods:{
    login(){
      alert("Login");
    }
  }
}
</script>

<style scoped>

</style>
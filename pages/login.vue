<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <button type="submit" :disabled="process">Login</button>
    </form>
  </div>
</template>

<script>
import globalMixin from "~/mixins/global";

export default {
  mixins: [globalMixin],

  mounted(){
    this.logout();
  },

  data(){
    return {
      email : "",
      password : "",
      process: false
    }
  }
}
</script>

<style scoped>

</style>
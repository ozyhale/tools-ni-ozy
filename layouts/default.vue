<template>
  <div class="p-2">
    <div id="navigation">

      <div class="flex flex-row">
        <div>
          <span v-for="(item, key) in menu" :key="key">
            <nuxt-link :to="item.to">
              <span class="link">{{item.name}}</span>
            </nuxt-link>
            <span v-if="key < (menu.length-1)">| </span>
          </span>
        </div>
        <div class="flex-grow">
          <span class="float-right">
            <span v-if="currentUser != null">
              <a class="link cursor-pointer" @click="logout">Logout</a>
            </span>
            <span v-else>
              <nuxt-link to="/login">
                <span class="link">Login</span>
              </nuxt-link>
            </span>
          </span>
        </div>
      </div>

    </div>

    <div id="contents" class="m-4">
      <Nuxt />
    </div>

    <div id="footer"></div>
  </div>
</template>

<script>
import globalMixin from "~/mixins/global";

export default {
  mixins: [globalMixin],
  data(){

    let menu = [];
    let i = 0;

    this.$router.options.routes.forEach(route => {
      if(route.name == "login") return false;
      let name = route.name === "index" ? "Home" : route.name.charAt(0).toUpperCase() + route.name.slice(1);
      let order = route.name === "index" ? 0 : ++i;
      menu.push({name: name, to: route.path, order: order});
    });

    menu.sort((a,b) => (a.order - b.order));

    return {
      menu: menu
    }
  }
}
</script>

<style lang="postcss">

@layer base{
  body{
    @apply bg-gray-800 text-gray-300
  }

  a:hover {
    @apply text-gray-500;
  }

  textarea, input[type=password], input[type=text] {
    @apply border-2 p-1 bg-gray-900 border-gray-900
  }

  /* button{
    @apply text-white text-sm py-2 px-3 rounded-md bg-blue-500
  }

  button:hover{
    @apply bg-blue-600 shadow-lg
  }

  button:focus{
    @apply outline-none
  } */

  button{
    @apply text-white text-sm py-2 px-5 rounded-md border border-gray-500
  }

  button:focus{
    @apply outline-none
  }

  button:hover{
    @apply bg-gray-700
  }
}
</style>

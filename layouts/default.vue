<template>
  <div>
    <div id="navigation">

      <span v-for="(item, key) in menu" :key="key">
        <nuxt-link :to="item.to">
          <span class="link">{{item.name}}</span>
        </nuxt-link>
        <span v-if="key < (menu.length-1)">| </span>
      </span>

    </div>

    <div id="contents" class="m-4">
      <Nuxt />
    </div>

    <div id="footer"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menu: [
        {"name" : "Home", "to" : "/"},
        {"name" : "Secrets", "to" : "/secrets"}
      ]
    }
  }
}
</script>

<style lang="postcss">
span.link:hover {
  @apply text-blue-500;
}

button {
  @apply bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded;
}

button:hover {
  @apply bg-blue-500 text-white border-transparent;
}
</style>

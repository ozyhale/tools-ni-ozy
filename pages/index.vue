<template>
  <div>
    <div v-if="currentUser">
      Currently logged in as {{currentUser.email}}
    </div>
    <div v-else>Tools ni Ozy</div>
  </div>
</template>

<script>
import globalMixin from "~/mixins/global";

export default {
  mixins: [globalMixin]
}
</script>

<style>

</style>

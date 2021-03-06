<template>
  <div>
    <form>
      <div class="mb-1 flex flex-row">
        <label for="encrypt" class="mr-3 cursor-pointer">
          <input id="encrypt" type="radio" name="action" v-model="action" value="encrypt" @change="actionChanged" /> Encrypt
        </label>
        <label for="decrypt" class="cursor-pointer">
          <input id="decrypt" type="radio" name="action" v-model="action" value="decrypt" @change="actionChanged" /> Decrypt
        </label>
      </div>
      <textarea v-model="text" name="text" class="border-2 p-1 w-full h-56"></textarea>
      <input v-model="password" type="password" class="border-2 p-1 w-full mb-1" placeholder="Password" />
      <div v-if="action == 'encrypt'">
        <button type="button" class="mt-1" @click="encrypt">Encrypt</button>
      </div>
      <div v-else>
        <button type="button" class="mt-1 bordered" @click="decrypt">Decrypt</button>
      </div>
      <div class="border-2 p-1 w-full h-56 mt-2 font-mono break-all bg-gray-900 border-gray-900">{{output}}</div>
    </form>
  </div>
</template>

<script>
import crypt from '~/plugins/crypt.js';

export default {

  data() {
    return {
      text: "",
      password: "",
      output: "",
      action: "encrypt"
    };
  },

  methods: {

    encrypt() {
      try {
        this.output = crypt.encrypt(this.text, this.password);
      } catch (err) {
        alert(err);
      }
    },

    decrypt() {
      try{
        this.output = crypt.decrypt(this.text, this.password);
      }catch(err){
        alert(err);
      }
    },

    actionChanged(){
      this.text = "";
      this.output = "";
    }

  },
};
</script>

<style lang="postcss">

</style>

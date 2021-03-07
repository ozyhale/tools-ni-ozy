<template>
  <div>
    <form @submit.prevent="get">
      <div>
        <input v-model="key" type="text" class="mb-2 w-full" placeholder="Key">
      </div>
      <div>
        <input v-model="password" type="password" class="mb-2 w-1/2" placeholder="Password">
      </div>
      <div>
        <button class="mb-2">Get</button>
      </div>
    </form>
    <form @submit.prevent="save">
      <div>
        <textarea v-model="message" class="w-full" style="height: 22rem;" @change="showSaveBtn = true"></textarea>
      </div>
      <div v-if="showSaveBtn">
        <button>Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import crypt from '~/plugins/crypt.js';

export default {
  data(){
    return {
      key: "",
      message: "",
      password: "",
      showSaveBtn: false
    }
  },
  mounted(){
    this.$fire.auth.onAuthStateChanged(user => {
      if(!user){
        this.$router.push("/login");
      }
    });
  },
  methods: {

    async get(){
      if(this.key === "") return;
      if(this.password === "") return;

      let doc = await this.$fire.firestore.collection("notes").doc(this.key).get();
      if (!doc.exists){
        alert("No such document");
        return;
      }
      let data = doc.data();
      this.message = crypt.decrypt(data.message, this.password);
    },

    async save(){
      if(this.key === "") return;
      if(this.password === "") return;
      if(this.message === "") return;

      try {
        let ncryptdMsg = crypt.encrypt(this.message, this.password);
        await this.$fire.firestore.collection("notes").doc(this.key).set({
          message: ncryptdMsg
        });
        this.showSaveBtn = false;
        alert(`${this.key} saved!`);
      } catch (err) {
        alert(err);
      }
    }

  }
}
</script>

<style>

</style>

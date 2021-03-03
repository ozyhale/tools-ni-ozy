<template>
  <div>
    <form action="" method="post">
      <input v-model="password" type="text" class="border-2 p-1 w-full mb-1" placeholder="Password" />
      <textarea v-model="text" name="text" class="border-2 p-1 w-full h-56"></textarea>
      <button type="button" @click="encrypt">Encrypt</button>
      <button type="button" @click="decrypt">Decrypt</button>
      <div class="border-2 p-1 w-full h-56 mt-2 font-mono break-all">{{output}}</div>
    </form>
  </div>
</template>

<script>
import crypto from 'crypto';

export default {

  data() {
    return {
      text: "",
      password: "",
      output: ""
    };
  },

  methods: {

    encrypt() {

      this.output = "";

      let key = crypto.createHash("sha256").update(this.password).digest();
      let iv = crypto.randomBytes(16);

      let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
      let encryptedText = cipher.update(this.text);

      encryptedText = Buffer.concat([encryptedText, cipher.final()]);

      this.output = iv.toString("hex") + ":" + encryptedText.toString("hex");
    },

    decrypt() {

      this.output = "";

      let key = crypto.createHash("sha256").update(this.password).digest();
      let aText = this.text.split(":");
      if(aText.length == 2){
        let iv = Buffer.from(aText[0], 'hex');
        let encryptedText = Buffer.from(aText[1], "hex");

        let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
        let decryptedText = decipher.update(encryptedText);

        decryptedText = Buffer.concat([decryptedText, decipher.final()]);

        this.output = decryptedText.toString();
      }else{
        this.output = "Invalid Input";
      }

    }

  },
};
</script>

<style lang="postcss">

</style>

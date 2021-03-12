export default {
  data() {
    return {
      currentUser: null
    }
  },
  mounted() {
    this.$fire.auth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  },
  methods:{
    async login(){
      this.$nuxt.$loading.start();

      try{
        await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password);
        this.$router.push("/");
      }catch(err){
        alert(err.message);
      }

      this.$nuxt.$loading.finish();
    },
    async logout(){
      await this.$fire.auth.signOut();
    }
  }
}
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
      await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password);
      this.$nuxt.$loading.finish();
      this.$router.push("/");
    },
    async logout(){
      await this.$fire.auth.signOut();
    }
  }
}
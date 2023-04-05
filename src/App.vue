 
<template>
  <div id="app">
    <AppHeader :user="user" />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import UserService from "@/services/User.service";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      user:null,
    };
  },
  
  methods: {
    async getuser() {
      try {
        if(localStorage.getItem("user")){
            this.user= await UserService.getUser({token:localStorage.getItem("user")});
        } 
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
     this.getuser();
     
     
  },
 
};
</script> 
<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>

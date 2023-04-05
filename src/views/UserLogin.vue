<template> 
   <div v-if="contact" class="page"> 
        <h4>Đăng Nhập</h4> 
        <LoginVue 
        :contact="contact"
        @submit:login="Logina"
        />
        <p>{{ message }}</p> 
    </div> 
</template> 
<script> 
import LoginVue from '@/components/login.vue';
import UserService from "@/services/User.service"; 

export default { 
    components: { 
        LoginVue, 
    },
    data() { 
        return { 
            contact: null, 
            message: "", 
        }; 
    },
    methods: { 
        async Logina(data){
             try {
               const token= await UserService.login(data);
                localStorage.setItem("user",token.accessToken)
               
                this.$router.push({ name: "contactbook" });   
            } catch (error) { 
                if(error.response.data.message==="incorrect  username or password"){
                     this.message = "Username và Password sai."; 
                }else{
                     console.log(error); 
                }
               
            } 
        }
    },
    created() { 
        this.contact={
               username:"",
               password:"",
                
            };
        this.message = ""
    }, 
};
</script>
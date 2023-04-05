<template> 
   <div v-if="information" class="page"> 
        <h4>Đăng Ký</h4> 
        <RegisterVue 
        :information="information"
        @submit:register="Createuser"
        />
        <p>{{ message }}</p> 
    </div> 
</template> 
<script> 
import RegisterVue from '@/components/register.vue';
import UserService from "@/services/User.service"; 

export default { 
    components: { 
        RegisterVue, 
    },
    data() { 
        return { 
            information: null, 
            message: "", 
        }; 
    },
    methods: { 
        async Createuser(data){
             try {
                 console.log(data)
               const token= await UserService.register(data);
                localStorage.setItem("user",token.accessToken)
                this.$router.push({ name: "contactbook" });   
                 
            } catch (error) { 
                if(error.response.data.message==="username already exists"){
                     this.message = "Username Đã Tồn tại."; 
                }else{
                     console.log(error); 
                }
               
            } 
        }
    },
    created() { 
        this.information={
               username:"",
               password:"",
                
            };
        this.message = ""; 
    }, 
};
</script>
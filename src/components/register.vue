<template> 
    <Form
        @submit="submitRegister" 
        :validation-schema="contactFormSchema" 
    > 
    <div class="form-group"> 
        <label for="Username">username</label> 
        <Field
            name="username" 
            type="text" 
            class="form-control" 
            v-model="informationLocal.username" 
        />
        <ErrorMessage name="username"  class="error-feedback" /> 
    </div> 
    <div class="form-group"> 
        <label for="password">Password</label> 
        <Field 
            name="password" 
            type="password" 
            class="form-control" 
            v-model="informationLocal.password" 
        />
        <ErrorMessage name="password" class="error-feedback" /> 
    </div> 
   
    <div class="form-group"> 
        <button 
             
            class="mr-2 btn btn-danger" 
            > 
            Đăng Ký
        </button> 
        <button type="button" class="btn btn-primary" @click="routerlogin">
            <i class="far fa-save mr-1" ></i>Đăng Nhập
        </button> 
    </div> 
    </Form> 
</template> 
<script> 
    import * as yup from "yup"; 
    import { Form, Field, ErrorMessage } from "vee-validate"; 
    export default { 
        components: { 
            Form, 
            Field, 
            ErrorMessage, 
        },
    emits: ["submit:register"], 
    props: { 
       information: { type: Object, required: true } 
    },
    data() { 
        const contactFormSchema = yup.object().shape({ 
            username: yup 
                .string() 
                .required("Username phải có giá trị.") 
                .min(2, "Username phải ít nhất 2 ký tự.") 
                .max(50, "Username có nhiều nhất 50 ký tự."), 
            password: yup 
                .string() 
                .required("Password phải có giá trị.") 
                .min(8, "Password phải ít nhất 8 ký tự.") 
                .max(50, "Password tối đa 50 ký tự."), 
          
        }); 
        return { 
              informationLocal: this.information, 
              contactFormSchema,
            }; 
        },
        methods: { 
            submitRegister() { 
                this.$emit("submit:register", this.informationLocal); 
            },
          routerlogin(){
                this.$router.push({ name: "Login" }); 
           }
        }, 
    };
</script> 
<style scoped> 
@import "@/assets/form.css"; 
</style>
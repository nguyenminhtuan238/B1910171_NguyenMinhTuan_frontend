<template> 
   <div v-if="contact" class="page"> 
        <h4>Thêm Liên hệ</h4> 
        <ContactForm 
        :contact="contact"
        @submit:contact="Createdcontact"
        />
        <p>{{ message }}</p> 
    </div> 
</template> 
<script> 
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service"; 
export default { 
    components: { 
        ContactForm, 
    },
    data() { 
        return { 
            contact: null, 
            message: "", 
        }; 
    },
    methods: { 
        async  Createdcontact(data){
             try {
                await ContactService.create(data); 
                this.message = "Thêm Liên hệ thành công."; 
            } catch (error) { 
                console.log(error); 
            } 
        }
    },
    created() { 
        this.contact={
                name:"",
                email:"",
                address:"",
                phone:"",
                favorite:false
            };
        this.message = ""; 
    }, 
};
</script>
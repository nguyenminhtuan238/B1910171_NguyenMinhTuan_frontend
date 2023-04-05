import { createWebHistory, createRouter } from "vue-router"; 
import ContactBook from "@/views/ContactBook.vue"; 
const routes = [ 
    { 
        path: "/", 
        name: "contactbook", 
        component: ContactBook, 
    }, 
    { 
        path: "/:pathMatch(.*)*", 
        name: "notfound", 
        component: () => import("@/views/NotFound.vue"), 
    },
    { 
        path: "/contacts/:id", 
        name: "contact.edit", 
        component: () => import("@/views/ContactEdit.vue"), 
        props: true 
    },
    { 
        path: "/addcontacts/", 
        name: "contact.add", 
        component: () => import("@/views/Contactadd.vue"), 
       
    },
    { 
        path: "/Login/", 
        name: "Login", 
        component: () => import("@/views/UserLogin.vue"), 
       
    },
    { 
        path: "/register/", 
        name: "register", 
        component: () => import("@/views/Userregister.vue"), 
       
    },
];
const router = createRouter({ 
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes, 
}); 
export default router;
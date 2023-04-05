import createApiClient from "./api.service"; 
class ContactService { 
    constructor(baseUrl = "/api/auth") { 
        this.api = createApiClient(baseUrl); 
    }
    async login(data) { 
        return (await this.api.post("/login",data)).data; 
    }
    async register(data) { 
        return (await this.api.post("/register", data)).data; 
    }
    async getUser(data) { 
        return (await this.api.post("/user",data)).data; 
    }
    
}
export default new ContactService();
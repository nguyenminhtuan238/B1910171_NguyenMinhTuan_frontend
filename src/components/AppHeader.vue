<script>
export default {
  props: {
    user: {},
    
  },
  data() {
    return {
     
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      window.location.reload();
    },
  },
};
</script> 
<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'contactbook' }" class="nav-link">
          Danh bạ
          <i class="fas fa-address-book"></i>
        </router-link>
      </li>
      <li v-if="!user" class="nav-item">
        <router-link :to="{ name: 'Login' }" class="nav-link">
          Đăng nhập
          <i class="fas fa-user"></i>
        </router-link>
      </li>
      <li v-if="user" class="nav-item">
        <span class="nav-link">
          {{ user.user }}
          <i class="fas fa-user"></i>
        </span>
      </li>
      <li v-if="user" class="nav-item">
        <a class="nav-link" @click="logout" href="#">Đăng Xuất</a>
      </li>
    </div>
  </nav>
</template>

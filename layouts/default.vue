<template>
    <div>

      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div class="container">
            <nuxt-link class="navbar-brand" to="/" style="font-weight: bold; font-size: 1.5rem;">My Store</nuxt-link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link class="nav-link" to="/products">Products</nuxt-link>
                </li>
                <li class="nav-item" v-if="isAuthenticated">
                  <button class="btn btn-outline-danger" @click="logout">Logout</button>
                </li>
                <li class="nav-item" v-else>
                  <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  
      <main class="container mt-4">
        <nuxt />
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAuthenticated: false 
      };
    },
    created() {
    
      const token = localStorage.getItem('token');
      this.isAuthenticated = !!token;
    },
    methods: {
      logout() {
        
        localStorage.removeItem('token');
    
        
        this.$router.push('/login');
    
  
        this.isAuthenticated = false;
      }
    },
    head() {
      return {
        title: 'My Store',
      };
    }
  };
  </script>
  
  <style scoped>

  .navbar {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .nav-link {
    font-size: 1.1rem;
    color: #555 !important;
  }
  
  .nav-link:hover {
    color: #007bff !important;
  }
  
  .btn-outline-danger {
    font-size: 1rem;
    font-weight: 600;
 
  }
  
  .btn-outline-danger:hover {
    background-color: #dc3545;
    color: #fff;
  }
  </style>
  
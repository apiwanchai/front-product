<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Login</h1>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="login" class="shadow-sm p-4 rounded bg-white">
            <div class="form-group mb-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                id="username"
                v-model="username"
                class="form-control"
                required
                placeholder="Enter your username"
              />
            </div>
            <div class="form-group mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="form-control"
                required
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Login
            </button>
          </form>
         
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'empty',
    middleware: 'auth',
    head() {
    return {
      title: 'Login',
    };
  },
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await this.$axios.$post('/api/auth/login', {
            username: this.username,
            password: this.password
          });
          localStorage.setItem('token', response.token);
          this.$router.push('/products');
        } catch (error) {
          console.error('Login failed:', error.response ? error.response.data : error.message);
          alert('Login failed. Please check your credentials.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* เพิ่มการตกแต่งให้กับฟอร์ม */
  form {
    background-color: #f8f9fa;
    border-radius: 8px;
  }
  
  .form-group label {
    font-weight: 600;
  }
  
  .btn-primary {
    font-weight: 600;
    padding: 12px;
  }
  
  .text-center {
    font-size: 0.9rem;
  }
  
  .text-decoration-none {
    color: #007bff;
  }
  
  .text-decoration-none:hover {
    text-decoration: underline;
  }
  </style>
  
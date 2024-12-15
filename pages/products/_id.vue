<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">{{ product.name }}</h1>
  
      <div class="row">
        <div class="col-md-6">
          <img :src="product.image" :alt="product.name" class="img-fluid rounded shadow-sm" />
        </div>
        <div class="col-md-6">
          <h2 class="text-primary">Price: ${{ product.price }}</h2>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    middleware: 'auth',
    async asyncData({ $axios, params }) {
      const product = await $axios.$get(`/products/${params.id}`);
      return { product };
    },
    head() {
      return {
        title: this.product.name,
        meta: [
          { hid: 'description', name: 'description', content: this.product.description },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

  img {
    max-height: 400px;
    object-fit: cover;
    width: 100%;
  }
  button {
    margin-top: 15px;
  }
  </style>
  
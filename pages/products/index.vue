<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Product List</h1>
  
      <div class="row g-4">
        <div v-for="product in products" :key="product.sku" class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img :src="product.image" class="card-img-top" :alt="product.name" />
            <div class="card-body">
              <h5 class="card-title text-primary">{{ product.name }}</h5>
              <p class="card-text fw-bold text-muted">Price: ${{ product.price }}</p>
              <nuxt-link :to="`/products/${product.id}`" class="btn btn-outline-primary w-100">
                View Details
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
  
     
      <nav aria-label="Product Pagination" class="mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
              Previous
            </button>
          </li>
  
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <button class="page-link" @click="changePage(page)">
              {{ page }}
            </button>
          </li>
  
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    middleware: 'auth',
    data() {
      return {
        products: [], 
        currentPage: 1, 
        pageSize: 6, 
        totalPages: 1, 
      };
    },
    async fetch() {
      await this.fetchProducts(this.currentPage);
    },
  
    methods: {
     
      async fetchProducts(page) {
        try {
          const response = await this.$axios.$get('/api/products', {
            params: { page, pageSize: this.pageSize },
          });
  
          this.products = response.products;
          this.currentPage =  response.page;
          this.totalPages = response.totalPages;
  
          console.log("Fetched data:", response);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
     
      changePage(page) {
        if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
          this.currentPage = page;
          this.fetchProducts(page);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 0.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  .pagination .page-link {
    color: #007bff;
    background-color: white;
    border: 1px solid #ddd;
  }
  .pagination .page-item.active .page-link {
    background-color: #007bff !important;
    border-color: #007bff !important;
    color: white !important;
    font-weight: bold !important;
  }
  .pagination .page-item.active {
    border: 2px solid #007bff !important;
    border-radius: 0.25rem;
  }
  .pagination .page-link:hover {
    background-color: #f8f9fa;
    border-color: #ddd;
  }
  </style>
  
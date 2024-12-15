
<template>
  <div class="container mt-5">
    <div class="text-center">
      <h1 class="display-4 mb-4">Welcome to My Store</h1>
      <p class="lead">Browse a variety of products and make your shopping experience amazing!</p>
      
      <nuxt-link to="/products" class="btn btn-primary btn-lg mt-4">
        Go to Products
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: 'Home - My Store',
      meta: [
        { name: 'description', content: 'Welcome to My Store, browse our amazing products!' }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin-top: 100px;
}

.display-4 {
  font-size: 3rem;
  font-weight: bold;
}

.lead {
  font-size: 1.25rem;
}

.btn-primary {
  font-size: 1.2rem;
  padding: 12px 24px;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>

export const state = () => ({
    products: []
  });
  
  export const mutations = {
    setProducts(state, products) {
      state.products = products;
    }
  };
  
  export const actions = {
    async fetchProducts({ commit }) {
      const response = await this.$axios.$get('/api/products');
      commit('setProducts', response);
    }
  };
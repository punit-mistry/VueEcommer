import { defineStore } from 'pinia';
import axios from 'axios';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    items: [],
    Cart:[],
  }),
  getters: {
    cartTotal() {
      return this.Cart.reduce((total, item) => total + item.quantity * item.price, 0);
    },
  },
  actions: {
    async fetchApi() { // Corrected the method name to lowercase 'fetchApi'
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
     //
        this.items = response.data; // Assuming you want to store the API response in 'items'
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },


    async AddCart(id) {
      try {
        const existingItemIndex = this.Cart.findIndex((item) => item.id === id);
        if (existingItemIndex !== -1) {
          this.Cart[existingItemIndex].quantity += 1;
        } else {
          const newItem = this.items.find((item) => item.id === id); // Find the item in this.items
          if (newItem) {
            newItem.quantity = 1; // Set the initial quantity to 1
            this.Cart.push(newItem); // Add the found item to the cart
          } else {
            console.error('Item not found:', id);
          }
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
    
  },

  
});

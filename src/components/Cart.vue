<template>
    <div class="mx-56 h-screen mt-10">
      <div v-if="StoreCounter.cartTotal === 0">
        <div class="flex justify-center items-center h-[80vh] ">
            <div class="bg-red-100 border-red-700 border-2 rounded-xl w-96 h-52 flex flex-col gap-5 hover:shadow-2xl hover:shadow-red-700 justify-center items-center text-2xl text-red-700">

                Please Select a Product first !!

                <button class="bg-blue-600 text-white p-2 rounded-xl" @click="GotoProductPage">Buy now</button>
            </div>
        </div>
      </div>
      <div v-else>
        <div class="flex flex-col gap-10 bg-gray-50 w-full h-full">
          <div v-for="cart in CartData" :key="cart.id" class="bg-orange-200 gap-5 flex justify-between p-5 border-2 border-black">
            <div class="flex gap-10">
              <div>
                <!-- Set a fixed width and height for the image -->
                <img :src="cart.image" width="150" height="150" />
              </div>
              <div class="flex flex-col gap-5">
                <span>{{ cart.title }}</span>
                <span class="bg-red-600 w-20 text-white font-bold text-center">75% Deal</span>
                <span class="font-bold">${{ cart.price }}</span>
              </div>
            </div>
            <div class="flex items-center">
              <button @click="decreaseQuantity(cart.id)" class="bg-red-500 p-1 w-8 text-white font-bold rounded-lg mr-2">-</button>
              <span>{{ cart.quantity }}</span>
              <button @click="increaseQuantity(cart.id)" class="bg-green-500 p-1 w-8 text-white font-bold rounded-lg ml-2">+</button>
            </div>
          </div>
          <div class="border-t-2 p-5 border-black flex items-center justify-between">
            <span class="text-xl font-bold">Total</span>
            <div class="font-bold">
              ${{ StoreCounter.cartTotal.toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '../stores/counter';
  import {useRouter} from 'vue-router'
  const StoreCounter = useCounterStore();
  const Router = useRouter();
  const CartData = StoreCounter.Cart;
  
  const GotoProductPage =()=>{
    Router.push("/product")
  }
  // Function to increase the quantity of an item
  const increaseQuantity = (id) => {
    const item = CartData.find((cart) => cart.id === id);
    if (item) {
      item.quantity += 1;
    }
  };
  
  // Function to decrease the quantity of an item
  const decreaseQuantity = (id) => {
    const item = CartData.find((cart) => cart.id === id);
    if (item && item.quantity > 0) {
      item.quantity -= 1;
    }
  };
  </script>
  
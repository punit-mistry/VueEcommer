<template>
    <div class="mx-56 flex flex-col justify-center items-center mt-10">

        <div class="flex" >
            <div class="w-1/2 flex flex-col justify-center text-left gap-5 p-20">
                <div class="flex flex-col">
                    
                    <span class="text-4xl font-bold">Fake Store </span>
                    <span class="">your e-commerce or shopping website </span>
                </div>
                <div>
                    <button class="bg-orange-400 p-2 font-bold text-white hover:text-black hover:scale-110 transition-all rounded-lg" @click="GotoProductPage">View Products</button>
                </div>
            </div>
            <div class="w-1/2">
                <img :src="home" />
            </div>
        </div>
        
        
        <section class="mt-52 text-center h-96 ">
    <div class="flex gap-2 flex-col">
      <div class="text-xl font-semibold">
        Tired of Lorem ipsum data?!<br/>
        Shop Now With the Fake Store
      </div>
      <div>
        Fake Store is your go-to destination for quality products at great prices. We offer a wide range of items from various categories to meet your shopping needs. Whether you're looking for electronics, clothing, accessories, or more, you'll find it here.
      </div>
    </div>
  </section>




  
  
  
  
  
  
  
  
    </div>
  <Footer />
    </template>

<script setup>
import Footer from '../components/Footer.vue'
import { useCounterStore } from '../stores/counter';
import { onMounted } from 'vue';
import {useRouter} from 'vue-router'
import home from "../assets/home.svg"
const StoreCounter = useCounterStore();
 const Router = useRouter();
const GotoProductPage =()=>{
    Router.push("/product")
  }
onMounted(()=>{
    StoreCounter.fetchApi();
})

</script>
<template>
    <div class="bg-black text-white h-16 p-3 flex justify-between">
        <div>
           <img :src="Img1" width="40" />
        </div>
        <div class="flex gap-3 ">
            <button><RouterLink to="/">Home</RouterLink></button>
            <button><RouterLink to="/Product">Products</RouterLink></button>
            <button><RouterLink to="/cart">Cart - <span class="text-red-700">{{ StoreCounter.Cart.length }}</span> </RouterLink></button>

        </div>
    </div>


</template>


<script setup>
import { useCounterStore } from '../stores/counter';
import { onMounted } from 'vue';
import Img1 from '../assets/logo.png'
const StoreCounter = useCounterStore();

onMounted(()=>{
    StoreCounter.fetchApi();
    console.log('this is the Navbar onMounted running')
})

</script>
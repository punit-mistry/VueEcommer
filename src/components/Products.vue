<template>
  <div class="flex flex-col bg-slate-100 h-[120vh]">
    <div
      class="h-10 bg-blue-600 text-white flex justify-center items-center text-3xl font-bold "
    >
      Products
    </div>
    <div class="m-3 flex justify-center flex-wrap gap-5 max-w-96">
      <div
        v-for="res in Data"
        class="w-48 h-80 p-2 bg-gray-200 flex flex-col items-center justify-between hover:scale-110 transition-all hover:border-4 border-black rounded-lg"
      >
        <div class="flex flex-col gap-5">
          <div >
            <div class="text-2xl">
              {{ res.title.substring(0, 10) + "...." }}
            </div>
          </div>
          <div class="flex justify-center">
            <img
              :src="res.image"
              width="110"
              height="100"
            />
          </div>
        </div>
        <div>
          <div class="flex flex-col gap-1">
            <button class="bg-blue-500 p-1 w-44 text-white font-bold rounded-lg" @click="AddtoCart(res.id)">
              Add to Cart
            </button>
            <button class="bg-green-600 p-1 text-white font-bold rounded-lg" @click="NextPage(res.id)">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../stores/counter";
import {useRouter} from 'vue-router'
const StoreCounter = useCounterStore();
const Router = useRouter();
const Data = StoreCounter.items;
console.log(Data);

const NextPage=(id)=>{
    Router.push(`/Products/${id}`)
}
const AddtoCart =(id)=>{
  StoreCounter.AddCart(id);
}

</script>

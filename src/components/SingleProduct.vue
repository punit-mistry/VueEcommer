<template>
  <div>
    <div class="mx-52 mt-10 flex gap-10">
      <!-- Product Information -->
      <div
        class="w-1/2 h-96 flex justify-center items-center hover:scale-110 transition-all"
      >
        <img
          :src="Item.image"
          alt=""
          width="250"
        />
      </div>
      <div
        class="bg-orange-200 rounded-lg w-1/2 text-center px-12 flex flex-col justify-between p-5"
      >
        <div>
          <div>
            <span class="font-bold">{{ Item.title }}</span>
          </div>
          <div>
            Description: <span class="">{{ Item.description }}</span>
          </div>
          <div class="flex items-center mt-2">
            <span class="font-bold mr-2">Rating:</span>
            <div class="flex">
              <template v-for="star in 5">
                <span class="text-red-400"> ★ </span>
              </template>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-1">
          <button class="bg-blue-500 p-1 text-white font-bold rounded-lg" >
            Add to Cart
          </button>
          <button
            class="bg-red-600 p-1 text-white font-bold rounded-lg"
          >
          <RouterLink to="/Product">

            Cancel
            </RouterLink>
          </button>
        </div>
      </div>
    </div>

    <div class="mx-52 mt-10 flex flex-col gap-10">
      <span class="text-4xl font-bold">Reviews</span>
      <div class="flex gap-5">
        <template v-for="Reviews in 5">
          <div
            class="w-96 bg-orange-50 h-52 shadow-xl hover:scale-110 hover:border-2 border-black flex gap-10 flex-col p-2"
          >
            <div>
              <div class="flex items-center">
                <div
                  class="w-8 h-8 flex items-center justify-center text-xl font-bold bg-blue-400 rounded-full"
                >
                  A
                </div>
                <div class="pl-5">Punit Mistry</div>
              </div>
            </div>
            <div class="flex flex-col">
              Very Good Products !!
              <span class="text-red-400"> ★★★★ </span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- Display Reviews -->
    <div class="mx-52 mt-4">
      <div
        v-for="review in reviews"
        :key="review.id"
      >
        <div class="bg-gray-200 p-3 rounded-lg mt-2">
          <div>
            <span class="font-bold">{{ review.user }}</span>
          </div>
          <div>
            <span>{{ review.comment }}</span>
          </div>
          <div>Rating: {{ review.rating }}/5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const Item = ref({});
const route = useRoute();

const fetchData = async () => {
  try {
    const productResponse = await axios.get(
      `https://fakestoreapi.com/products/${route.params.id}`
    );
    Item.value = productResponse.data;
  } catch (e) {
    console.error(e.message);
  }
};

onMounted(() => {
  fetchData();
});
</script>

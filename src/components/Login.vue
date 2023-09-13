<template>

    <div class="flex flex-col mx-52 ">
        <label for="email" class="block">Email </label>
        <input type="email" id="email" class="border-2 border-black" v-model="Data.email"/>
        <label for="password" class="block">Password </label>
        <input type="password" id="password" class="border-2 border-black" v-model="Data.password"/>
        <button :disabled="!Data.email && !Data.password" class="bg-violet-600 mt-5 text-white p-2 " @click="ChangeRoutes">
            Login
        </button>
    </div>


</template>


<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import isUserAuth from '../router' 
const Data= ref({email:"",password:""})
const Router = useRouter();
    const ChangeRoutes =()=>{
        if(Data.email ==='admin' && Data.password==='admin'){
        
            Router.push("/home")
        }
    }

</script>
<template>
  <div class="flex items-center justify-center relative">
    <router-link :to="{ name: 'home' }" class="">
      <h1 class="text-center text-5xl font-semibold mb-11 mt-11 font-custom">
        Coffee Booking
      </h1>
    </router-link>
  </div>
  <div class="my-6 flex items-center justify-center gap-6">
    <div class="relative">
      <router-link :to="{ name: 'cart' }">
        <div class="right-8 cursor-pointer hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>

          <p
            v-if="cartList.lengthCart !== 0"
            class="absolute bottom-4 left-3 bg-[#edd8b7] rounded-full h-6 w-6 text-center"
          >
            {{ cartList.lengthCart }}
          </p>
        </div>
      </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'order' }">
        <div class="cursor-pointer hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
        </div>
      </router-link>
    </div>
  </div>

  <router-view></router-view>
</template>

<script setup>
import { useCartListStore } from "./store/cartList";
const cartList = useCartListStore();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@500&display=swap");

* {
  box-sizing: border-box;
}
body {
  background-color: #f5efe6;
}

label,
button {
  font-family: "Noto Sans Thai", sans-serif;
}
</style>

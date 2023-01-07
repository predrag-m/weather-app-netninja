<script setup lang="ts"></script>

<template>
  <header class="bg-weather-primary sticky top-0 shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center text-white py-6"
    >
      <!-- Logo & App name -->
      <router-link :to="{ name: 'home' }">
        <div class="flex gap-3">
          <i class="fa-solid fa-sun text-2xl"></i>
          <p class="text-2xl">The Local Weather</p>
        </div>
      </router-link>

      <!-- info & save city -->
      <div class="flex justify-end flex-1 gap-3">
        <i
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"
        ></i>
        <i
          class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"
        ></i>
      </div>

      <!-- modal window -->
      <div></div>
    </nav>
  </header>
</template>

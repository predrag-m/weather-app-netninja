<script setup lang="ts">
import { useModalsStore } from "@/stores/ModalsStore";
import BaseModal from "./BaseModal.vue";

const modalsStore = useModalsStore();
</script>

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
          @click="modalsStore.openModal"
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"
        ></i>
        <i
          class="fa-solid fa-plus text-xl hover:text-weather-secondary duration-150 cursor-pointer"
        ></i>
      </div>

      <!-- modal window -->
      <base-modal>
        <div class="text-black">
          <h2 class="text-2xl mb-1">About:</h2>
          <p class="mb-4">
            The Local Weather allows you to track the current and future weather
            of cities of your choosing.
          </p>
          <h2 class="text-2xl mb-1">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Search for your city by entering the name into the search bar.
            </li>
            <li>
              Select a city within the results, this will take you to the
              current weather for your selection.
            </li>
            <li>
              Track the city by clicking on the "+" icon in the top right. This
              will save the city to view at a later time on the home page.
            </li>
          </ol>
          <h2 class="text-2xl mb-1">Removing a city</h2>
          <p class="mb-4">
            If you no longer wish to track a city, simply select the city within
            the home page. At the bottom of the page, there will be am option to
            delete the city.
          </p>
        </div>
      </base-modal>
    </nav>
  </header>
</template>

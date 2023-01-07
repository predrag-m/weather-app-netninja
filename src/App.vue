<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<template>
  <div class="bg-weather-primary min-h-screen flex flex-col font-Roboto">
    <the-navbar />
    <router-view />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<template>
  <div class="">
    <the-navbar />
    <router-view />
  </div>
</template>

<style scoped></style>

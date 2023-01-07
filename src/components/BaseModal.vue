<script setup lang="ts"></script>

<template>
  <div
    class="absolute top-0 left-0 w-full bg-black h-screen bg-opacity-30 flex justify-center"
  >
    <div class="bg-white mt-32 self-start max-w-screen-md p-4">
      <slot />
      <button class="bg-weather-primary py-2 px-6 mt-4">Close</button>
    </div>
  </div>
</template>

<style scoped></style>

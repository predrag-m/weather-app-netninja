<script setup lang="ts"></script>

<template>
  <div class="relative mb-8 pt-4">
    <input
      type="text"
      placeholder="Search for a city or a state"
      class="bg-weather-primary w-full border-b py-2 px-1 focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004e71]"
    />
    <ul
      class="bg-weather-secondary absolute w-full top-[66px] py-2 px-1 shadow-md"
    >
      <li class="py-2 cursor-pointer">pedja</li>
    </ul>
  </div>

  <!-- cityList component -->
  <div class="flex flex-col gap-4">
    <Suspense>
      <!-- <city-list /> -->
      <template #fallback>
        <p>
          <!-- <city-card-skeleton /> -->
        </p>
      </template>
    </Suspense>
  </div>
</template>

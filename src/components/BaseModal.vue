<script setup lang="ts">
import { useModalsStore } from "@/stores/ModalsStore";

const modalsStore = useModalsStore();
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalsStore.isModalActive"
        class="absolute top-0 left-0 w-full bg-black h-screen bg-opacity-30 flex justify-center px-8"
      >
        <Transition name="modal-inner">
          <div
            v-if="modalsStore.isModalActive"
            class="bg-white mt-32 self-start max-w-screen-md p-4"
          >
            <slot />
            <button
              @click="modalsStore.closeModal"
              class="bg-weather-primary text-white py-2 px-6 mt-4"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped></style>

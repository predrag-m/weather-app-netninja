import { defineStore } from "pinia";

export const useModalsStore = defineStore("modalsStore", {
  state: () => ({
    isModalActive: false as boolean,
  }),

  actions: {
    closeModal(): void {
      this.isModalActive = false;
    },
    openModal(): void {
      this.isModalActive = true;
    },
  },
});

import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", () => {
  const loading = ref(false);

  function sendArchive(arch) {
    loading.value = true;
    console.log(arch);
  }
  return { loading, sendArchive };
});

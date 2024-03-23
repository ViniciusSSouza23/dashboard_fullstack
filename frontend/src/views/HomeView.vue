<template>
  <div class="home-view py-5">
    <div class="container">
      <div class="text-center pt-5">
        <h1 class="title-5">Bem vindo a dashboard interativa</h1>
        <h5 class="title-1">faça o upload de uma arquivo para iniciar</h5>
      </div>
      <div class="row justify-content-center pt-5">
        <div class="col-lg-5 pt-5">
          <upload-component :send-archive="uploadArchive" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UploadComponent from "@/components/UploadComponent.vue";
import { useDashboardStore } from "@/stores/dashboard.js";

const dashboardStore = useDashboardStore();

function uploadArchive(file) {
  console.log(file);
  dashboardStore.sendArchive(file);
}
</script>
<style lang="scss" scoped>
.home-view {
  background: #f8f8f8;
  height: 100vh;
}
</style>

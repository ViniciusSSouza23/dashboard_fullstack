<template>
  <div>
    <component :is="route.meta.template">
      <router-view />
    </component>
  </div>
</template>
<script setup>
import { useRoute, RouterView } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from "vue";


onMounted(() => {
  document.querySelector("html").setAttribute("data-theme", "bumblebee");
});

</script>

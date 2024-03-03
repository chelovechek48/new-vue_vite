<script setup>
defineProps({
  messageText: String,
})
</script>

<template>
  <h1 class="page__message" >123 {{ messageText }}</h1>
</template>

<style scoped>
.page__message {
  background-color: #12345678;
}
</style>

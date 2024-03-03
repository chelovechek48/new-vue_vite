<script setup>
defineProps({
  messageText: String,
})
</script>

<template>
  <h1 class="page__message" >12345 {{ messageText }}</h1>
</template>

<style lang="scss" scoped>
.page__message {
  background-color: #12345678;
}
</style>

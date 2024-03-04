<script>
export default {
  props: {
    messageText: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <h1 class="message">
    {{ messageText }}
  </h1>
</template>

<style lang="scss" scoped>
.message {
  background-color: lime;
}
</style>

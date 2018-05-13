<template>
  <div> Страница карточки {{ cardId }}</div>
</template>

<script>
  export default {
    computed: {
      cardId() {
        return this.$route.params.id
      }
    },
    created() {
      const cardId = this.$route.params.id
    }
  }
</script>

<style>
</style>


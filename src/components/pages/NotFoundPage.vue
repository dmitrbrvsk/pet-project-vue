<template>
  <div class='page-not-found'>
    <h1 class='page-not-found__title'>404 Not Found</h1>
    <img class='page-not-found__image' src='/images/404.jpg' width='250' height='250' />
    <router-link  :to="{ name: 'home'}" class='page-not-found__text'>Вернуться на главную</router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style lang='scss' scoped>
  .page-not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    &__title {
      color: brown;
    }

    &__image {
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 30px;
    }
  }
</style>

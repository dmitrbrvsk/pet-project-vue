<template>
  <div class='card-list__container'>
    <div v-if='cards.length' class='card-list'>
      <Card
        v-for='(card, index) in cards'
        :key='index'
        :id='card.id'
        :title='card.title'
        :description='card.description'
      />
    </div>
    <Jumper v-if='!cards.length'></Jumper>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Card from './Card.vue'
  import { Jumper } from 'vue-loading-spinner'


  export default {
    components: { Card, Jumper },
    computed: {
      ...mapGetters([
        'cards'
      ]),
    },
    methods: {
      ...mapActions([
        'getCards'
      ])
    },
    created() {
      this.getCards()
    }
  }
</script>

<style lang='scss' scoped>
  .card-list {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    width: 800px;

    &__item {
      width: 200px;
      height: 100px;
      border-radius: 4px;
      border: 1px solid #f5f5f7;

    }
  }
</style>

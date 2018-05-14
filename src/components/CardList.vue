<template>
  <div class='card-list__container'>
    <div v-if='cards.length' class='card-list'>
      <Card
        v-for='(card, index) in cards'
        :key='index'
        :id='card.id'
        :title='card.title'
        :description='card.description'
        :type='card.type'
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
    flex-flow: row wrap;
    max-width: 880px;
    margin-top: 50px;
  }

  @media only screen and (max-width: 1024px) {
    .card-list {
      max-width: 600px;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 480px) {
    .card-list {
      max-width: 400px;
    }
  }

</style>

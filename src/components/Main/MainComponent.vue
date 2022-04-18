<template>
  <main class="main">
    <div class="main-container">
      <BeerDescription :beerInfo="beerInfo" />
      <button @click="getBeerInfo" class="main__button">Click me</button>
      <BacCalculator />
    </div>
    <BeerIllustrations />
  </main>
</template>

<script>
import getRandomBeer from '../../utils/beerApi';
import BeerDescription from '../BeerDescription/BeerDescription.vue';
import BeerIllustrations from '../BeerIllustrations/BeerIllustrations.vue';
import BacCalculator from '../BacCalculator/BacCalculator.vue';
import './MainComponent.css';

export default {
  components: {
    BeerDescription,
    BeerIllustrations,
    BacCalculator,
  },
  name: 'MainComponent',
  data() {
    return {
      beerInfo: {},
    };
  },
  methods: {
    async getBeerInfo() {
      this.beerInfo = await getRandomBeer();
      console.log(this.beerInfo);
    },
  },
};
</script>

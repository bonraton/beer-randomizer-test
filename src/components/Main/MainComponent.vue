<template>
  <main class="main">
    <div class="main-container">
      <BeerDescription :isVisible="isCardVisible" :beerInfo="beerInfo" />
      <button @click="getBeerInfo" class="main__button">Click me</button>
      <BacCalculator :isVisible="isCardVisible" />
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
      isCardVisible: false,
    };
  },
  methods: {
    async getBeerInfo() {
      this.beerInfo = await getRandomBeer();
      this.isCardVisible = true;
    },
  },
};
</script>

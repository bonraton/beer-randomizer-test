<template>
  <main class="main">
    <div class="main-container">
      <BeerDescription :isVisible="isCardVisible" :beerInfo="beerInfo" />
      <button :disabled="isDisabled" @click="getBeerInfo" class="main__button">Click me</button>
      <BacCalculator :isVisible="isCardVisible" />
    </div>
    <BeerIllustrations :isStarted="isAnimationStarted" />
  </main>
</template>

<script>
import getRandomBeer from '../../utils/beerApi';
import BeerDescription from '../BeerDescription/BeerDescription.vue';
import BeerIllustrations from '../BeerIllustrations/BeerIllustrations.vue';
import BacCalculator from '../BacCalculator/BacCalculator.vue';
import beerSound from '../../audio/beer_sound.mp3';
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
      isAnimationStarted: false,
    };
  },
  computed: {
    isDisabled() {
      return this.isAnimationStarted;
    },
  },
  methods: {
    async getBeerInfo() {
      this.beerInfo = await getRandomBeer();
      this.isCardVisible = true;
      this.onPlayAudio(beerSound);
      this.isAnimationStarted = true;
      localStorage.setItem('beerAlc', this.beerInfo.alc);
      setTimeout(() => {
        this.isAnimationStarted = false;
      }, 1500);
    },
    onPlayAudio(audio) {
      if (audio) {
        const sound = new Audio(audio);
        sound.play();
      }
    },
  },
};
</script>

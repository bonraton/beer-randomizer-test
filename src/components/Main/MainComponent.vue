<template>
  <main class="main">
    <div class="main-container">
      <BeerDescription :isVisible="isCardVisible" :beerInfo="beerInfo" />
      <button :disabled="isDisabled" @click="getBeerInfo" class="main__button">Click me</button>
      <BeerIllustrations :isStarted="isAnimationStarted" />
      <BacCalculator :isVisible="isCardVisible" />
    </div>
  </main>
</template>

<script>
import getRandomBeer from '../../utils/beerApi';
import { defaultBeer } from '../../helpers/constant';
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
      beerInfo: defaultBeer,
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
      console.log(this.beerInfo);
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

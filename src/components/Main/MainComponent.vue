<template>
  <main class="main">
    <div class="main-container">
      <BeerDescription :isVisible="isCardVisible" :beerInfo="beerInfo" />
      <button
        :disabled="isDisabled"
        @click="getBeerInfo"
        @touchstart="getBeerInfo"
        class="main__button"
      >
        Click me
      </button>
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
import beerSound from '../../audio/beer_sound_shorter.mp3';
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
      sound: new Audio(beerSound),
    };
  },
  computed: {
    isDisabled() {
      return this.isAnimationStarted;
    },
  },
  methods: {
    async getBeerInfo() {
      this.onPlayAudio(this.sound);
      this.isAnimationStarted = true;
      this.beerInfo = await getRandomBeer();
      this.isCardVisible = true;
      localStorage.setItem('beerAlc', this.beerInfo.alc);
      setTimeout(() => {
        this.isAnimationStarted = false;
      }, 1700);
    },
    onPlayAudio() {
      if (this.sound) {
        this.sound.play();
      }
    },
    created() {
      this.sound = new Audio(beerSound);
    },
  },
};
</script>

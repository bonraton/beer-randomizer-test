<template>
  <main class="main">
    <div class="main-container">
      <BeerDescription />
      <div class="main__interactive">
        <button class="main__button">Click me</button>
        <BeerIllustrations />
      </div>
      <BacCalculator />
    </div>
  </main>
</template>

<script>
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
};
</script>

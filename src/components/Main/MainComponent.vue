<template>
  <main class="main">
    <BeerDescription />
    <BacCalculator />
    <BeerIllustrations />
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

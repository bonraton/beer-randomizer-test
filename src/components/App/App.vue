<template>
  <HeaderComponent />
  <MainComponent />
  <FooterComponent />
</template>

<script>
import './App.css';

import HeaderComponent from '../Header/HeaderComponent.vue';
import FooterComponent from '../Footer/FooterComponent.vue';
import MainComponent from '../Main/MainComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    MainComponent,
  },
};
</script>

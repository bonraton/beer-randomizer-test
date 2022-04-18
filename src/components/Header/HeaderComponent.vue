<template>
  <header class="header">
    <h2 class="header__title">Beer randomizer</h2>
    <div class="profile">
      <ul class="profile__info">
        <li v-for="(item, index) in profile" :key="index" class="profile__item">
          {{ item }}
        </li>
      </ul>
    </div>
    <img src="../../images/default_avatar.png" class="profile__image" alt="avatar" />
  </header>
</template>

<script>
import './HeaderComponent.css';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      profile: {
        name: 'Oleg',
        age: '29',
        position: 'Beer destroyer',
      },
    };
  },
};
</script>

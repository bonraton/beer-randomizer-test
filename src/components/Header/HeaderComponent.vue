<template>
  <header class="header">
    <h2 class="header__title">Beer randomizer</h2>
    <div class="profile">
      <ul class="profile__info">
        <li
          v-show="index !== 'id' && index !== 'avatar'"
          v-for="(item, index) in profile"
          :key="item.id"
          class="profile__item"
        >
          {{ item }}
        </li>
      </ul>
      <img :src="this.profile.avatar" @error="onAvatarError" class="profile__image" alt="avatar" />
    </div>
  </header>
</template>

<script>
import './HeaderComponent.css';
import getRandomProfile from '../../utils/profileApi';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      profile: {},
    };
  },
  methods: {
    onAvatarError(e) {
      let i = 0;
      if (i < 4) {
        setTimeout(() => {
          i += i + 1;
          e.target.src = this.profile.avatar;
        }, 3000);
      } else {
        clearInterval();
      }
    },
  },
  async created() {
    this.profile = await getRandomProfile();
  },
};
</script>

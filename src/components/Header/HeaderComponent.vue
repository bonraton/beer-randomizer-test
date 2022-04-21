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
      <div class="profile__image-container">
        <img
          v-show="!isLoading"
          :src="this.profile.avatar"
          @error="onAvatarError"
          class="profile__image"
          alt="avatar"
        />
        <PreloaderComponent :isVisible="isLoading" />
      </div>
    </div>
  </header>
</template>

<script>
import './HeaderComponent.css';
import getRandomProfile from '../../utils/profileApi';
import PreloaderComponent from '../Preloader/PreloaderComponent.vue';

export default {
  components: { PreloaderComponent },
  name: 'HeaderComponent',
  data() {
    return {
      profile: {},
      isLoading: false,
    };
  },
  methods: {
    onAvatarError(e) {
      let i = 0;
      this.isLoading = true;
      if (i < 4) {
        setTimeout(() => {
          i += i + 1;
          e.target.src = this.profile.avatar;
          this.isLoading = false;
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

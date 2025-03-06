<script setup lang="ts">
import { ref } from 'vue';
import CookieSvg from '@/assets/Cookie.svg';

const showCookieBar = ref(true);

function hideCookieBar() {
  showCookieBar.value = false;
}
</script>

<template>
  <div v-if="showCookieBar" class="cookie-bar">
    <div class="cookie-content">
      <h2>We use cookies</h2>
      <p>This website use cookies to ensure you get the best experience on our website.</p>
      <div class="cookie-footer">
        <img :src="CookieSvg" alt="Cookie icon" class="cookie-icon" />
        <button @click="hideCookieBar">Accept</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cookie-bar {
  position: fixed;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 25rem;
  background-color: $midnight-sky;
  color: $mels-white;
  padding: 1rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1000;

  .cookie-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-family: $font-grand-hotel;
    font-size: 1.375rem;
    margin: 0;
    color: $mels-white;
  }

  p {
    font-family: $font-tilt-neon;
    font-size: 0.875rem;
    max-width: 90%;
    line-height: 1.2;
    margin: 0;
  }

  .cookie-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 0.75rem;
  }

  .cookie-icon {
    width: 3rem;
    height: auto;
  }

  button {
    background-color: transparent;
    border: 2px solid $neon-teal;
    color: $neon-teal;
    padding: 8px 16px;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 15px rgba(40, 250, 239, 1);
    }
  }
}
</style>

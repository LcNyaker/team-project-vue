<script lang="ts" setup>
import { ref } from 'vue';
//  Variable to track if the menu is open or closed
const isMenuOpen = ref(false);

// Variable for tracking the current active page
const currentPage = ref('home');

// Function to toggle the navigation menu
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <!-- Main header container -->
  <header class="header">
    <!-- Logo  -->
    <div class="logo">
      <img src="@/assets/logo-small.svg" alt="Mel's Logo" />
    </div>

    <!-- Hamburger menu: Clicking toggles the menu -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- The 'open' class is added when isMenuOpen is true -->
    <nav :class="{ open: isMenuOpen }">
      <!-- Close Button -->
      <button class="close" @click="toggleMenu">
        <span class="line"></span>
        <span class="line"></span>
      </button>

      <!-- Navigation Links -->
      <ul>
        <li>
          <!-- Replace href="#" with <router-link>-->
          <a href="#" :class="{ active: currentPage === 'home' }">Home</a>
        </li>
        <li>
          <a href="#" :class="{ active: currentPage === 'films' }">Films</a>
        </li>
        <li>
          <a href="#" :class="{ active: currentPage === 'food' }">Food & Drinks</a>
        </li>
        <li>
          <a href="#" :class="{ active: currentPage === 'login' }">Log in</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '@/style/variables.scss';
</style>

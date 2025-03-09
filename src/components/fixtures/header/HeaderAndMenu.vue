<script lang="ts" setup>
import { ref } from 'vue';

//  Variable to track  the menu
const isMenuOpen = ref(false);

// Variable for the current active page
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

    <!-- Hamburger menu button -->
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Add open class to the nav menu -->
    <nav :class="{ open: isMenuOpen }">
      <!-- Close Button -->
      <button class="close" @click="toggleMenu">
        <span class="line"></span>
        <span class="line"></span>
      </button>

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

.header {
  height: 70px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $midnight-sky;
  border-radius: 20px;
  border: $aqua 4px solid;
  box-shadow:
    $aqua 0 0 10px,
    inset $aqua 0 0 10px;
  margin: 20px 0 20px 0;

  // Logo styling
  .logo {
    display: flex;
    align-items: center;

    img {
      height: 60px;
      margin-left: 1rem;
    }
  }

  // Hamburger menu styling for mobile
  .hamburger {
    width: 45px;
    height: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    margin-right: 1rem;

    span {
      height: 6px;
      background: #fff;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
  }

  // Navigation menu styling
  nav {
    position: fixed;
    left: 6vw;
    top: 110px;
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: space-around;
    background-color: $midnight-sky;
    transform: translateX(120%);
    transition: transform 0.3s ease;
    padding: 1rem;
    z-index: 99999;
    border-radius: 0 50px 0 50px;

    // Close button styling
    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      width: 30px;
      height: 30px;
      cursor: pointer;

      .line {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 4px;
        background-color: #fff;
        border-radius: 10px;
        transform-origin: center;
      }

      .line:first-child {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      .line:last-child {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }

    // Styling for the navigation links list
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      li {
        a {
          color: #fff;
          text-decoration: none;
          font-family: $font-grand-hotel;
          font-size: 2rem;
          position: relative;

          // Active link styling: adds an underline in neon teal
          &.active {
            color: $neon-teal;
            &::after {
              content: '';
              display: block;
              height: 2px;
              background-color: $neon-teal;
              position: absolute;
              bottom: -4px;
              left: 0;
              right: 0;
            }
          }

          // Hover state: change color to neon teal
          &:hover {
            color: $neon-teal;
          }
        }
      }
    }

    &.open {
      transform: translateY(0%);
    }
  }
}
</style>

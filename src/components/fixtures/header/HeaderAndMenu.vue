<script lang="ts" setup>
import { ref } from 'vue';

//  Variable to track  the menu
const isMenuOpen = ref(false);

// Function to toggle the menu open/closed
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
// Handle keydown events for accessibility
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    toggleMenu();
  }
}
</script>

<template>
  <!-- Main header container -->
  <header class="header">
    <!-- Logo  -->
    <div class="logo">
      <img src="@/assets/Logo-small.svg" alt="Mel's Logo" />
    </div>

    <!-- Hamburger menu button -->
    <div
      class="hamburger"
      @click="toggleMenu"
      aria-label="Open menu"
      @keydown="handleKeyDown"
      tabindex="0"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Add open class to the nav menu -->
    <nav :class="{ open: isMenuOpen }">
      <!-- Close Button -->
      <button class="close" @click="toggleMenu" aria-label="Close menu">
        <span class="line"></span>
        <span class="line"></span>
      </button>

      <ul>
        <li>
          <router-link to="/" active-class="active" @click="toggleMenu" aria-label="Home"
            >Home</router-link
          >
        </li>
        <li>
          <router-link to="/films" active-class="active" @click="toggleMenu" aria-label="Films"
            >Films</router-link
          >
        </li>
        <li>
          <router-link
            to="/food"
            active-class="active"
            @click="toggleMenu"
            aria-label="Food and Drinks"
            >Food & Drinks</router-link
          >
        </li>
        <li>
          <router-link to="/login" active-class="active" @click="toggleMenu" aria-label="Log in"
            >Log in</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '@/style/variables.scss';

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
  z-index: 2;
  // logo styling
  .logo {
    display: flex;
    align-items: center;

    img {
      height: 60px;
      margin-left: 1rem;
    }
  }

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

  nav {
    /* Mobile drop-in menu styles */
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
    border-radius: 0 50px 0 50px;
    z-index: 99999;

    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      width: 50px;
      height: 50px;
      cursor: pointer;

      .line {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 7px;
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

          &.active::after {
            content: '';
            display: block;
            height: 2px;
            background-color: $neon-teal;
            position: absolute;
            bottom: -4px;
            left: 0;
            right: 0;
          }

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

  /* ------------------------------- */
  /* TABLET & DESKTOP BREAKPOINTS    */
  /* ------------------------------- */

  /* tablet from 768px */
  @media (min-width: 768px) {
    .hamburger {
      display: none; /* Hide hamburger icon */
    }

    nav {
      position: static;
      width: auto;
      height: auto;
      transform: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      padding: 0;
      border-radius: 20px;

      .close {
        display: none; /* Hide the close (X) button */
      }

      ul {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
      }

      li a {
        font-size: 1.2rem;
        position: relative;
      }
    }
  }
  /* desktop from 1024px */
  @media (min-width: 1024px) {
    nav ul li a {
      font-size: 20px;
      margin: 0 16px;
    }
  }
}
</style>

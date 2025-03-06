<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import ImageContainer from './components/ImageContainer.vue';
import CookieBar from '@/components/CookieBar.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/LogIn">Log in</RouterLink>
        <ImageContainer />
      </nav>
    </div>
  </header>

  <RouterView />

  <div>
    <CookieBar />
  </div>
</template>

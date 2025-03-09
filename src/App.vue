<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderAndMenu from './components/fixtures/header/HeaderAndMenu.vue';
import CookieBar from '@/components/CookieBar.vue';
</script>

<template>
  <HeaderAndMenu />
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/LogIn">Log in</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <div>
    <CookieBar />
  </div>
</template>

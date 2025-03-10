<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderAndMenu from './components/fixtures/header/HeaderAndMenu.vue';
import CookieBar from '@/components/CookieBar.vue';
import BlockquoteContainer from '@/components/BlockquoteContainer.vue';
</script>

<template>
  <HeaderAndMenu />
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/LogIn">Log in</RouterLink>
        <RouterLink to="/Films">Films</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <main>
    <BlockquoteContainer
      quote="Some things never go out of style – classic cars, popcorn, and drive-in movies."
    />
  </main>
  <div>
    <CookieBar />
  </div>
</template>

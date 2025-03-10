<script setup lang="ts">
import SvgGroup from '../components/SvgGroup.vue';
import FilmGroup from '../components/FilmGroup.vue';
</script>

<template>
  <main>
    <SvgGroup />
    <FilmGroup />
  </main>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>

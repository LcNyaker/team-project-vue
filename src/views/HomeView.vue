<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import MoviecardContainer from '../components/MoviecardContainer.vue';
<<<<<<< HEAD
<<<<<<< HEAD
import BlockquoteContainer from '@/components/BlockquoteContainer.vue';
=======
=======
import BlockquoteContainer from '@/components/BlockquoteContainer.vue';
>>>>>>> 99621d166484947b82f6255641a9b5a895cc1236
import TabletMoviecard from '@/components/TabletMoviecard.vue';
import DesktopMoviecard from '@/components/DesktopMoviecard.vue';

const screenSize = ref('desktop');
const updateScreenSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    screenSize.value = 'mobile';
  } else if (width < 1440) {
    screenSize.value = 'tablet';
  } else {
    screenSize.value = 'desktop';
  }
};
onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});
<<<<<<< HEAD
>>>>>>> c9f23a65894fa76aa498dab3b2276535ab4b615d
=======
>>>>>>> 99621d166484947b82f6255641a9b5a895cc1236
</script>
<template>
  <main>
<<<<<<< HEAD
<<<<<<< HEAD
    <ImageContainer />
    <BlockquoteContainer
      quote="Some things never go out of style – classic cars, popcorn, and drive-in movies."
    />
    <MoviecardContainer />
=======
    <HeroSection />
=======
    <MoviecardContainer />
    <HeroSection />
      <BlockquoteContainer
      quote="Some things never go out of style – classic cars, popcorn, and drive-in movies."
    />
>>>>>>> 99621d166484947b82f6255641a9b5a895cc1236
    <div>
      <MoviecardContainer v-if="screenSize === 'mobile'" />
      <TabletMoviecard v-else-if="screenSize === 'tablet'" />
      <DesktopMoviecard v-else />
    </div>
<<<<<<< HEAD
>>>>>>> c9f23a65894fa76aa498dab3b2276535ab4b615d
=======
>>>>>>> 99621d166484947b82f6255641a9b5a895cc1236
  </main>
</template>
<style>
.home {
  color: wheat;
}
</style>

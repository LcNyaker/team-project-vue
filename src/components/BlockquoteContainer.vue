<script setup lang="ts">
import { defineProps } from 'vue';
import quoteLeft from '@/assets/quote-left.png';
import quoteRight from '@/assets/quote-right.png';

defineProps<{
  quote: string;
}>();
</script>

<template>
  <div class="blockquote-container">
    <blockquote>
      <img :src="quoteLeft" alt="Left Quote" class="quote-icon left" />
      <p>{{ quote }}</p>
      <img :src="quoteRight" alt="Right Quote" class="quote-icon right" />
    </blockquote>
  </div>
</template>

<style lang="scss" scoped>
.blockquote-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
}

blockquote {
  position: relative;
  width: 90%;
  max-width: 284px;
  height: 213px;
  padding: 1.1rem 1rem;
  border-radius: 10px;
  color: $mels-white;
  border: 3px solid $neon-teal;
  background:
    linear-gradient(rgba(85, 83, 123, 0.6), rgba(85, 83, 123, 0.6)),
    url('@/assets/quotation.jpg') no-repeat center center / cover;

  background-size: 318% auto;
  background-position: center 82%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 1.25rem;
  font-family: 'Tilt Neon', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.011em;
  text-align: center;
  vertical-align: middle;
  width: 184px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quote-icon {
  width: 50px;
  height: 50px;
  position: absolute;
}

.left {
  top: 10px;
  left: 10px;
}

.right {
  bottom: 10px;
  right: 10px;
}

@media (min-width: 768px) {
  .blockquote-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 310px;
  }

  blockquote {
    width: 90%;
    max-width: 973px;
    height: 307px;
    border-radius: 25px;
    padding: 3rem 3rem;
    background-size: 140% auto;
    background-position: center 100%;
  }

  p {
    font-size: 1.9rem;
    width: 736px;
    height: 120px;
    text-align: center;
    line-height: 1.5;
    margin: 0 auto;
  }

  .quote-icon {
    width: 60px;
    height: 60px;
  }

  .left {
    top: 15px;
    left: 15px;
  }

  .right {
    bottom: 15px;
    right: 15px;
  }
}

@media (min-width: 1024px) {
  .blockquote-container {
    position: relative;
    height: 713px;
    width: 75%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('@/assets/quotation.jpg') no-repeat center center / cover;
  }

  blockquote {
    position: relative;
    width: 897px;
    height: 614px;
    max-width: 90vw;
    background: linear-gradient(rgba(85, 83, 123, 0.6), rgba(85, 83, 123, 0.6));
    border-radius: 50px;
    font-size: 1.8rem;
    padding: 0rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 2.5rem;
    line-height: 1.5;
    text-align: center;
    width: 653px;
    height: 204px;
  }

  .quote-icon {
    width: 70px;
    height: 70px;
    position: absolute;
  }

  .left {
    top: 20px;
    left: 20px;
  }

  .right {
    bottom: 20px;
    right: 20px;
  }
}
</style>

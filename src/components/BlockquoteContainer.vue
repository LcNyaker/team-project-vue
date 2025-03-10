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

  blockquote {
    position: relative;
    width: 90%;
    max-width: 284px;
    height: 213px;
    padding: 1.5rem;
    line-height: 1.5;
    border-radius: 10px;
    border: 3px solid $neon-teal;
    background:
      linear-gradient(rgba(85, 83, 123, 0.6), rgba(85, 83, 123, 0.6)),
      url('@/assets/quotation.jpg') no-repeat center center / cover;

    background-size: 270% auto;
    background-position: center bottom;
    text-align: center;
    color: $mels-white;
    font-size: 1.2rem;
    font-family: $font-tilt-neon;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
  }
}

@media (min-width: 768px) {
  .blockquote-container {
    min-height: 310px;
  }
  blockquote {
    max-width: 973px;
    height: 310px;
    font-size: 1.5rem;
    line-height: 1.8;
    padding: 2rem;
    border-radius: 25px;
    background-size: contain;
    background-position: center center;

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
}

@media (min-width: 1024px) {
  .blockquote-container {
    min-height: 754px;
  }
  blockquote {
    max-width: 1362px;
    height: 754px;
    font-size: 2rem;
    background-size: cover;
    background-position: center center;
    padding: 3rem;
    border-radius: 30px;
    line-height: 2;

    .quote-icon {
      width: 80px;
      height: 80px;
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
}
</style>

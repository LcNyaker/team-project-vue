<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  quote: string;
}>();
</script>

<template>
  <div class="blockquote-container">
    <blockquote>
      <span class="quote-icon">❝</span>
      <p>{{ quote }}</p>
      <span class="quote-icon">❞</span>
    </blockquote>
  </div>
</template>

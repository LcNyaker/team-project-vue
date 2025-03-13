<script setup lang="ts">
defineProps({
  buttonText: { type: String, required: true },
});
</script>

<template>
  <button class="default-button" :aria-label="buttonText">{{ buttonText }}</button>
</template>

<style lang="scss" scoped>
.default-button {
  width: 120px;
  height: 44px;
  border: 3px solid $neon-teal;
  border-radius: 10px;
  background-color: transparent;
  color: $neon-teal;
  font-family: $font-tilt-neon;
  font-size: 1.1rem;
  align-self: center;
  transition: box-shadow 0.6s ease;
  margin-top: 20px;
  cursor: pointer;
}
.default-button:hover {
  box-shadow: 0 0 20px;
}
.default-button:active {
  box-shadow:
    0 0 20px,
    inset 0 0 30px;
}
.default-button:focus {
  outline: none; /* Ta bort standard-fokusmarkering */
  border: 2px solid $neon-pig; /* Lägg till en kant för att indikera fokus */
  box-shadow: 0 0 5px $mels-white; /* Lägger till en skugga för extra synlighet */
}
</style>

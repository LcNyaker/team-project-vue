<script setup lang="ts">
import MelsLogo from '@/assets/Mels-drive-in-glow.svg';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>
<template>
  <footer class="footer">
    <div class="svg-logo">
      <img :src="MelsLogo" alt="Mels svg" class="mels-svg" />
    </div>
    <div class="contacts">
      <p><font-awesome-icon :icon="['fas', 'phone']" /> 08-604 25 30</p>
      <p><font-awesome-icon :icon="['fas', 'envelope']" /> info@melsdrivein.com</p>
      <p><font-awesome-icon :icon="['fas', 'map-marker-alt']" /> Sveavägen 23, 159 00 Stockholm</p>
      <p class="opening-hours">
        Monday - Friday 11.00-23.00 <br />
        Saturday 12.00-01.00 <br />
        Sunday 12.00-23.00
      </p>
    </div>
    <div class="social-media">
      <h2 class="neon-text">Social Media</h2>
      <div class="icons"></div>
      <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
      <font-awesome-icon :icon="['fab', 'facebook']" class="icon" />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #000;
  color: #0ff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.5);
}
.contacts,
.social-media {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.svg-logo {
  width: 150px;
  height: 150px;
  filter: drop-shadow(0 0 5px #0ff) drop-shadow(0 0 10px #ff00ff);
}
.neon-text {
  font-size: 24px;
  font-weight: bold;
  text-shadow:
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #ff00ff;
}
p {
  margin: 5px 0;
  font-size: 16px;
}
.icon {
  font-size: 24px;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}
.icon:hover {
  transform: scale(1.2);
  text-shadow:
    0 0 10px #ff00ff,
    0 0 20px #ff00ff;
}

</style>

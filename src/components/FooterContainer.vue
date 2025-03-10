<script setup lang="ts">
import MelsLogo from '@/assets/Mels-drive-in-glow.svg';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
library.add(faPhone, faEnvelope, faMapMarkerAlt, faInstagram, faFacebook);
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
  background-color: $mels-black;
  color: #0ff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.5);
  widht: 100%;
  max-width: 1200px;
  margin: auto;
  text-align: left;
}
.svg-logo {
  width: 180px;
  max-width: 20%;
  flex-shrink: 0;
}
.contacts {
  min-width: 300px;
  text-align: left;
  flex: 1;
}
.social-media {
  min-width: 250px;
  text-align: right;
  flex: 1;
}
.neon-text {
  font-size: 24px;
  font-weight: bold;
  text-shadow:
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #ff00ff;
}
.opening-hours {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
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
    0 0 #ff00ff;
}
@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
    padding: 15px;
    text-align: center;
  }
  .svg-logo {
    text-align: center;
    width: 120px;
  }
  .contacts {
    text-align: left;
  }
  .social-media {
    text-align: right
  }
  .icon {
    font-size: 20px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .footer {
    flex-direction: row;
    justify-content: space-around;
  }
  .contacts {
    text-align: left;
  }
  .social-media {
    text-align: right;
  }
}
@media screen and (min-width: 1025px) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  }
  .svg-logo {
    width: 180px;
    max-width: 25%;
    flex-shrink: 0;
  }
  .contacts {
    flex: 1;
    text-align: left;
    min-width: 250px;
  }
  .social-media {
    flex: 1;
    text-align: right;
    min-width: 250px;
  }
}
</style>

<script setup lang="ts">
import MelsLogo from '@/assets/Mels-drive-in-glow.svg';
import FacebookLogo from '@/assets/Facebook.svg';
import InstagramLogo from '@/assets/Instagram.svg';
</script>
<template>
  <footer class="footer">
    <div class="svg-logo">
      <img :src="MelsLogo" alt="Mels svg" class="mels-svg" />
    </div>
    <div class="contacts">
      <p><img src="@/assets/Phone.svg" alt="Phone icon" class="phone-svg" /> 08-604 25 30</p>
      <p><img src="@/assets/Mail.svg" alt="Mail icon" class="mail-svg" /> info@melsdrivein.com</p>
      <p>
        <img src="@/assets/Adress.svg" alt="Adress icon" class="adress-svg" /> Sveavägen 23, 159 00
        Stockholm
      </p>
      <p class="opening-hours">
        Monday - Friday 11.00-23.00 <br />
        Saturday 12.00-01.00 <br />
        Sunday 12.00-23.00
      </p>
    </div>
    <div class="social-media">
      <h2 class="neon-text">Social Media</h2>
      <div class="icons">
        <img :src="FacebookLogo" alt="Facebook svg" class="facebook-svg" />
        <img :src="InstagramLogo" alt="Instagram svg" class="instagram-svg" />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
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
  width: 100%;
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
.facebook-svg {
  font-size: 1rem;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}
.instagram-svg {
  font-size: 1rem;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}
.facebook-svg:hover {
  transform: scale(1.2);
  text-shadow:
    0 0 10px #ff00ff,
    0 0 #ff00ff;
}
.instagram-svg:hover {
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
    text-align: right;
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

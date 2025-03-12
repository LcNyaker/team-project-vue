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
    <div class="content-wrapper">
      <div class="contacts">
        <p><img src="@/assets/Phone.svg" alt="Phone icon" class="phone-svg" /> 08-604 25 30</p>
        <p><img src="@/assets/Mail.svg" alt="Mail icon" class="mail-svg" /> info@melsdrivein.com</p>
        <p>
          <img src="@/assets/adress.svg" alt="Adress icon" class="adress-svg" /> Sveavägen 23, 159
          00 Stockholm
        </p>
      </div>
      <div class="social-media">
        <h2 class="neon-text">Social Media</h2>
        <div class="icons">
          <img :src="FacebookLogo" alt="Facebook svg" class="facebook-svg" />
          <img :src="InstagramLogo" alt="Instagram svg" class="instagram-svg" />
        </div>
      </div>
    </div>
    <p class="opening-hours">
      Monday - Friday 11.00-23.00 <br />
      Saturday 12.00-01.00 <br />
      Sunday 12.00-23.00
    </p>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #000;
  color: #0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem;
  font-family: 'Tilt Neon', sans-serif;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 1200px;
  margin: auto;
}
.svg-logo {
  width: 180px;
  max-width: 80%;
  flex-shrink: 0;
  margin-bottom: 1rem;
}
.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 900px;
}
.contacts {
  font-size: 0.9rem;
  text-align: left;
  width: 50%;
}
.social-media {
  font-size: 1.2rem;
  text-align: right;
  width: 50%;
}
.neon-text {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow:
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #ff00ff;
}
.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}
.opening-hours {
  text-align: center;
  margin-top: 1.25rem;
  font-size: 1rem;
}
@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.25rem;
  }
  .mels-svg {
    width: 180px;
    max-width: 100%;
    margin-bottom: 1rem;
  }
  .content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 600px;
  }
  .contacts,
  .social-media {
  }
  .icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 900px;
  }
  .contacts {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .opening-hours {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .svg-logo {
    width: 150px;
    max-width: 33%;
  }
  .social-media {
    text-align: right;
    width: 33%;
  }
}
@media screen and (min-width: 1025px) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.9rem;
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

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
          <img :src="InstagramLogo" alt="Instagram svg" class="instagram-svg" />
          <img :src="FacebookLogo" alt="Facebook svg" class="facebook-svg" />
        </div>
      </div>
    </div>
    <div class="opening-hours">
      <P>Monday - Friday 11.00-23.00 </P>
      <p>Saturday 12.00-01.00</p>
      <P>Sunday 12.00-23.00</P>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $mels-black;
  color: $neon-teal;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2px;
  font-family: $font-tilt-neon;
  width: 100vw;

  .mels-svg {
    width: 180px;
    max-width: 80%;
    flex-shrink: 0;
  }
  .content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 900px;

    .contacts {
      font-size: 0.9rem;
      text-align: left;
      width: 60%;

      .phone-svg,
      .mail-svg,
      .adress-svg {
        width: 20px;
      }
    }
  }

  .social-media {
    font-size: 1.2rem;
    width: 45%;

    .neon-text {
      font-size: 1.5rem;
      color: transparent;
      -webkit-text-stroke: 0.5px $neon-teal;
      //text-shadow: 0 1px 5px $neon-teal;
    }
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
  .opening-hours {
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
      text-align: center;
      font-size: 1rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .footer {
    .content-wrapper {
      .contacts {
      }
    }
    .svg-logo {
      position: absolute;
      margin-top: 75px;
      display: flex;
      justify-content: center;
      .mels-svg {
        width: 309px;
      }
    }

    .content-wrapper {
      .contacts {
        font-size: 1.1rem;
        text-align: left;
        width: 35%;

        .phone-svg,
        .mail-svg,
        .adress-svg {
          width: 33px;
        }
      }
    }

    .social-media {
      width: 30%;
      display: flex;
      flex-direction: column;

      .neon-text {
        font-size: 2.15rem;
      }

      .icons {
        display: flex;
        justify-content: center;
      }
    }

    .opening-hours {
      width: 100vw;

      p {
        text-align: left;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
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

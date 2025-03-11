<script setup lang="ts">
import DefaultButton from '../components/buttons/DefaultButton.vue';
</script>

<template>
  <div class="loginContainer">
    <h1>Log in</h1>
    <form class="loginInfo">
      <input type="email" placeholder="email@adress.com" class="emailInput" />
      <input type="password" placeholder="password" class="passwordInput" />
      <a href="" class="forgotPassword">forgot password?</a>
      <DefaultButton button-text="Log in" type="submit" value="Log in" class="logIn" />
      <a href="" class="signUp">sign up</a>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.loginContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: $neon-teal;
    font-family: $font-grand-hotel;
    font-size: 3rem;
    font-weight: 400;
  }
  .loginInfo {
    display: flex;
    flex-direction: column;
    gap: 25px;
    .emailInput {
      width: 280px;
      height: 44px;
      border: 3px solid $neon-teal;
      border-radius: 10px;
      transition: box-shadow 0.6s ease;
    }
    .emailInput::placeholder {
      color: $mels-black;
      font-size: 1.12rem;
      font-family: $font-roboto;
      text-align: center;
    }
    .emailInput:hover {
      box-shadow: 0 0 20px $neon-pig;
    }
    .emailInput:active {
      box-shadow: 0 0 20px $neon-pig;
      border: 3px solid $aqua;
    }
    .passwordInput {
      width: 280px;
      height: 44px;
      border: 3px solid $neon-teal;
      border-radius: 10px;
      transition: box-shadow 0.6s ease;
    }
    .passwordInput::placeholder {
      color: $mels-black;
      font-size: 1.12rem;
      font-family: $font-roboto;
      text-align: center;
    }
    .passwordInput:hover {
      box-shadow: 0 0 20px $neon-pig;
    }
    .passwordInput:active {
      box-shadow: 0 0 20px $neon-pig;
      border: 3px solid $aqua;
    }
    .forgotPassword {
      color: $mels-white;
      font-family: $font-tilt-neon;
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;
      align-self: flex-end;
    }
    .logIn {
      width: 200px;
      height: 44px;
      font-size: 1.12rem;
    }
    .signUp {
      color: $mels-white;
      font-family: $font-tilt-neon;
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;
      align-self: center;
    }
  }
}
</style>

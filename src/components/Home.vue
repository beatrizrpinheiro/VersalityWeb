<template>
  <div>
    <h1 class="vindas">Bem vindo ao Versality, Professor(a)</h1>
    <div class="logodiv">
      <img class="logo" src="../assets/home-image.png" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({ name: "Home" });
</script>

<style>
.logo {
  justify-items: center;
  height: 500px;
  margin: 10px;
}
.logodiv {
  display: flex;
  justify-content: center;
}
.vindas {
  text-align: center;
  align-items: center;
  align-content: center;
  font-size: 18px;
  margin: 10px;
}
</style>

<template>
  <Header />
  <router-view class="body" />
  <Footer />
</template>

<script>
import Header from "components/header/Header.vue";
import Footer from "components/footer/Footer.vue";

export default {
  name: "App",
  components: { Footer, Header },
};
</script>

<style>
#app {
  font-family: Vanir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.body {
  display: flex;
  flex-direction: column;
  padding: 0px 10% 5% 10%;
}
</style>

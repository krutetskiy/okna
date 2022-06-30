<template>
  <div id="page">
    <div class="product_wrapper">
      <div
        v-for="(window, index) in windows"
        :key="window.id"
      >
        <Product v-model="windows[index]" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "pages/products/Window.vue";
import WindowApi from "api/endpoints/WindowApi";

export default {
  components: {
    Product,
  },
  data() {
    return {
      windows: null,
    };
  },
  async mounted() {
    var response = await WindowApi.getWindows();
    this.windows = response.windows;
  },
};
</script>

<style scoped>
.product_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 33.33333%);
}
</style>
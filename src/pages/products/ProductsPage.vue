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
import windows from "../../models/window";

export default {
  components: {
    Product,
  },
  data() {
    return {
      windows,
    };
  },
};
</script>

<style scoped>
#page {
  margin: 0 0 2% 0;
  padding: 0px 10% 0px 10%;
  display: block;
}

.product_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 33.33333%);
}
</style>
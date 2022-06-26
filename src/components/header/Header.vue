<template>
  <div class="header">
    <KitSearch />
    <div class="border"></div>
    <Menu />
  </div>
</template>

<script>
import KitSearch from "src/components/kit/search/Search.vue";
import Menu from "./menu/Menu.vue";

export default {
  name: "header",
  components: {
    KitSearch,
    Menu,
  },
};
</script>

<style scoped>
.header {
  height: 100px;
  margin-left: 10%;
  margin-right: 10%;
}
.border {
  border-top: 2px solid black;
  width: 100%;
  margin: 0px;
}
</style>
<template>
  <div id="menu">
    <div class="nav">
      <router-link
        to="/products"
        class="dropdown"
      >ПРОДУКЦИЯ</router-link>
      <router-link
        to="/services"
        class="dropdown"
      >УСЛУГИ</router-link>
      <router-link
        to="/contacts"
        class="dropdown"
      >КОНТАКТЫ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
};
</script>

<style scoped>
#menu {
  margin: 0px;
}

.dropdown {
  list-style-type: none;
  display: table-cell;
  padding: 10px;
  text-decoration: none;
  color: #2989b3;
  font-size: 26px;
}

.dropdown:hover {
  background-color: #e5e5e5;
  color: black;
}

.nav {
  display: table;
  width: 100%;
}
</style>
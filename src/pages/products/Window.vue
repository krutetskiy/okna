<template>
  <div id="product">
    <img
      src="../../assets/product_1.png"
      alt="#"
    >
    <div class="title">{{modelValue.title}}</div>
    <div class="description">{{modelValue.description}}</div>
    <div class="short_wrapper">
      <div class="box">{{modelValue.camera}}</div>
      <div class="short">Камеры</div>
      <div class="box">{{modelValue.energy}}</div>
      <div class="short">Энергоэффективность</div>
    </div>
  </div>
</template> 

<script>
export default {
  props: ["modelValue"],
};
</script>

<style>
#product {
  padding: 0 15px 0 15px;
}

#product img {
  height: 70%;
}

.title {
  color: #2989b2;
  font-size: 26px;
  text-align: left;
}

.description {
  padding-top: 8px;
  text-align: left;
}

.short_wrapper {
  display: table;
  margin-top: 10px;
}

.short {
  display: table-cell;
  padding-left: 10px;
  padding-right: 15px;
  color: #2989b2;
}

.box {
  border: 1px solid #2989b2;
  padding: 5px 9px;
}
</style>
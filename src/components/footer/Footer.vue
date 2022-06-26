<template>
  <div class="footer">
    <div class="container">
      <div class="section">
        <p class="section_title">Продукция</p>
        <li class="section_item">Окна</li>
        <li class="section_item">Двери</li>
        <li class="section_item">Порталы</li>
      </div>
      <div class="border"></div>
      <div class="section">
        <p class="section_title">Услуги</p>
        <li class="section_item">Ремонт</li>
        <li class="section_item">Монтаж</li>
        <li class="section_item">Замер</li>
      </div>
      <div class="border"></div>
      <div class="section">
        <p class="section_title">Галерея</p>
        <li class="section_item">Окна</li>
        <li class="section_item">Двери</li>
        <li class="section_item">Порталы</li>
      </div>
      <div class="border"></div>
      <div class="section">
        <p class="section_title">Другие разделы</p>
        <li class="section_item">Контакты</li>
        <li class="section_item">О нас</li>
        <div class="icons">
          <font-awesome-icon
            :icon="['fab', 'telegram']"
            size="lg"
            class="icon"
          />
          <font-awesome-icon
            :icon="['fab', 'youtube']"
            size="lg"
            class="icon"
          />
          <font-awesome-icon
            :icon="['fab', 'vk']"
            size="lg"
            class="icon"
          />
        </div>
      </div>
    </div>
    <div class="bottom">{{new Date().getFullYear()}}</div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.footer {
  background-color: #f1f1f1;
}
.container {
  width: 80%;
  display: table;
  padding-left: 10%;
  padding-right: 10%;
}
.section {
  display: table-cell;
  padding: 20px;
}
.section_title {
  font-weight: 600;
  text-align: left;
  padding: 5px;
}
.section_item {
  list-style-type: none;
  text-align: left;
  padding: 5px;
}
.border {
  display: table-cell;
  border-left: 2px solid black;
  margin: 0;
}
.icons {
  display: table;
  padding: 5px;
}
.icon {
  margin: 5px;
  padding: 5px;
}
.bottom {
  background-color: #2989b3;
  height: 20px;
}
</style>
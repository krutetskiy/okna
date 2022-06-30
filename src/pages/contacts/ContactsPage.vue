<template>
  <div id="contacts">
    <h1 class="title">Связь с нами</h1>
    <h2 class="subtitle">Вы можете связаться с нами любым удобным для вас способом</h2>
    <div class="contact-container">
      <form method="post">
        <input
          class="_input-1 input-40px"
          id="first_name"
          name="first_name"
          placeholder="Имя"
          type="text"
        >
        <input
          class="_input-1 input-40px"
          style="margin: 0"
          id="last_name"
          name="last_name"
          placeholder="Email"
          type="text"
        >
        <textarea
          id="message"
          name="message"
          placeholder="Сообщение"
        ></textarea>
      </form>
      <div class="social-container">
        <div class="number">+7 911 144-04-77</div>
        <div class="mail">ok-na.pro@ya.ru</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#contacts {
  margin-bottom: 190px;
}

.social-container {
  display: table-cell;
  width: 40%;
  vertical-align: middle;
}

.title {
  text-align: left;
  font-weight: 400;
}

.subtitle {
  text-align: left;
  font-size: 26px;
  font-weight: 200;
}
.number {
  margin: 20px;
  font-size: 26px;
}
.mail {
  font-size: 26px;
  color: #2989b2;
}
.contact-container {
  display: table;
  width: 100%;
}
form {
  display: table-cell;
  width: 60%;
  margin: 0;
}
input,
textarea {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
}
.input-40px,
.textarea-40px {
  width: 49% !important;
}
.contact-container ._input-1 {
  height: 38px;
  margin: 0 2% 0 0;
}
textarea {
  height: 150px;
  margin-top: 20px;
  font-size: 16px;
  padding: 10px;
  max-width: 100%;
  min-width: 100%;
  max-height: 200px;
}
</style>
<template>
  <div id="cover">
    <form
      method="get"
      action=""
    >
      <div class="search_container">
        <div class="search"><input
            type="text"
            placeholder="Поиск"
            required
          ></div>
        <button
          class="btn"
          type="submit"
        >
          <font-awesome-icon
            :icon="['fas', 'search']"
            size='2x'
          />
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "kit-search",
};
</script>

<style scoped>
form {
  height: 100%;
}

input {
  background-color: transparent;
  border: none;
  height: 90%;
  width: 95%;
  margin-left: 10px;
  outline: none;
}

input::placeholder {
  color: white;
}

button {
  vertical-align: middle;
  background-color: transparent;
  border: 0px;
  height: 90%;
  width: auto;
}

input[type="text"] {
  font-size: 22px;
}

.btn {
  display: table-cell;
}

.search_container {
  display: table;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}

.search {
  display: table-cell;
}

#cover {
  margin: 20px;
  width: 400px;
  background-color: #2989b3;
  border-radius: 20px;
  box-shadow: 0 5px 5px #2989b3, 0 0 0 5px #ffffffeb;
}
</style>
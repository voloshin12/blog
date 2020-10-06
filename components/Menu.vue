<template>
  <div class="menu">
    <ul class="menu-list">
      <li class="menu-list-item">
        <router-link to="/">Обо мне</router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/posts/">Блог</router-link>
      </li>
      <li class="menu-list-item">
        <router-link to="/posts/">Записки</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
.menu{
  margin: 40px ;
}
.menu-list-item{
  padding: 5px 0;
}
a{
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
}
</style>

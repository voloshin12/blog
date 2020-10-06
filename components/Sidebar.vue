<template>
  <div class="sidebar">
    <h1>Александр Волошин</h1>
    <div class="avatar" v-bind:style="{backgroundImage: 'url(' + this.avatar +')'}"/>
    <div class="description">
      Привет, меня зовут Александр Волошин, я Middle Front-End Developer. Добро пожаловать на мой сайт!
    </div>
    <Social/>
    <Menu/>
  </div>
</template>

<script>
import avatar from '@/assets/avatar.jpg'
import Social from '@/components/Social'
import Menu from '@/components/Menu'
export default {
  name: 'Sidebar',
  components: { Menu, Social },
  data() {
    return {
      avatar
    }
  }
}
</script>

<style lang="scss"  scoped>

h1{
  color: #ececec;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
.sidebar{
  max-width: 280px;
  width: 100%;
  background-color: #364153;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 20px;
}
.avatar{
  width: 150px;
  height: 150px;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-top: 20px;
}
.description{
  color: #cacaca;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}
</style>

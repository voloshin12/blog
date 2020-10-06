<template>
  <div class="container">
    <div class="posts">
      <div class="post" v-for="post in allPosts" :key="allPosts.id">

        <h2>{{ post.title }}</h2>
        <div class="content" v-html="post.content_html">

        </div>

        <router-link :to="'/posts/' + post.slug">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
name: "index",
  computed: {
    ...mapGetters(['allPosts'])
  }
}
</script>

<style scoped>

</style>

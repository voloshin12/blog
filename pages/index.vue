<template>
  <div class="container">
    <div class="posts">
      <div class="post" v-for="post in allPosts" :key="allPosts.id">

        <h2>{{ post.title }}</h2>
        <div class="content" v-html="post.content_html">

        </div>
        <router-link :to="post.slug">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  methods: mapActions(['getPosts']),
  computed: mapGetters(['allPosts']),
  created() {
    this.getPosts()
  },
}
</script>

<style>
img{
  max-width: 100%;
}
h2{
  margin-bottom: 20px;
}
.container{
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}
.post{
  margin-bottom: 50px;
}
</style>

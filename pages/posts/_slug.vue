<template>
  <div class="container" v-if="getPost">
    <h1>{{getPost.title}}</h1>
    <div v-html="getPost.content_html"></div>
  </div>
</template>

<script>

export default {
  name: 'slug',
  computed: {
    getPost() {
      return this.$store.getters.currentPost(this.$route.params.slug)[0]
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>

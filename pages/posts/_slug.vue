<template>
  <div class="container">
    <h1>{{ currentPost.title }}</h1>
    <div v-html="currentPost.content_html">

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'slug',
  methods: mapActions(['getPost']),
  computed: {
    ...mapGetters(['currentPost'])
  },
  created() {
    this.getPost({slug: this.$route.params.slug});
  }
}
</script>

<style scoped>

</style>

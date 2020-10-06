<template>

  <div class="container" v-if="currentPost">
    <h1>{{ currentPost.title }}</h1>
    <div v-html="currentPost.content_html">

    </div>
    <pre v-highlightjs="sourcecode">
      <code class="javascript">
        console.log("hello)
      </code>
    </pre>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'slug',
  methods: mapActions(['getPost', 'getPosts']),
  computed: {
    ...mapGetters(['currentPost'])
  },
  created() {
    this.getPost({slug: this.$route.params.slug})
  }
}
</script>

<style scoped>

</style>

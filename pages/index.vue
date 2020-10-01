<template>
  <div class="container">

  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  methods: mapActions(['getPosts']),
  created() {
    this.getPosts();
  },
}
</script>

<style>

</style>

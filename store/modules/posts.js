import axios from 'axios';
const LINK = 'http://new.nebloger.ru/api/v1/posts'

export default {
  actions: {
    async getPosts(cth){
      await axios.get(LINK)
        .then(function (response) {
          // handle success
          cth.commit('pushPosts', response.data.data);
          console.log('hello 1')
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
    async getPost(cth, payload) {
      if (cth.state.posts.length === 0) {
        await cth.dispatch('getPosts');
      }
      cth.commit('pushPost', payload.slug);
    }
  },
  mutations: {
    pushPosts(state, posts){
      state.posts = posts;
    },
    pushPost(state, slug) {
      state.post = state.posts.filter(item => {
        if (item.slug === slug){
          return item
        }
      })

    }
  },
  state: {
    posts: [],
    post: []
  },
  getters: {
    allPosts(state){
      return state.posts;
    },
    currentPost(state) {
      return state.post[0]
    }
  }
}

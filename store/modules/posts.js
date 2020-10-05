import axios from 'axios';
const LINK = 'http://new.nebloger.ru/api/v1/posts'

export default {
  actions: {
    getPosts(cth){
      axios.get(LINK)
        .then(function (response) {
          // handle success
          cth.commit('pushPosts', response.data.data);

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
    getPost(cth, payload) {
      cth.commit('pushPost', payload.slug);
    }
  },
  mutations: {
    pushPosts(state, posts){
      state.posts = posts;
    },
    pushPost(state, slug) {
      console.log(state);
      state.post = state.posts.filter(item => {
        if (item.slug === slug){
          return item
        }
      })
      console.log(state.post)
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

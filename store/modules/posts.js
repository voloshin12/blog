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
    }
  },
  mutations: {
    pushPosts(state, posts){
      state.posts = posts;
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state){
      return state.posts;
    },
    currentPost: state => slug => {
      return state.posts.filter(item => {
        if (item.slug === slug){
          return item
        }
      })
    }
  }
}

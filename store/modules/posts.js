import axios from 'axios';
const LINK = 'http://new.nebloger.ru/api/v1/posts'

export default {
  actions: {
    getPosts(cth){
      axios.get(LINK)
        .then(function (response) {
          // handle success
          cth.commit('pushPosts', response.data);
          console.log(response.data);
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
    pushPosts(){

    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(){
      return
    }
  }

}

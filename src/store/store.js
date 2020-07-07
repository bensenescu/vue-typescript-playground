import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [],
  },
  mutations: {
    addVideo: (state, video) => {
      state.videos.push(video);
    },
  },
});

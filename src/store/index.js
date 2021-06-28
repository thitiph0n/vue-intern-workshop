import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return { user: {} };
  },
  getters: {
    getUser: (state) => {
      return { avatar: 'http://unsplash.it/64/64', ...state.user };
    },
    getName: (state) => {
      return state.user.name;
    },
    getProfile: (state) => {
      return {
        avatar: 'http://unsplash.it/64/64',
        username: `@${state.user.username}`,
      };
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/users/3'
        );

        commit('SET_USER', data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

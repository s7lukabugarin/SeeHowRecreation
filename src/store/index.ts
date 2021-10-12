import { createStore } from 'vuex';

export default createStore({
  state: {
    activeNavLink: '',
  },
  mutations: {
    SET_ACTIVE_NAV_LINK(state, activeNavLink) {
      state.activeNavLink = activeNavLink;
    },
  },
  actions: {
  },
  modules: {
  },
});

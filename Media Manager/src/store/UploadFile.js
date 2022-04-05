export const uploadFile = {
  namespaced: true,

  state: {
    listFile: [],
  },
  mutations: {
    addFileName(state, newFileName) {
      state.listFile.push(newFileName);
    },
  },
  actions: {
    addFileName({ commit }, newFileName) {
      commit("addFileName", newFileName);
    },
  },
};
let projectItems = {
  state: {
    projectItems:[],
  },
  mutations:{
    changeProjectItems(state, newItems) {
      state.projectItems = newItems
    }
  }
}

export default projectItems;
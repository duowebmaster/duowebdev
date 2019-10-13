let selectedItem = {
  state: {
    selectedItem:{},
    selectedId: 0,
  },
  mutations:{
    changeItem(state, newItem) {
      state.selectedItem = newItem
    },
    changeSelectedId(state, newId) {
      state.selectedId = newId
    }
  }
}

export default selectedItem;
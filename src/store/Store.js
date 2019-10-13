import selectedItem from './SelectedItem'
import projectItems from './ProjectItems'
let store = {
  modules: {
    projectItems,
    selectedItem,
    dialogShow: {
      state: {
        detailDialogShow: false,
      },
      mutations:{
        switchDetailDialogShow(state) {
          state.detailDialogShow = !state.detailDialogShow
        }
      }
    }
  },
}
export default store
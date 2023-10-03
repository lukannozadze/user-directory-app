import { createSlice } from "@reduxjs/toolkit";




const deleteModal = createSlice({
    name:'user',
    initialState:{modalIsShown:false},
    reducers:{
       setDeleteModalIsShown(state){
        state.modalIsShown = true;
       },
       setDeleteModalIsHidden(state){
        state.modalIsShown = false;
       },
    }
})
export const deleteModalSlicer =  deleteModal.reducer;
export const {setDeleteModalIsShown,setDeleteModalIsHidden} = deleteModal.actions
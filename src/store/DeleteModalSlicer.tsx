import { createSlice } from "@reduxjs/toolkit";




const deleteModal = createSlice({
    name:'user',
    initialState:{modalIsShown:false},
    reducers:{
       setModalIsShown(state){
        state.modalIsShown = true;
       },
       setModalIsHidden(state){
        state.modalIsShown = false;
       },
    }
})
export const deleteModalSlicer =  deleteModal.reducer;
export const {setModalIsShown,setModalIsHidden} = deleteModal.actions
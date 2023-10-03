import { createSlice } from "@reduxjs/toolkit";




const editModal = createSlice({
    name:'user',
    initialState:{modalIsShown:false},
    reducers:{
       setEditModalIsShown(state){
        state.modalIsShown = true;
       },
       setEditModalIsHidden(state){
        state.modalIsShown = false;
       },
    }
})
export const editModalSlicer =  editModal.reducer;
export const {setEditModalIsShown,setEditModalIsHidden} = editModal.actions
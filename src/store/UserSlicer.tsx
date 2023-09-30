import { createSlice } from "@reduxjs/toolkit";
import { user } from "../user";
type usersState = {
    usersData:user[] | null
}


const userSlice = createSlice({
    name:'user',
    initialState:{usersData:[]} as usersState,
    reducers:{
        setUsers:(state,action) =>{
            state.usersData = action.payload
        }
    }
})
export const userSliceReducer =  userSlice.reducer;
export const {setUsers} = userSlice.actions
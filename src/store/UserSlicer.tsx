import { createSlice } from "@reduxjs/toolkit";
import { user } from "../user";
type usersState = {
    usersData:user[],
    isLoading:boolean
}


const userSlice = createSlice({
    name:'user',
    initialState:{usersData:[],isLoading:true} as usersState,
    reducers:{
        setUsers:(state,action) =>{
            state.usersData = action.payload
        },
        deleteUser:(state,action)=>{
            let usersCopy = state.usersData?.slice();
            usersCopy = state.usersData?.filter(user=>user.id!==action.payload)
            state.usersData = usersCopy;
        },
        setIsLoading:(state)=>{
            state.isLoading = !state.isLoading;
        }
    }
})
export const userSliceReducer =  userSlice.reducer;
export const {setUsers,deleteUser,setIsLoading} = userSlice.actions
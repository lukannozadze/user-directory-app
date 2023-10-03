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

        editUser:(state,action)=>{
           const usersCopy = state.usersData?.slice();
           usersCopy.map((user)=>{
            if(user.id === action.payload.id){
                user.name = action.payload.name
                user.email = action.payload.email
                user.address.city = action.payload.city
                user.address.street = action.payload.street
                user.address.suite  = action.payload.suite
            }
           })
           state.usersData =usersCopy;
        },

        setIsLoading:(state)=>{
            state.isLoading = !state.isLoading;
        }
    }
})
export const userSliceReducer =  userSlice.reducer;
export const {setUsers,deleteUser,setIsLoading,editUser} = userSlice.actions
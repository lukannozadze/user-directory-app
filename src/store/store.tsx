import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./UserSlicer";
 import { useDispatch,TypedUseSelectorHook,useSelector } from "react-redux";
 const store = configureStore({
    reducer: {
     users:userSliceReducer
    },
  });

  
   
  export type RootState = ReturnType<typeof store.getState>;
  export default store;
  export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
  export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
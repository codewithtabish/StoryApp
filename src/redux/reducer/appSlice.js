 import { createSlice } from '@reduxjs/toolkit'
 const appSlice=createSlice({
    name:"app",
    initialState:{
        isDarkMode:false,
        cartArray:[]

    },
    reducers:{
        toggleAppMode:(state,action)=>{
            state.isDarkMode=action.payload
        }
   

        
    }
 })


 export const {toggleAppMode}=appSlice.actions

 export const selectIsDarkMode = (state) => state.app.isDarkMode;


 export default appSlice.reducer

 
 import { createSlice } from '@reduxjs/toolkit'
 const appSlice=createSlice({
    name:"app",
    initialState:{
        isDarkMode:false,
        favArray:[]

    },
    reducers:{
        toggleAppMode:(state,action)=>{
            state.isDarkMode=action.payload
        },
        assignToFavArray:(state,action)=>{
            state.favArray=action.payload
        }
   

        
    }
 })


 export const {toggleAppMode,assignToFavArray}=appSlice.actions

 export const selectIsDarkMode = (state) => state.app.isDarkMode;

 export const myFacArray=(state)=>state.app.favArray


 export default appSlice.reducer

 
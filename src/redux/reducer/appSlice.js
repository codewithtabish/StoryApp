 import { createSlice } from '@reduxjs/toolkit'
 const appSlice=createSlice({
    name:"app",
    initialState:{
        isDarkMode:false,
        favArray:[],
        bannerImage:null

    },
    reducers:{
        toggleAppMode:(state,action)=>{
            state.isDarkMode=action.payload
        },
        assignToFavArray:(state,action)=>{
            state.favArray=action.payload
        },
        assignToBannerImage:(state,action)=>{
            state.bannerImage=action.payload
        }
   

        
    }
 })


 export const {toggleAppMode,assignToFavArray,assignToBannerImage}=appSlice.actions

 export const selectIsDarkMode = (state) => state.app.isDarkMode;

 export const myFacArray=(state)=>state.app.favArray


 export const myBannerImage=(state)=>state.app.bannerImage


 export default appSlice.reducer

 
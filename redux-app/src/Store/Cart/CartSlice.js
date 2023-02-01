import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice({
    name :"cart",
    initialState : [],
    reducers : {
         add : (state, action)=>{
            const cartIndex = state.findIndex((item)=>{
                 return item.id===action.payload.id
            })
           if(cartIndex>=0){
               alert("Alredy in Cart")
           }
           else{
               const cartItem = {...action.payload , CartQuantity : 1}
               state.push(cartItem)
           }
         },
         remove : (state,action)=>{
         return state.filter(item=>item.id !== action.payload)
        },
         
        decrement : (state,action)=>{
         const cartIndex = state.findIndex((item)=>{
                return item.id===action.payload.id
           })

           state[cartIndex].CartQuantity === 1 ?  state[cartIndex].CartQuantity=1 :  state[cartIndex].CartQuantity-=1
         },
        
         increment : (state,action)=>{ 
         const cartIndex = state.findIndex((item)=>{
              return item.id===action.payload.id
         })
         state[cartIndex].CartQuantity+=1
         console.log(state[cartIndex].CartQuantity)
     }
    }
})

export const {add , remove,decrement,increment} = cartSlice.actions
export default cartSlice.reducer
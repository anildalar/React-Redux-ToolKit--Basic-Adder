import { createSlice } from "@reduxjs/toolkit";

let initialState={
    value:777
}
export const addSubSlice = createSlice({
    //p:V
    name:'addsub',
    "initialState":initialState,
    reducers:{
        //1 P:V P will be your actionsNames

        //2. Methods
        increment:(state)=>{
            console.log('inside increment method');
            console.log('state---->',state.value);
            state.value = state.value + 1
        },
        decrement:(state)=>{
            console.log('inside decrement method');
            console.log('state---->',state);
            state.value = state.value - 1 //Direct Mutation x1
        },
        reset:(state)=>{
            console.log('inside reset method');
            console.log('state---->',state);
            state.value = 777
          

        },
    }
});


export const { increment, decrement, reset } = addSubSlice.actions;

export const selectCount = (state) => {
    console.log('state--->',state);
    return state.addSub.value;
}

export default addSubSlice.reducer;
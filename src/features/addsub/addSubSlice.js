import { createSlice } from "@reduxjs/toolkit";

let initialState={
    value:888
}
export const addSubSlice = createSlice({
    //p:V
    name:'addsub',
    "initialState":initialState,
    reducers:{
        //1 P:V P will be your actionsNames

        //2. Methods
        addbyone:(state)=>{
            console.log('inside addbyone method');
            console.log('state---->',state);
        },
        'reset':{},
        "subbyone":{},
    }
});


export const selectCount = (state) => {
    console.log('state--->',state);
    return state.addSub.value;
}

export default addSubSlice.reducer;
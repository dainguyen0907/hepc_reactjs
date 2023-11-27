import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'statusSearchBox',
  initialState: {
    value: 'hidden',
  },
  reducers: {
    toggle: (state) => {
      if(state.value==='hidden')
      {
        state.value='block';
      }else
      state.value='hidden';
    },
  },
})

// Action creators are generated for each case reducer function
export const {toggle} = counterSlice.actions
export default counterSlice.reducer
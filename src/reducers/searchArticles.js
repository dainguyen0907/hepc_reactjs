import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'searchArticles',
  initialState: {
    value: '',
  },
  reducers: {
    search: (state,actions) => {
        state.value=actions.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {search} = searchSlice.actions
export default searchSlice.reducer
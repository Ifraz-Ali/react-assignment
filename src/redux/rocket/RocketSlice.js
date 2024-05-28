import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    setRcokets: (state, action)=> {
        state.value = [...action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRcokets } = rocketSlice.actions

export default rocketSlice.reducer
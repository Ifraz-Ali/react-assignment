import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    setMissions: (state, action)=> {
        state.value = [...action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMissions } = missionSlice.actions

export default missionSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import rocketReducer from './rocket/RocketSlice'
import missionReducer from './mission/MissionSlice'

export const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer
  },
})

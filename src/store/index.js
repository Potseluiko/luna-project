import { configureStore } from "@reduxjs/toolkit"
import { currentUserSlice } from "../features/currentUser/currentUserSlice"

export default configureStore({
  reducer: {
    currentUser: currentUserSlice.reducer,
  },
})

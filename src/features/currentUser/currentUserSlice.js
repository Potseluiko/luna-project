import { createSlice } from "@reduxjs/toolkit"
import { postSignIn, removeCurrentUser } from "./currentUserActions"

const initialState = {
  data: null,
}

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postSignIn.fulfilled, (state, action) => {
        const { id, name, email } = action.payload

        state.data = { id, name, email }
      })
      .addCase(postSignIn.rejected, (state, action) => {})
      .addCase(removeCurrentUser, (state) => {
        state.data = initialState.data
      })
  },
})

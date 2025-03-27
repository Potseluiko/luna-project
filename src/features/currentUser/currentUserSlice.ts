import { createSlice, SliceCaseReducers, SliceSelectors } from "@reduxjs/toolkit"
import { postSignIn, removeCurrentUser } from "./currentUserActions"
import { TCurrentUser } from "./currentUserTypes.ts"

type TState = {
  data: null | TCurrentUser
}

const initialState: TState = {
  data: null,
}

export const currentUserSlice = createSlice<TState, SliceCaseReducers<TState>, "currentUser", SliceSelectors<TState>>({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postSignIn.fulfilled, (state, action) => {
        const { id, name, email } = action.payload

        state.data = { id, name, email }
      })
      // .addCase(postSignIn.rejected, (state, action) => {})
      .addCase(removeCurrentUser, (state) => {
        state.data = initialState.data
      })
  },
})

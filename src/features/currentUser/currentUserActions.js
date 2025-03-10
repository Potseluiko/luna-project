import axios from "axios"
import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

export const postSignIn = createAsyncThunk("currentUser/postSignIn", async ({ payload }, { rejectWithValue }) => {
  try {
    const response = await axios.request({
      url: "/api/signin",
      method: "POST",
      data: payload,
    })

    return response.data
  } catch (error) {
    // return rejectWithValue(error?.response?.data)
    return rejectWithValue(error)
  }
})

export const removeCurrentUser = createAction("currentUser/removeCurrentUser")

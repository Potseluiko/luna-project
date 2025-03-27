import axios, { AxiosResponse } from "axios"
import { AsyncThunk, createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { TCurrentUser, TSignInPayload } from "./currentUserTypes"

type TForm = {
  payload: TSignInPayload
}

export const postSignIn: AsyncThunk<TCurrentUser, TForm, any> = createAsyncThunk(
  "currentUser/postSignIn",
  async ({ payload }: TForm, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<TCurrentUser> = await axios.request<TCurrentUser>({
        url: "/api/signin",
        method: "POST",
        data: payload,
      })

      return response.data
    } catch (error) {
      // return rejectWithValue(error?.response?.data)
      return rejectWithValue(error)
    }
  }
)

export const removeCurrentUser = createAction("currentUser/removeCurrentUser")

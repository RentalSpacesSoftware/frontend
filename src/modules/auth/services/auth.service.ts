import { AxiosError } from "axios"
import axiosTool from "../../../tools/axios-tool"
import { AuthRequest, AuthResponse } from "../models/auth.model"

export const loginUser = async (req: AuthRequest): Promise<AuthResponse> => {
  try {
    const res = await axiosTool.post<AuthResponse>('/auth/login', req)
    console.log(res.data)

    return res.data
  } catch(error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data)
      throw new Error(error.response?.data.msg)
    }

    console.log(error)
    throw new Error('Unable to login')
  }
}
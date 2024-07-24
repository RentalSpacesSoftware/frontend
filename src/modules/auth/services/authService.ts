import { API_URI } from "../../../common/constants"
import axiosTool from "../../../tools/axios-tool"
import { AuthRequest } from "../models/authModels"

export const loginRequest = async (request: AuthRequest) => {
  return axiosTool.post(`${API_URI}/auth/login`, request)
}

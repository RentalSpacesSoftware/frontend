import { create } from "zustand"
import { persist } from "zustand/middleware"

type AuthState = {
  token: string
  isAuthenticated: boolean
}

type AuthActions = {
  setToken: (token: string) => void
  logout: () => void
}

export const useAuthStore = create(persist<AuthState & AuthActions>((set) => ({
  token: "",
  isAuthenticated: false,
  setToken: (token: string) => set(() => ({
    token,
    isAuthenticated: !!token
  })),
  logout: () => set(() => ({
    token: "",
    isAuthenticated: false
  }))
}), {name: 'authStorage'}))

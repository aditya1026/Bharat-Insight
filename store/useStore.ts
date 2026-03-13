import { create } from "zustand"

type AppState = {
  search: string
  setSearch: (value: string) => void
}

export const useStore = create<AppState>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}))
import { create } from "zustand"
import type { Database } from "@/lib/databse.types"
type ProfileType = Database['public']['Tables']['profiles']['Row']

type StateType = {
    user: ProfileType
    setUser: (payload: ProfileType) => void
}

const useStore = create<StateType>((set) => ({
    user: { id: "", email: "", name: "", introduce: "", avator_url: "" },
    setUser: (payload) => set({ user: payload }),
}))

export default useStore;
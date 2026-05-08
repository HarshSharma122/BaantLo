import { create } from "zustand";




interface RefreshProps{
    isRefresh:boolean;
    setIsRefresh:(isRefresh: boolean) => void;
}

export const useRefreshStore = create<RefreshProps>()((set) => ({
  isRefresh: false,
  setIsRefresh: (isRefresh: boolean) => set({ isRefresh }),
}));

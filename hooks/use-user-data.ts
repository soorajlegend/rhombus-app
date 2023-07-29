import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { User } from "@/types";

interface UserState {
  data?: User;
  saveUserData: (userData: User) => void;
}

const useUserData = create(
  persist<UserState>(
    (set) => ({
      data: undefined,
      saveUserData: (userData: User) => {
        set({ data: userData });
      },
    }),
    {
      name: "user-data-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserData;

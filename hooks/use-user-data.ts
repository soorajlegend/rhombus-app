import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { User } from "@/types";

interface UserData {
  data?: User;
  save: (data: User) => void;
}

const useUserData = create(
  persist<UserData>(
    (set) => ({
      data: undefined,
      save: (data: User) => {
        set({ data });
      },
    }),
    {
      name: "user-data-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserData;

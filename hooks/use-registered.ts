import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware";


interface RegisteredProps {
isRegistered: boolean;
onSet: () => void
}

const useRegistered = create(
    persist<RegisteredProps>(
      (set) => ({
        isRegistered: false,
        onSet: () => set({ isRegistered: true }),
      }),
      {
        name: "rumbu-user-registration-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

export default useRegistered;
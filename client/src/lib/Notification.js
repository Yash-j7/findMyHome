import { create } from "zustand";
import axios from "axios";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    const d = await axios.get("http://localhost:8080/user/notification", {
      withCredentials: true,
    });
    console.log("Notification Count:", d.data);
    set({ number: d.data });
  },
  decrease: () => {
    set((prev) => ({ number: prev.number - 1 }));
  },
  reset: () => {
    set({ number: 0 });
  },
}));

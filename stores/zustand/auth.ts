import { create } from "zustand";
import { getItemLocalStorage } from "@/utils/storage/get-item-local-storage";
import type { USER_TYPE } from "@/utils/storage/schema";
import { setItemLocalStorage } from "@/utils/storage/set-item-local-storage";
import { removeFromLocalStorage } from "@/utils/storage/remove-item-local-storage";
import type { LOGGED_USER_TYPE } from "@/services/api/login/register-password";
import { api } from "@/services/api/api";

type UserAuthState = {
  user: USER_TYPE | null;
  initialize: () => Promise<void>;
  login: (user: LOGGED_USER_TYPE) => Promise<void>;
  logout: () => Promise<void>;
  getUser: () => USER_TYPE | null;
};

export const useUserStore = create<UserAuthState>((set, get) => ({
  user: null,

  initialize: async () => {
    try {
      const user = await getItemLocalStorage<"user">("user");
      if (user) {
        api.setToken(user.token);
        set({ user });
      } else {
        await get().logout();
      }
    } catch (error) {
      console.error(error);
      await get().logout();
    }
  },

  login: async (user: USER_TYPE) => {
    await setItemLocalStorage("user", user);
    api.setToken(user.token);
    set({ user });
  },

  logout: async () => {
    await removeFromLocalStorage("user");
    api.setToken(null);
    set({ user: null });
  },

  getUser: () => get().user,
}));

useUserStore.getState().initialize();

import { create } from "zustand";

export type ArenaType = {
  id: string;
  display_name: string;
  image_url: string;
  favorite_count: number;
  logo_url: string;
};

type ArenaStore = {
  arena: ArenaType;
};

export const useArenaStore = create<ArenaStore>((set) => ({
  arena: {
    id: "3",
    display_name: "Arena do Gui",
    logo_url:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/06/20/222313700-captura-de-tela-2023-06-19-as-154358.jpg",
    image_url:
      "https://e0.pxfuel.com/wallpapers/976/108/desktop-wallpaper-estadio-azteca-el-estadio-azteca-es-un-estadio-de-futbol-u.jpg",
    favorite_count: 2,
  },
  setArena: (arena: ArenaType) => set({ arena }),
}));

export default useArenaStore;

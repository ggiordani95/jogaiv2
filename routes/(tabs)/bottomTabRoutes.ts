import { EditProfileIcon } from "@/components/navigation/EditProfileIcon";
import { HomeIcon } from "@/components/navigation/HomeIcon";
import { SchedulesIcon } from "@/components/navigation/SchedulesIcon";

const bottomTabRoutes = [
  {
    name: "index",
    label: "Início",
    icon: HomeIcon,
  },
  {
    name: "explore",
    label: "Agenda",
    icon: SchedulesIcon,
  },
  {
    name: "editprofile",
    label: "Perfil",
    icon: EditProfileIcon,
  },
];

export { bottomTabRoutes };

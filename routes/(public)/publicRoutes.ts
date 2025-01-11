type routesNames = "email" | "password" | "register" | "onboarding" | "city";

export const publicRoutes: publicRoutesTypes[] = [
  {
    name: "onboarding",
  },
  {
    name: "city",
  },
  {
    name: "email",
  },
  {
    name: "password",
  },
  {
    name: "register",
  },
];

export type publicRoutesTypes = {
  name: routesNames;
};

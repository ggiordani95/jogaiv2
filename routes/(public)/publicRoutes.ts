type routesNames = "email" | "password" | "register" | "onboarding";

export const publicRoutes: publicRoutesTypes[] = [
  {
    name: "onboarding",
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

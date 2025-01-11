import React from "react";
import { CityOnBoarding, TemplateOne } from "./onboarding.templates";
import Calendar from "@/assets/lotties/Calendar.json";
import Protection from "@/assets/lotties/Protection.json";

export type OnBoardScreensType = {
  name: string;
  component: React.ReactNode;
};

export const onboardingScreens: OnBoardScreensType[] = [
  {
    name: "agendamento",
    component: (
      <TemplateOne
        title="Agende partidas"
        masterword="agendamento"
        l1="Faça o "
        l2="de um modo fácil, seguro, organizado e rápido."
        lottie={Calendar}
      />
    ),
  },
  {
    name: "security",
    component: (
      <TemplateOne
        title="Armazene dados"
        masterword="armazenamento"
        l1="Faça o "
        l2="das informaçoẽs de seus agendamentos."
        lottie={Protection}
      />
    ),
  },
  {
    name: "city",
    component: <CityOnBoarding />,
  },
];

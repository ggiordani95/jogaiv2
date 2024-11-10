import {
  publicRoutes,
  publicRoutesTypes,
} from "@/routes/(public)/publicRoutes";
import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      {publicRoutes.map((screen: publicRoutesTypes) => {
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            options={{ headerShown: false }}
          />
        );
      })}
    </Stack>
  );
}

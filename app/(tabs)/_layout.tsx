import { Tabs, usePathname } from "expo-router";
import React from "react";

import { tabsRoutes } from "@/routes/(tabs)/tabsRoutes";
import { useColorScheme } from "@/styles/hooks/useColorScheme.web";
import { Colors } from "@/theme/ui/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const currentPath = usePathname();

  const hideTabBarScreens = ["(modals)"];

  function visibleHandler(name: string) {
    if (hideTabBarScreens.includes(name)) {
      return () => null;
    } else {
      return undefined;
    }
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopColor: "transparent",
          display: "none",
        },
        headerShown: false,
      }}
    >
      {tabsRoutes.map(({ name, label, icon: Icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            tabBarLabel: label,
            tabBarLabelStyle: null,
            tabBarIcon: ({ focused }) => (
              <Icon fill={"black"} focused={focused} />
            ),
            tabBarButton: visibleHandler(name),
          }}
        />
      ))}
    </Tabs>
  );
}

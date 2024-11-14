import { Tabs, usePathname } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/styles/hooks/useColorScheme";
import { tabsRoutes } from "@/routes/(tabs)/tabsRoutes";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  console.log({ colorScheme });
  const currentPath = usePathname();
  const getLabelStyle = (routeName: string) => ({
    color:
      currentPath === `/${routeName}`
        ? Colors[colorScheme ?? "light"].tabIconSelected
        : Colors[colorScheme ?? "light"].tabIconDefault,
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].tabBarBackground,
          borderTopColor: Colors[colorScheme ?? "light"].bgContentPrimary,
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
            tabBarLabelStyle: getLabelStyle(name === "index" ? "" : name),
            tabBarIcon: ({ focused }) => (
              <Icon
                fill={
                  focused
                    ? Colors[colorScheme ?? "light"].tabIconSelected
                    : Colors[colorScheme ?? "light"].tabIconDefault
                }
                focused={focused}
              />
            ),
            tabBarButton: name === "(modals)" ? () => null : undefined,
          }}
        />
      ))}
    </Tabs>
  );
}

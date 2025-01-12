import { Tabs, usePathname } from "expo-router";
import React, { useMemo } from "react";
import { tabsRoutes } from "@/routes/(tabs)/tabsRoutes";
import { UI } from "@/theme/ui/constants/UIConstants";
import { useColorScheme, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme() as "light" | "dark";
  const currentPath = usePathname();
  const hideTabBarScreens = ["(modals)"];

  function visibleHandler(name: string) {
    if (hideTabBarScreens.includes(name)) {
      return () => null;
    } else {
      return undefined;
    }
  }

  const theme = useMemo(() => UI.ThemeColorType[colorScheme], [colorScheme]);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.bgContent,
          borderTopColor: "transparent",
        },
        headerShown: false,
      }}
    >
      {tabsRoutes.map(({ name, label, icon: Icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            tabBarLabel: () => undefined,
            tabBarIcon: ({ focused }) => (
              <View style={{ paddingTop: 10 }}>
                <Icon
                  fill={
                    focused ? UI.Colors.Primary100 : theme.bgContentSecondary
                  }
                  focused={focused}
                />
              </View>
            ),
            tabBarButton: visibleHandler(name),
          }}
        />
      ))}
    </Tabs>
  );
}

import { Section } from "@/components/Section";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import React from "react";

export default function HomeScreen() {
  const router = useRouter();
  const isAuthenticated = true;

  useEffect(() => {
    if (isAuthenticated) return;
    setTimeout(() => {
      router.push("/(modals)/login");
    }, 1000);
  }, []);

  return (
    <Section>
      <React.Fragment></React.Fragment>
    </Section>
  );
}

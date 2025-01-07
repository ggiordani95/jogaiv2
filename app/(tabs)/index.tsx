import { Section } from "@/components/Section";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { OnBoarding } from "@/screens/onboarding/onboarding.view";

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
      <OnBoarding />
    </Section>
  );
}

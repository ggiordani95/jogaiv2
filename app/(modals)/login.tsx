import { Calendar } from "@/components/Calendar";
import { SchedulePlanner } from "@/components/SchedulePlanner";

import { LinearGradient } from "expo-linear-gradient";

export default function Page() {
  return (
    <LinearGradient
      colors={["rgb(32, 32, 32)", "rgb(12, 12, 12)", "rgb(8, 8, 8)", "black"]}
      style={{ flex: 1 }}
    >
      {/* <Calendar /> */}
      {/* <SchedulePlanner /> */}
    </LinearGradient>
  );
}

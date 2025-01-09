import { useEffect, useState } from "react";
import { fetchSports } from "./sports";
import { Sport } from "@/utils/types/sport";

export function sportsService() {
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    (async () => {
      const result = await fetchSports();
      setSports(result);
    })();
    return () => {};
  }, []);

  return { sports };
}

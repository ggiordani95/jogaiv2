import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { ThemedText } from "./ThemedText";

const getAllYearCalendar = () => {
  const [calendar, setCalendar] = useState<
    {
      monthYear: string;
      days: { day: string; weekDay: string; date: Date }[];
    }[]
  >([]);
  const [currenthMonthIndex, setCurrentMonthIndex] = useState(0);

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const getWeekDays = () => {
    return (
      calendar[currenthMonthIndex]?.days
        ?.filter((day, index) => index <= 6)
        .map((day) => day.weekDay) || []
    );
  };

  const getCurrentMonthYear = () => {
    return {
      month: calendar[currenthMonthIndex]?.monthYear || "",
    };
  };

  const generateCalendar = (startMonth: number, startYear: number) => {
    const monthNames = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    const newCalendar = [];

    for (let i = 0; i < 13; i++) {
      const totalMonths = startMonth - 1 + i;
      const year = startYear + Math.floor(totalMonths / 12);
      const monthIndex = totalMonths % 12;
      const month = monthNames[monthIndex];

      const days = Array.from(
        { length: daysInMonth(monthIndex + 1, year) },
        (_, day) => {
          const date = new Date(year, monthIndex, day + 1);
          return {
            day: date.toISOString().split("T")[0],
            weekDay: date.toLocaleString("en-US", { weekday: "long" }),
            date: date,
          };
        }
      );

      newCalendar.push({ monthYear: `${month} ${year}`, days });
    }

    setCalendar(newCalendar);
  };

  function getMonth(index: number) {
    console.log(calendar[index].days);
    return (
      calendar[index]?.days?.map((day) => ({
        month: day.day.split("-")[1],
        day:
          day.day.split("-")[2].substring(0, 1) === "0"
            ? day.day.split("-")[2].substring(1, 2)
            : day.day.split("-")[2],
        weekDay: day.weekDay,
        year: day.day.split("-")[0],
      })) || []
    );
  }

  const getNumberOfDays = () => {
    const numberOfDays = getMonth(currenthMonthIndex);
    return numberOfDays.length;
  };

  const getDayValue = (day: number) => {
    return getMonth(currenthMonthIndex)[day - 1];
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    generateCalendar(currentMonth, currentYear);
  }, []);

  return {
    getMonth,
    getNumberOfDays,
    getWeekDays,
    getCurrentMonthYear,
    getDayValue,
  };
};

const getDaysRows = (numberOfDays: number) => {
  const days = Array.from({ length: numberOfDays }, (_, index) => index + 1);
  const rows: number[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    rows.push(days.slice(i, i + 7));
  }
  return { dayRows: rows };
};

enum WeekDays {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}
type TWeekDays = keyof typeof WeekDays;

const weekDaysBrazilian = {
  [WeekDays.Sunday]: "Dom",
  [WeekDays.Monday]: "Seg",
  [WeekDays.Tuesday]: "Ter",
  [WeekDays.Wednesday]: "Qua",
  [WeekDays.Thursday]: "Qui",
  [WeekDays.Friday]: "Sex",
  [WeekDays.Saturday]: "Sáb",
} as const;

export const Calendar = () => {
  const { getNumberOfDays, getWeekDays, getCurrentMonthYear, getDayValue } =
    getAllYearCalendar();
  const { dayRows } = getDaysRows(getNumberOfDays());

  return (
    <LinearGradient
      colors={["rgb(32, 32, 32)", "rgb(12, 12, 12)", "rgb(8, 8, 8)", "black"]}
      style={styles.container}
    >
      <View style={styles.monthYear}>
        <ThemedText variant="medium" weight="semibold">
          {getCurrentMonthYear().month}
        </ThemedText>
      </View>
      <View style={styles.row}>
        {getWeekDays().map((day, index) => (
          <View key={index} style={[styles.box]}>
            <DayLabel day={weekDaysBrazilian[day as WeekDays]} />
          </View>
        ))}
      </View>
      {dayRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((day, index) => (
            <View
              key={index}
              style={[
                styles.box,
                styles.border,
                rowIndex == 0 && index < 8 && { borderTopWidth: 1 },
                index == 0 && { borderLeftWidth: 0 },
                index == row.length - 1 &&
                  row.length % 7 === 1 && {
                    borderRightWidth: 0,
                  },
              ]}
            >
              <DayLabel
                day={day.toString()}
                onPress={() => {
                  const value = getDayValue(day);
                  console.log(value);
                }}
              />
            </View>
          ))}
          {Array.from({ length: 7 - row.length }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.box,
                styles.border,
                {
                  borderLeftColor: index == 0 ? "#2e2e2e" : "transparent",
                  borderRightColor: "transparent",
                  borderTopColor: "transparent",
                  borderBottomColor: "transparent",
                },
              ]}
            ></View>
          ))}
        </View>
      ))}
    </LinearGradient>
  );
};

const DayLabel = ({
  day,
  onPress,
}: {
  day: TWeekDays | string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {day}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: "#fff",
  },
  box: {
    flex: 1,
    paddingVertical: 18,
  },
  border: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "#2e2e2e",
  },
  monthYear: {
    marginTop: 32,
    width: "100%",
    marginLeft: 32,
  },
});

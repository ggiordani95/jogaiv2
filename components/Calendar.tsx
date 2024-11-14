import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { ThemedText } from "./ThemedText";
import { Feather } from "@expo/vector-icons";
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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

  const getDaysWithMonth = (numberOfDays: number) => {
    const days = Array.from({ length: numberOfDays }, (_, index) => index + 1);
    const daysWithMonth = days.map((day) => ({
      day,
      month: currenthMonthIndex.toString(),
    }));
    const rows: { day: number; month: string }[][] = [];
    for (let i = 0; i < daysWithMonth.length; i += 7) {
      rows.push(daysWithMonth.slice(i, i + 7));
    }
    return { dayRows: rows };
  };

  const changeIndex = (index: number) => {
    if (index > 12 || index < 0) return;
    setCurrentMonthIndex(index);
  };

  const getDaysRows = (numberOfDays: number) => {
    const days = Array.from({ length: numberOfDays }, (_, index) => index + 1);
    const rows: number[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      rows.push(days.slice(i, i + 7));
    }
    return { dayRows: rows };
  };

  const { dayRows } = getDaysRows(getNumberOfDays());

  return {
    getMonth,
    index: currenthMonthIndex,
    getNumberOfDays,
    getWeekDays,
    getCurrentMonthYear,
    getDayValue,
    changeIndex,
    dayRows,
  };
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

const weekDaysPort = {
  [WeekDays.Sunday]: "Dom",
  [WeekDays.Monday]: "Seg",
  [WeekDays.Tuesday]: "Ter",
  [WeekDays.Wednesday]: "Qua",
  [WeekDays.Thursday]: "Qui",
  [WeekDays.Friday]: "Sex",
  [WeekDays.Saturday]: "Sáb",
} as const;

export const Calendar = () => {
  const {
    getWeekDays,
    getCurrentMonthYear,
    getDayValue,
    index: currentMonthIndex,
    changeIndex,
    dayRows,
  } = getAllYearCalendar();

  type TDay = {
    month: string;
    day: string;
    weekDay: string;
    year: string;
  };

  const [selectedDay, setSelectedDay] = useState<{
    day: TDay;
    currentSelectedIndex: number;
  } | null>(null);
  const calendarTranslateY = useSharedValue(0);
  const calendarOpacity = useSharedValue(1);

  const monthYearTranslateY = useSharedValue(0);
  const monthYearOpacity = useSharedValue(1);

  const calendarAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: calendarTranslateY.value }],
      opacity: calendarOpacity.value,
    };
  });

  const monthYearAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: monthYearTranslateY.value }],
      opacity: monthYearOpacity.value,
    };
  });

  const fadeFromTop = ({
    translateY,
    opacity,
  }: {
    translateY: SharedValue<number>;
    opacity: SharedValue<number>;
  }) => {
    translateY.value = -30;
    opacity.value = 0;
    translateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });
    opacity.value = withTiming(1, {
      duration: 400,
      easing: Easing.out(Easing.exp),
    });
  };

  const fadeFromBottom = ({
    translateY,
    opacity,
  }: {
    translateY: SharedValue<number>;
    opacity: SharedValue<number>;
  }) => {
    translateY.value = 50;
    opacity.value = 0;
    translateY.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });
    opacity.value = withTiming(1, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.monthYear}>
        <Animated.View style={monthYearAnimatedStyle}>
          <ThemedText variant="medium" weight="semibold">
            {getCurrentMonthYear().month}
          </ThemedText>
        </Animated.View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            disabled={currentMonthIndex < 1}
            onPress={() => {
              fadeFromBottom({
                translateY: calendarTranslateY,
                opacity: calendarOpacity,
              });
              changeIndex(currentMonthIndex - 1);
            }}
          >
            <ThemedText>
              <Feather
                name="chevron-left"
                size={24}
                color={currentMonthIndex === 0 ? "#676767" : "white"}
              />
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              fadeFromBottom({
                translateY: calendarTranslateY,
                opacity: calendarOpacity,
              });
              fadeFromTop({
                translateY: monthYearTranslateY,
                opacity: monthYearOpacity,
              });
              changeIndex(currentMonthIndex + 1);
            }}
            disabled={currentMonthIndex > 11}
          >
            <ThemedText>
              <Feather
                name="chevron-right"
                size={24}
                color={currentMonthIndex > 11 ? "#676767" : "white"}
              />
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        {getWeekDays().map((day, index) => (
          <View key={index} style={[styles.box]}>
            <DayLabel day={weekDaysPort[day as WeekDays]} />
          </View>
        ))}
      </View>

      <Animated.View
        style={[
          calendarAnimatedStyle,
          { flexDirection: "row", overflow: "hidden", width: "100%" },
        ]}
      >
        {Array.from({ length: 12 }, (_, indexArr) => (
          <View key={indexArr} style={{ width: "100%" }}>
            {dayRows.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((day, indexDay) => (
                  <View
                    key={indexDay}
                    style={[
                      styles.box,
                      styles.border,
                      rowIndex == 0 && indexDay < 8 && { borderTopWidth: 1 },
                      indexDay == 0 && { borderLeftWidth: 0 },
                      indexDay == row.length - 1 &&
                        row.length % 7 === 1 && {
                          borderRightWidth: 0,
                        },
                      selectedDay?.day.day === day.toString() &&
                        selectedDay?.currentSelectedIndex ===
                          currentMonthIndex && {
                          backgroundColor: "#2d2d2d",
                        },
                    ]}
                  >
                    <DayLabel
                      day={day.toString()}
                      onPress={() => {
                        const value = getDayValue(day);
                        setSelectedDay({
                          day: value,
                          currentSelectedIndex: currentMonthIndex,
                        });
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
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const DayLabel = ({
  day,
  onPress,
  selected,
}: {
  day: TWeekDays | string;
  onPress?: () => void;
  selected?: boolean;
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
    width: "100%",
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
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allMonthsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  monthContainer: {
    width: "30%",
    margin: 5,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  monthTitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  dayText: {
    fontSize: 12,
    color: "#fff",
    margin: 2,
  },
});

import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

const getAllYearCalendar = () => {
  const [calendar, setCalendar] = useState<
    {
      monthYear: string;
      days: { day: string; weekDay: string; date: Date }[];
    }[]
  >([]);
  const [rows, setRows] = useState<string[]>([]);

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const generateCalendar = (startMonth: number, startYear: number) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const newCalendar = [];

    for (let i = 0; i < 12; i++) {
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

  function returnMonthByIndex(index: number) {
    return calendar[index]?.days?.map((day) => ({
      month: day.day.split("-")[1],
      day:
        day.day.split("-")[2].substring(0, 1) === "0"
          ? day.day.split("-")[2].substring(1, 2)
          : day.day.split("-")[2],
      weekDay: day.weekDay,
      year: day.day.split("-")[0],
    }));
  }

  const rowsPush = () => {
    const rowsArr = [];
    for (
      let i = 0;
      i < returnMonthByIndex(0).map((day: any) => day.day).length;
      i += 7
    ) {
      rowsArr.push(
        returnMonthByIndex(0)
          .map((day) => day.day)
          .slice(i, i + 7)
      );
    }
    setRows(rowsArr[0]);
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    generateCalendar(currentMonth, currentYear);
    rowsPush();
  }, []);

  return { calendar, returnMonthByIndex, rows };
};

export const Calendar = () => {
  const days = Array.from({ length: 30 }, (_, index) => `${index + 1}`);

  const { calendar, rows } = getAllYearCalendar();

  console.log(rows);
  return (
    <LinearGradient
      colors={["rgb(32, 32, 32)", "rgb(12, 12, 12)", "rgb(8, 8, 8)", "black"]}
      style={styles.container}
    >
      <View style={styles.row}>
        <View style={[styles.box]}>
          <DayLabel day={"Seg"} />
        </View>
        <View style={[styles.box]}>
          <DayLabel day={"Ter"} />
        </View>
        <View style={[styles.box]}>
          <DayLabel day={"Qua"} />
        </View>
        <View style={[styles.box]}>
          <DayLabel day={"Qui"} />
        </View>
        <View style={[styles.box]}>
          <DayLabel day={"Sex"} />
        </View>
        <View style={[styles.box]}>
          <DayLabel day={"Sáb"} />
        </View>
        <View style={[styles.box]}>
          <DayLabel day={"Dom"} />
        </View>
      </View>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {/* {row.map((day, index) => (
            <View
              key={index}
              style={[
                styles.box,
                styles.border,
                rowIndex == 0 && index < 8 && { borderTopWidth: 1 },
                index == 0 && { borderLeftWidth: 0 },
                index == row.length - 1 &&
                  row.length % 7 === 1 && { borderRightWidth: 0 },
              ]}
            >
              <DayLabel day={day} />
            </View>
          ))} */}
          {
            // Add empty boxes to fill the row
            Array.from({ length: 7 - row.length }).map((_, index) => (
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
            ))
          }
        </View>
      ))}
    </LinearGradient>
  );
};

const DayLabel = ({ day }: { day: string }) => {
  return (
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
});

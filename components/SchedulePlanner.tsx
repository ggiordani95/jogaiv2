import { View, StyleSheet, useWindowDimensions, FlatList } from "react-native";
import { ThemedText } from "./ThemedText";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useRef } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const Hour = ({ hour }: { hour: number }) => {
  return (
    <View style={styles.columns}>
      <View style={styles.horizontalLine} />
      <View style={styles.hourAndLine}>
        <ThemedText style={styles.hour}>
          {`${hour === 24 ? "00" : hour.toString().padStart(2, "0")}h`}
        </ThemedText>
        <View style={styles.line} />
      </View>
    </View>
  );
};

const COLUMN_HEIGHT = 60;

type TPlan = {
  title: string;
  color: string;
  index: number;
};

type THorizontal = {
  from: number;
  to: number;
} & TPlan;

type THour = {
  hour: number;
  plan: TPlan[][];
};

const PlannerHours: THour[] = [
  {
    hour: 6,
    plan: [
      [
        { index: 0, title: "Reunião com o time", color: "#336f17" },
        { index: 0, title: "Reunião com o joao", color: "#3bba00" },
      ],
      [{ index: 1, title: "Evento", color: "#25a8ff" }],
    ],
  },
  {
    hour: 7,
    plan: [],
  },
  {
    hour: 8,
    plan: [
      [
        { index: 0, title: "Reunião com o time", color: "#336f17" },
        { index: 0, title: "Reunião com o joao", color: "#3bba00" },
      ],
      [{ index: 1, title: "Evento", color: "#25a8ff" }],
    ],
  },
  {
    hour: 9,
    plan: [
      [{ index: 0, title: "", color: "" }],
      [{ index: 1, title: "Reunião super tri", color: "#0066ff" }],
    ],
  },
  {
    hour: 10,
    plan: [],
  },
  {
    hour: 11,
    plan: [],
  },
  {
    hour: 12,
    plan: [],
  },
  {
    hour: 13,
    plan: [],
  },
  {
    hour: 14,
    plan: [],
  },
  {
    hour: 15,
    plan: [],
  },
  {
    hour: 16,
    plan: [],
  },
  {
    hour: 17,
    plan: [],
  },
  {
    hour: 18,
    plan: [],
  },
  {
    hour: 19,
    plan: [],
  },
  {
    hour: 20,
    plan: [],
  },
  {
    hour: 21,
    plan: [],
  },
  {
    hour: 22,
    plan: [],
  },
  {
    hour: 23,
    plan: [],
  },
  {
    hour: 0,
    plan: [],
  },
  {
    hour: 1,
    plan: [],
  },
  {
    hour: 2,
    plan: [],
  },
  {
    hour: 3,
    plan: [],
  },
  {
    hour: 4,
    plan: [],
  },
  {
    hour: 5,
    plan: [],
  },
];

const HorizontalPlans: THorizontal[] = [
  {
    from: 6,
    to: 9,
    title: "Reunião com o time",
    color: "#5a2c9b",
    index: 0,
  },
  {
    from: 11,
    to: 13,
    title: "Reunião com o time",
    color: "#5a2c9b",
    index: 0,
  },
  {
    from: 14,
    to: 18,
    title: "Reunião com o time",
    color: "#5a2c9b",
    index: 0,
  },
];

const usePlannerHandler = () => {
  const [plannerHours, setPlannerHours] = useState<THour[]>(PlannerHours);
  const [horizontalPlans, setHorizontalPlans] =
    useState<THorizontal[]>(HorizontalPlans);

  return { plannerHours, horizontalPlans };
};

const PlanGroup = ({
  planGroup,
  groupIndex,
  hasHorizontal,
  initialColumnsPositionX,
}: {
  planGroup: TPlan[];
  groupIndex: number;
  hasHorizontal?: boolean;
  initialColumnsPositionX: number;
}) => {
  const width = useWindowDimensions().width;
  return (
    <>
      <View
        key={groupIndex}
        style={{ flexDirection: "row", flex: 1, gap: 3, position: "relative" }}
      >
        {planGroup.map((plan, index) => (
          <View
            key={index}
            style={[
              styles.box,
              { backgroundColor: plan.color },
              { maxWidth: width - initialColumnsPositionX - 10 },
              hasHorizontal && { maxWidth: width / 3 - 20 },
            ]}
          >
            <ThemedText>
              {hasHorizontal && plan.title.length > 10
                ? plan.title.substring(0, 10) + "..."
                : plan.title}
            </ThemedText>
          </View>
        ))}
      </View>
      <View style={{ flex: 0.1 }} />
    </>
  );
};

const PlanColumns = ({
  plannerHours,
  initialColumnsPositionX,
  width,
  activeColumn,
}: {
  plannerHours: THour[];
  initialColumnsPositionX: number;
  width: number;
  activeColumn: number;
}) => {
  return (
    <>
      {plannerHours.map((hour: THour, index: number) => {
        return (
          <View
            key={index}
            style={[
              styles.boxContainer,
              {
                left: initialColumnsPositionX,
                top: COLUMN_HEIGHT * index + 10,
                width: width - 40,
                height: COLUMN_HEIGHT,
                borderWidth: 2,
                borderStyle: "solid",
                borderColor: activeColumn == index ? "#6a7da1" : "transparent",
              },
            ]}
          />
        );
      })}
    </>
  );
};

export const SchedulePlanner = () => {
  const refs = useRef<(View | null)[]>([]);

  const { plannerHours, horizontalPlans } = usePlannerHandler();

  const [initialColumnsPositionX, setInitialColumnsPositionX] = useState(0);
  const [activeColumn, setActiveColumn] = useState(0);

  const width = useWindowDimensions().width;

  const initialIndex = 6;

  const gesture = useRef(
    Gesture.Pan()
      .onChange((event) => {
        const columnIndex = Number(
          Math.round(event.translationY / COLUMN_HEIGHT)
            .toString()
            .padStart(1, "0")
        );

        // Only update if the column index has changed
        if (activeColumn !== columnIndex) {
          setActiveColumn(columnIndex);
        }
      })
      .runOnJS(true)
  );

  return (
    <ScrollView>
      <GestureDetector gesture={gesture.current}>
        <PlanColumns
          plannerHours={plannerHours}
          initialColumnsPositionX={initialColumnsPositionX}
          width={width}
          activeColumn={activeColumn}
        />
      </GestureDetector>
      {plannerHours.map((hour: THour, index: number) => {
        const hasHorizontal = horizontalPlans.find(
          (horizontal) =>
            horizontal.to > hour.hour && horizontal.from <= hour.hour
        );
        return (
          <View
            key={index}
            style={styles.columns}
            ref={(el) => (refs.current[index] = el)}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
            }}
          >
            <View
              style={styles.horizontalLine}
              onLayout={(event) => {
                const positionX = event.nativeEvent.layout.x;

                setInitialColumnsPositionX(positionX);
              }}
            />
            <Hour hour={hour.hour} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  columns: {
    height: COLUMN_HEIGHT,
    position: "relative",
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: "#232323",
    width: "90%",
  },
  hour: {
    width: 40,
    textAlign: "center",
  },
  hourAndLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  horizontalLine: {
    position: "absolute",
    left: 48,
    height: "100%",
    width: 1,
    backgroundColor: "#232323",
  },
  boxContainer: {
    position: "absolute",
  },
  box: {
    borderRadius: 6,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  horizontal: {
    position: "absolute",
    zIndex: 999,
    borderRadius: 6,
    paddingLeft: 6,
  },
});

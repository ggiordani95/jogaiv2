import { View, StyleSheet, useWindowDimensions } from "react-native";
import { ThemedText } from "./ThemedText";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useRef } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

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

export const SchedulePlanner = () => {
  const refs = useRef<(View | null)[]>([]);

  const { plannerHours, horizontalPlans } = usePlannerHandler();

  const [initialColumnsPositionX, setInitialColumnsPositionX] = useState(0);

  const width = useWindowDimensions().width;

  const hasHorizontalElementWidth = width / 3 - initialColumnsPositionX + 20;

  //   useLayoutEffect(() => {
  //     let isToReturn = null;
  //     for (let i = horizontalPlans[0].from; i < horizontalPlans[0].to; i++) {
  //       if (!refs.current[i]) {
  //         isToReturn = true;
  //         break;
  //       }
  //       refs.current[i]?.measure((x, y, width, height, pageX, pageY) => {
  //         // console.log(`Altura do elemento refs.current[${i}]:`, height);
  //         // console.log("Outras dimensões:", { x, y, width, pageX, pageY });
  //         setHorizontalStyling({ ...horizontalStyling, [i]: pageY });
  //       });
  //     }
  //     if (isToReturn) return;
  //   }, [refs, horizontalPlans]);

  const initialIndex = 6;

  return (
    <ScrollView>
      {horizontalPlans.map((horizontal, index) => {
        const from = horizontal.from;
        const to = horizontal.to;
        return (
          <View
            key={index}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              //   console.log("Altura do elemento:", layout.height);
            }}
            style={[
              {
                height: (to - from) * COLUMN_HEIGHT - 3,
                width: hasHorizontalElementWidth,
                backgroundColor: horizontal.color,
                top: (from - initialIndex) * COLUMN_HEIGHT + 11,
                left: initialColumnsPositionX,
              },
              styles.horizontal,
            ]}
          >
            <ThemedText>{horizontal.title}</ThemedText>
          </View>
        );
      })}
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

            {hour?.plan?.length > 1 && (
              <View style={styles.boxContainer}>
                {hasHorizontal && (
                  <View
                    style={{
                      width: hasHorizontalElementWidth,
                      height: 40,
                      marginRight: 3,
                    }}
                  />
                )}

                <View
                  style={{
                    height: COLUMN_HEIGHT,
                    flex: 1,
                  }}
                >
                  {hour.plan.map((planGroup, groupIndex) => {
                    return (
                      <View
                        style={{ flex: 1, flexDirection: "column" }}
                        key={groupIndex}
                      >
                        <PlanGroup
                          planGroup={planGroup}
                          groupIndex={groupIndex}
                          hasHorizontal={!!hasHorizontal}
                          initialColumnsPositionX={initialColumnsPositionX}
                        />
                      </View>
                    );
                  })}
                </View>
              </View>
            )}
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
    height: "100%",
    width: "100%",
    marginTop: "3%",
    left: 50,
    display: "flex",
    flexDirection: "row",
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

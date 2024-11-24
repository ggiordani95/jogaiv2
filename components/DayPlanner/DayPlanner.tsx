import { useState } from "react";
import {
  ColorValue,
  Text,
  useWindowDimensions,
  View,
  ViewProps,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const PADDINGTOP = 60;

type TaskType = {
  x: number;
  y: number;
  id: string;
  desc: string;
  bg: ColorValue;
};

const tasks: TaskType[] = [
  {
    x: 20,
    y: 60,
    id: "1",
    desc: "Reunião 1",
    bg: "#00ff00",
  },
];

const columns = [
  {
    id: 1,
    hour: "08",
  },
  {
    id: 2,
    hour: "09",
  },
  {
    id: 3,
    hour: "10",
  },
  {
    id: 4,
    hour: "11",
  },
  {
    id: 5,
    hour: "12",
  },
  {
    id: 6,
    hour: "13",
  },
];

const COLUMN_HEIGHT = 72;
const TASK_HEIGHT = 33;
const MARGIN_HORIZONTAL = 24;
const MAIN_COLOR = "#7979ff";
export const DayPlanner = () => {
  const { width } = useWindowDimensions();
  const [isDragging, setIsDragging] = useState(false);
  const [dragLayout, setDragLayout] = useState(
    tasks.map((item) => ({ x: item.x, y: item.y, width: 0 }))
  );

  const translationValueX = tasks.map(() => useSharedValue(MARGIN_HORIZONTAL));
  const translationValueY = tasks.map(() => useSharedValue(10));

  const columnActive = useSharedValue<number | null>(0);

  const handleColumn = (
    event: GestureUpdateEvent<PanGestureHandlerEventPayload>
  ) => {
    const hoveredColumn = Math.round(
      (dragLayout[0].y + event.translationY - PADDINGTOP + TASK_HEIGHT) /
        COLUMN_HEIGHT
    );

    columnActive.value =
      hoveredColumn >= 0 && hoveredColumn < columns.length
        ? hoveredColumn
        : null;
    return columnActive.value;
  };

  const returnToInitialPosition = (index: number) => {
    translationValueX[index].value = withSpring(20);
    translationValueY[index].value = withSpring(dragLayout[index].y);
    setDragLayout((prev) => {
      const newLayout = [...prev];
      newLayout[index] = {
        x: 20,
        y: dragLayout[index].y,
        width: newLayout[index].width,
      };
      return newLayout;
    });
  };
  const setPosition = (index: number, dropY: number) => {
    translationValueX[index].value = withSpring(20);
    translationValueY[index].value = withSpring(dragLayout[index].y);
    setDragLayout((prev) => {
      const newLayout = [...prev];
      newLayout[index] = {
        x: 20,
        y: dropY,
        width: newLayout[index].width,
      };
      return newLayout;
    });
  };

  const createPanGestureHandler = (index: number) => {
    return Gesture.Pan()
      .runOnJS(true)
      .onStart(() => {
        translationValueX[index].value = dragLayout[index].x;
        translationValueY[index].value = dragLayout[index].y;
      })
      .onUpdate((event) => {
        if (!isDragging) setIsDragging(true);
        handleColumn(event);

        translationValueX[index].value =
          dragLayout[index].x + event.translationX;
        translationValueY[index].value =
          dragLayout[index].y + event.translationY;
      })
      .onEnd((event) => {
        const gestureIsMinorThanMargin =
          event.translationX + dragLayout[index].x <= MARGIN_HORIZONTAL;
        const gestureIsGreaterThanMargin =
          event.translationX + dragLayout[index].x >=
          width - MARGIN_HORIZONTAL - dragLayout[index].width;
        const setMinMarginLeft = MARGIN_HORIZONTAL;
        const setMinMarginRight = width - dragLayout[index].width;

        const defaultMargin = gestureIsMinorThanMargin
          ? setMinMarginLeft
          : gestureIsGreaterThanMargin
          ? setMinMarginRight
          : null;

        const dropX = defaultMargin ?? event.translationX + dragLayout[index].x;

        const dropY = event.translationY + dragLayout[index].y;

        const columnIndex = handleColumn(event);
        if (columnIndex === null) return returnToInitialPosition(index);
        setPosition(index, dropY);
        translationValueX[index].value = withSpring(20, {
          damping: 10,
          stiffness: 20,
        });
        translationValueY[index].value = withSpring(
          columnIndex * COLUMN_HEIGHT + TASK_HEIGHT / 1.5,
          { damping: 10, stiffness: 20 }
        );

        setIsDragging(false);
      });
  };

  const panGestureHandler = tasks.map((_, index) =>
    createPanGestureHandler(index)
  );

  const animatedStyles = (index: number) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: translationValueX[index].value },
          { translateY: translationValueY[index].value },
        ],
        zIndex: isDragging ? 999 : 5,
      };
    });

  const columnStyle = (index: number) =>
    useAnimatedStyle(() => {
      return {
        borderWidth: columnActive.value == index && isDragging ? 0 : 0,
        borderColor: MAIN_COLOR,
        borderStyle: "dotted",
        backgroundColor:
          columnActive.value == index && isDragging
            ? MAIN_COLOR
            : "transparent",
      };
    });
  const hourScale = columns.map(() => useSharedValue(1));

  const hourStyle = (index: number) =>
    useAnimatedStyle(() => {
      const isActive = columnActive.value == index && isDragging;
      return {
        transform: [
          {
            scale: isActive ? hourScale[index].value : 1,
          },
        ],
        bottom: isActive ? 24 : isDragging ? 0 : 9,
        color: isActive ? MAIN_COLOR : "white",
      };
    });
  const hourBorderStyle = (index: number) =>
    useAnimatedStyle(() => {
      return {
        borderWidth: columnActive.value == index && isDragging ? 0 : 1,
      };
    });

  useDerivedValue(() => {
    "worklet";
    hourScale.forEach((scale, index) => {
      index == columnActive.value
        ? (hourScale[index].value = withTiming(1.2, { duration: 120 }))
        : (scale.value = 1);
    });
  }, [columnActive]);

  return (
    <View style={{ height: "100%", width: "100%", paddingTop: PADDINGTOP }}>
      {tasks.map((item, index) => {
        return (
          <GestureDetector key={index} gesture={panGestureHandler[index]}>
            <Animated.View
              style={[
                animatedStyles(index),
                {
                  backgroundColor: item.bg,
                  height: TASK_HEIGHT,
                  width: 160,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
              onLayout={(event) => {
                setDragLayout((prev) => {
                  const newLayout = [...prev];
                  newLayout[index] = {
                    y: event.nativeEvent.layout.y,
                    x: event.nativeEvent.layout.x,
                    width: event.nativeEvent.layout.width,
                  };
                  return newLayout;
                });
              }}
            >
              <Text>{item.desc}</Text>
            </Animated.View>
          </GestureDetector>
        );
      })}
      {columns.map((column, index) => {
        return (
          <Animated.View
            key={index}
            style={[
              {
                position: "absolute",
                width: "100%",
                height: COLUMN_HEIGHT,
                flexDirection: "row",
                zIndex: 0,
                gap: 4,
                transform: [
                  { translateY: index * COLUMN_HEIGHT + PADDINGTOP },
                  { translateX: 0 },
                ],
              },
              columnStyle(index),
            ]}
          >
            <Animated.Text
              style={[
                {
                  color: "white",
                  position: "relative",
                  minHeight: 20,
                  bottom: 9,
                },
                hourStyle(index),
              ]}
            >
              {column.hour}
            </Animated.Text>
            <Animated.View
              style={[
                {
                  height: 0,
                  width: "100%",
                  borderColor: "#262626",
                  borderWidth: 1,
                  position: "relative",
                },
                hourBorderStyle(index),
              ]}
            ></Animated.View>
          </Animated.View>
        );
      })}
    </View>
  );
};

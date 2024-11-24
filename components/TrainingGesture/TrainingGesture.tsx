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
  useSharedValue,
  withSpring,
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
    x: 0,
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
];

const COLUMN_HEIGHT = 72;
const TASK_HEIGHT = 33;
const MARGIN_HORIZONTAL = 24;

export const TrainingGesture = () => {
  const { width } = useWindowDimensions();
  const [isDragging, setIsDragging] = useState(false);
  const [dragLayout, setDragLayout] = useState(
    tasks.map((item) => ({ x: item.x, y: item.y, width: 0 }))
  );

  const translationValueX = tasks.map(() => useSharedValue(0));
  const translationValueY = tasks.map(() => useSharedValue(0));

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
          damping: 30,
          stiffness: 60,
        });
        translationValueY[index].value = withSpring(
          columnIndex * COLUMN_HEIGHT + TASK_HEIGHT / 1.5,
          { damping: 30, stiffness: 60 }
        );

        setIsDragging(false);
      });
  };

  const panGestureHandler = tasks.map((_, index) =>
    createPanGestureHandler(index)
  );

  // const gesture = Gesture.Pan()
  //   .runOnJS(true)
  //   .onStart((e) => {
  //     x.value = dragLayout.x;
  //     y.value = dragLayout.y;
  //   })
  //   .onUpdate((e) => {
  //     console.log(
  //       dragLayout.x,
  //       dropzoneLayout.height,
  //       PADDINGTOP,
  //       imageLayout.height
  //     );
  //     x.value = e.translationX + dragLayout.x;
  //     y.value = e.translationY + dragLayout.y;
  //   })
  //   .onEnd((e) => {
  //     if (
  //       imageLayout &&
  //       e.translationY +
  //         dragLayout.y +
  //         dropzoneLayout.height -
  //         imageLayout.height >=
  //         dropzoneLayout.y &&
  //       e.translationX + dragLayout.x >= dropzoneLayout.x
  //     ) {
  //       const dropW = dropzoneLayout.width;
  //       const dropH = dropzoneLayout.height;
  //       const dragH = imageLayout.height;
  //       const dragW = imageLayout.width;
  //       const finalY = elementY.current - dragH;
  //       const finalX = elementX.current + dropW / 2 - dragW / 2;
  //       x.value = withSpring(finalX);
  //       y.value = withSpring(finalY);
  //       setDragLayout({ ...dragLayout, x: finalX, y: finalY });
  //     } else {
  //       x.value = withSpring(0);
  //       y.value = withSpring(0);
  //       setDragLayout({ ...dragLayout, x: 20, y: 40 });
  //     }
  //   });

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
        backgroundColor: columnActive.value == index ? "#262626" : "#131313",
      };
    });

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
            <Text
              style={{
                color: "white",
                position: "relative",
                minHeight: 20,
                bottom: 9,
              }}
            >
              {column.hour}
            </Text>
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "white",
                position: "relative",
              }}
            ></View>
          </Animated.View>
        );
      })}
    </View>
  );
};

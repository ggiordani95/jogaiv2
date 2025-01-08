import LottieComponent from "@/components/LottieComponent";
import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { useWindowDimensions } from "react-native";
import Location from "@/assets/lotties/Location.json";
import useExpoLocation from "@/hooks/useExpoLocation";

export const TemplateOne = ({
  l1,
  l2,
  title,
  masterword,
  lottie,
}: {
  l1: string;
  l2: string;
  masterword: string;
  title: string;
  lottie: any;
}) => {
  const width = useWindowDimensions().width;
  return (
    <View
      style={{
        width,
        height: "100%",
        paddingHorizontal: 24,
      }}
      mt={"xl"}
    >
      <LottieComponent source={lottie} />
      <Text
        preset={"h2"}
        color={"primary"}
        text={title}
        family="primaryRegular"
      />
      <View mt={"lg"} style={{ maxWidth: 240 }}>
        <View preset="rowStart">
          <Text
            preset={"h5"}
            color={masterword === "agendamento" ? "success" : "info"}
            text={masterword}
            family="primaryRegular"
          />
        </View>
        <Text
          preset={"h5"}
          color={"secondary"}
          text={l2}
          family="primaryRegular"
        />
      </View>
    </View>
  );
};

export const CityOnBoarding = () => {
  const width = useWindowDimensions().width;

  return (
    <View
      style={{
        width,
        height: "100%",
        paddingHorizontal: 24,
      }}
      mt={"xl"}
    >
      <LottieComponent source={Location} />

      <Text
        preset={"h2"}
        color={"primary"}
        text={"Escolher cidade"}
        family="primaryRegular"
      />
      <View mt={"lg"} style={{ maxWidth: 240 }}>
        <View preset="rowStart">
          <Text
            preset={"h5"}
            color={"main"}
            text={"escolha uma cidade para continuar"}
            family="primaryRegular"
          />
          <Text
            preset={"h5"}
            color={"secondary"}
            text={"e visualize as melhores arenas da região selecionada"}
            family="primaryRegular"
          />
        </View>
      </View>
    </View>
  );
};

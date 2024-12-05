import React from "react";
import { View, Text, Image } from "react-native";
import { ArenaType } from "./arena.store";
import LocationIcon from "@/components/icons/location.icon";
import CustomText from "@/components/customs/text/custom.text";
import ClockIcon from "@/components/icons/clock.icon";
import ArrowDropDown from "@/components/icons/arrow-dropdown.icon";

const ArenaInfo = ({ store }: { store: ArenaType }) => {
  return (
    <View className="flex pl-6 gap-9">
      <View className="flex flex-row gap-4">
        <ArenaInfo.Logo
          source={{
            uri: store.logo_url,
          }}
        />
        <ArenaInfo.Title text={store.display_name} />
      </View>
      <ArenaInfo.Address icon={false} />
      <ArenaInfo.Line />
      <ArenaInfo.Hours hasLabel={false} />
      <ArenaInfo.Line />
      <ArenaInfo.Contact />
      <ArenaInfo.Line />
    </View>
  );
};

ArenaInfo.Logo = ({ source, ...props }: { source: { uri: string } }) => {
  return (
    <Image
      style={{
        width: 30,
        height: 30,
      }}
      source={source}
      {...props}
    />
  );
};

ArenaInfo.Title = ({ text, ...props }: { text: string }) => {
  return (
    <Text
      className="text-4xl text-white"
      style={{ fontFamily: "NetflixSansLight" }}
      {...props}
    >
      {text}
    </Text>
  );
};

ArenaInfo.Address = ({ icon }: { icon: boolean }) => {
  return (
    <View className="flex flex-row justify-between items-center pr-6">
      <View className="flex flex-row items-center gap-6">
        {icon && (
          <View className="w-3 flex flex-row items-center justify-center">
            <LocationIcon color={"#8689FF"} />
          </View>
        )}
        <View className="flex flex-col gap-1">
          <CustomText
            text="Rua Domingos Chies, 1186"
            fontWeight="Medium"
            color={"Primary"}
            size="Small"
          />
          <CustomText
            text="Caxias do Sul - RS"
            fontWeight="Medium"
            color={"Secondary"}
            size="Small"
          />
        </View>
      </View>
      <CustomText
        text="Ver mais"
        fontWeight="Medium"
        color={"Theme"}
        size="Small"
      />
    </View>
  );
};

ArenaInfo.Hours = ({ hasLabel }: { hasLabel: boolean }) => {
  return (
    <View className="flex flex-col justify-between gap-9 pr-6 my-1">
      {hasLabel && (
        <View className="flex flex-row items-center gap-6">
          <View className="w-3 flex flex-row items-center justify-center">
            <ClockIcon />
          </View>
          <CustomText
            text="Horários de Funcionamento"
            fontWeight="Medium"
            color={"Primary"}
            size="Small"
          />
        </View>
      )}
      <View className="flex flex-row gap-3 items-center">
        <View
          className="p-3 px-4 rounded-2xl justify-center items-center"
          style={{ backgroundColor: "#3A4828" }}
        >
          <CustomText
            text="Aberto"
            fontWeight="Medium"
            color={"Primary"}
            size="Small"
            style={{ opacity: 0.8, color: "#C5FF74" }}
          />
        </View>
        <CustomText
          text="13:00 - 23:00"
          fontWeight="Medium"
          color={"Primary"}
          size="Small"
        />
        <ArrowDropDown />
      </View>
    </View>
  );
};

ArenaInfo.Contact = () => {
  return (
    <View className="flex flex-row justify-between items-center pr-6">
      <View className="flex flex-col gap-6">
        <CustomText
          text="Telefone"
          fontWeight="Medium"
          color={"Primary"}
          size="Small"
        />
        <View className="bg-zinc-900 p-2 px-3 rounded-2xl">
          <CustomText
            text="(54) 99999-9999"
            fontWeight="Medium"
            color={"Primary"}
            size="Small"
          />
        </View>
      </View>
      <View className="flex flex-col gap-6">
        <CustomText
          text="Whatsapp"
          fontWeight="Medium"
          color={"Primary"}
          size="Small"
        />
        <View className="bg-zinc-900 p-2 px-3 rounded-2xl">
          <CustomText
            text="(54) 99999-9999"
            fontWeight="Medium"
            color={"Primary"}
            size="Small"
          />
        </View>
      </View>
    </View>
  );
};

ArenaInfo.Line = () => {
  return <View className="bg-[#313131] h-[1px] flex-1 mr-6" />;
};

export default ArenaInfo;

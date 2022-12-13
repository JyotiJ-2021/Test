import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = (
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
) => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-10 w-full z-50 ">
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Basket", {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
          })
        }
        className="mx-5 p-4 rounded-lg flex-row items-center space-x-1 bg-[#00ccbb]"
      >
        <Text className="text-white font-extrabold text-lg py-1 px-2 bg-[#01a296]">
          1
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {/* {basketTotal} */}
          2000
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;

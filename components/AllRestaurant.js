import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const AllRestaurantCard = ({
  id,
  imgUrl,
  genre,
  title,
  rating,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white border-[#00ccbb] shadow border-b-4 mb-2"
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          genre,
          title,
          rating,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-40 w-full rounded-sm "
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" size={22} opacity={0.5} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">
              {rating} . {genre}
            </Text>
          </Text>
        </View>
        <View className="flex-row  items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AllRestaurantCard;

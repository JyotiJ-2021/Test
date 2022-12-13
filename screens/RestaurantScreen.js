import { ScrollView, View, Image, TouchableOpacity, Text } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  } = useRoute();

  return (
    <>
      <BasketIcon
        id={id}
        imgUrl={imgUrl}
        genre={genre}
        title={title}
        rating={rating}
        address={address}
        short_description={short_description}
        dishes={dishes}
        long={long}
        lat={lat}
      />
      <ScrollView>
        <View>
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className=" w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-5 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row item-center space-x-1">
                <StarIcon color="green" size={20} opacity={0.5} />
                <Text className="text-sm text-gray-500">
                  <Text className="text-green-500">
                    {rating} . {genre}
                  </Text>
                </Text>
              </View>
              <View className="flex-row item-center space-x-1">
                <LocationMarkerIcon color="gray" size={20} opacity={0.5} />
                <Text className="text-xs text-gray-500">{address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.5} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 mb-1 font-bold text-xl ">Menu</Text>
          {dishes.map((dish, i) => {
            return (
              <DishRow
                key={i}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;

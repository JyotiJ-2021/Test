import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";
import { useNavigation } from "@react-navigation/native";

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="featured" && _id==$id]{
      ...,
      restaurant[]->{
        ...,
        dishes[]->,
        type->{
            name
        }
      },
    }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data));
  }, []);
  return (
    <View>
      <View className="mt-4 flex-row flex-1 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Featured", { title })}
        >
          <ArrowRightIcon color="#00ccbb" className="items-right" />
        </TouchableOpacity>
      </View>
      <Text className="text-xs px-4 text-gray-500 pb-5 pt-1 ">
        {description}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        // className="px-4"
      >
        {restaurants.restaurant?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              genre={restaurant.type?.name}
              title={restaurant.name}
              rating={restaurant.rating}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

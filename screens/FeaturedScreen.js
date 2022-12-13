import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowNarrowLeftIcon } from "react-native-heroicons/outline";
import clientSanity from "../sanity";
import AllRestaurantCard from "../components/AllRestaurant";

const FeaturedScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const {
    params: { title },
  } = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    clientSanity
      .fetch(
        `*[_type=="featured" && name==$title]{
                ...,
                restaurant[]->{
                  ...,
                  dish[]->,
                  type->{
                      name
                  }
                },
              }`,
        { title }
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <View>
      <View className="mt-4 mb-4 h-14 flex-row flex-1 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <TouchableOpacity onPress={navigation.goBack}>
          <ArrowNarrowLeftIcon color="#00ccbb" className="items-right" />
        </TouchableOpacity>
      </View>

      <ScrollView
        //horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 96,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {featuredCategories?.map((res) => {
          return res.restaurant.map((restaurant) => {
            return (
              <AllRestaurantCard
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
          });
        })}
        {/* <View className="pb-36"></View> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedScreen;

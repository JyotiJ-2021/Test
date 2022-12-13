import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ id, imgUrl, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CategoryList", {
          id,
          title,
          imgUrl,
        })
      }
    >
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded mr-2" />
      <Text className="absolute bottom-1 left-2 font-bold text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

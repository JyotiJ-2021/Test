import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [count, setCount] = useState(1);

  const addItemToBasket = () => {
    setCount(count + 1);
  };

  const removeItemFromBasket = () => {
    if (count < 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 or-2">
            <Text className="text-lg-mb-1">{name}</Text>
            <Text className="text-gray-400 mr-2">{description}</Text>
            <Text className="text-gray-400 mt-2">$ {price}</Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 p-4 bg-gray-300 mt-5"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon size={30} color="#00ccbb" />
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={30} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;

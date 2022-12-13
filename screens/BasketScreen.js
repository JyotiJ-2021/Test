import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/outline";
import { useRoute } from "@react-navigation/native";

const BasketScreen = () => {
  const navigation = useNavigation();

  const {
    params: { imgUrl, title, genre },
  } = useRoute();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{title}</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 my-5 bg-white">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-all"
          />
          <Text className="flex-1"> Deliver in 50-60 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          <View className="flex-row items-center space-x-2 bg-white py-2 px-5">
            <Text className="text-[#00ccbb]">1 x</Text>
            <Image
              source={require(imgUrl)}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">{genre}</Text>
            <Text className="text-gray-600">price</Text>

            <TouchableOpacity>
              <Text className="text-[#00ccbb]">Remove</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400"> Subtotal</Text>
            <Text className="text-gray-400">price</Text>
          </View>
        </View>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Deliver Fee</Text>
            <Text className="text-gray-400">fee</Text>
          </View>
        </View>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text> Order Total</Text>
            <Text className="font-extrabold">price</Text>
          </View>
        </View>
        <TouchableOpacity
          className="rounded-lg bg-[#00ccbb] p-4 m-4"
          onPress={() => navigation.navigate("PreparingOrder")}
        >
          <Text className="text-center text-white text-lg font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

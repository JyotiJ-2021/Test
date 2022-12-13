import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import { XIcon } from "react-native-heroicons/outline";
const DeliveryScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#00ccbb] flex-1 ">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View className="">
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at KFC is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: 32.522499,
          longitude: -117.046623,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 z-0 -mt-10"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: 32.522499, longitude: -117.046623 }}
          title={"Subway"}
          description={"Awesome restaurant"}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 p-4 bg-gray-300 ml-5 rounded-full"
        />
        <View className="">
          <Text className="text-lg">Joy</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="text-[#00ccbb] items-right text-lg font-bold mr-5">
          Call
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

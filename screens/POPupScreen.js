import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { BottomSheet } from "react-native-btr";
import { LocationMarkerIcon } from "react-native-heroicons/outline";

const PopUpScreen = ({ handlePopup }) => {
  return (
    <BottomSheet
      visible={true}
      onBackButtonPress={handlePopup}
      onBackdropPress={handlePopup}
    >
      <View className="bg-white h-64 p-5">
        <View className="flex-1 ">
          <Text className="text-lg font-bold">Your Location</Text>
          <View className="flex-row justify-between mt-5">
            <LocationMarkerIcon color="grey" />
            <Text className="-ml-20">Selected Location</Text>
            <Text className="text-[#00ccbb]">Change</Text>
          </View>
        </View>
        <View className="flex-1 ">
          <Text className="text-lg font-bold">Arrival Time</Text>
          <View className="flex-row mt-5">
            <LocationMarkerIcon color="grey" />
            <Text className="ml-5">No times for this address</Text>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

export default PopUpScreen;

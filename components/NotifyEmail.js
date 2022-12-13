import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const NotifyEmail = ({ handleOpen }) => {
  return (
    <SafeAreaView>
      <View className="flex-1">
        <View className="flex-row p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <TouchableOpacity
            onPress={() => handleOpen()}
            className="rounded-full  absolute top-5 left-4 "
          >
            <ArrowLeftIcon color="#00ccbb" height={30} width={30} />
          </TouchableOpacity>
          <Text className="font-bold text-lg ml-10">Notify me</Text>
        </View>
      </View>

      <View className="">
        <TextInput
          className="ml-5 pt-5 border-b border-[#00ccbb]"
          placeholder="E.g.name@example.com"
        />
        <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-3  m-4 mt-10hh">
          <Text className="text-center text-white text-lg font-bold">
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NotifyEmail;

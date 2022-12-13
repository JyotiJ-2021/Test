import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { ArrowLeftIcon, XIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [textS, setText] = useState("");

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="flex-1 bg-white ">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <TextInput
              style={{ marginLeft: 45 }}
              placeholder="Restaurants and Dishes"
              keyboardType="default"
              onPressIn={(e) => setText(e.target.value)}
            />
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full  absolute top-5 left-6 "
          >
            <ArrowLeftIcon color="#00ccbb" height={30} width={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full  absolute top-5 right-6 "
          >
            <XIcon color="#00ccbb" height={30} width={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="items-center justify-center">
        <View className="text-center  items-center justify-center">
          <View className="rounded-full m-5">
            <Image
              source={require("../assets/search-find.png")}
              style={{ height: 100, width: 100 }}
              className="rounded-full p-20 z-5"
            />
          </View>
          <Text className="text-lg text-gray-600 text-center ">
            We couldn't anything for text{textS}
            {"\n"}
            <Text className="text-md text-gray-300">
              Try a different search
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

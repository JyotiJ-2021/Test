import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 ">
      <View className="bg-[#00ccbb] ">
        <View>
          <View className="h-9 w-9 mt-5 m-5 p-2">
            {/* <TouchableOpacity
              className="h-9 w-9 mt-5  bg-white rounded-full m-5 p-2"
              onPress={navigation.goBack}
            >
              <ArrowLeftIcon color="#00ccbb" size={20} />
            </TouchableOpacity> */}
          </View>

          <View className="justify-center items-center p-5">
            <Image
              source={require("../assets/res-logo.png")}
              className="h-12
           w-12 bg-gray-300 rounded-full"
            />

            <Text className="text-white text-lg mt-5">Welcome to Foodies</Text>

            <Text className="text-white text-lg mt-5">
              Your favourite restaurants, shops and supermarkets delivered to
              your door.
            </Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity className="flex-row justify-between rounded-lg bg-white p-4  m-2 mt-5">
          <Text
            className=" text-md"
            onPress={() => navigation.navigate("Home")}
          >
            Continue with Google
          </Text>
          <Image source={require("../assets/google.gif")} className="h-5 w-5" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity className="flex-row justify-between rounded-lg bg-white p-4  m-2 mt-5h">
          <Text
            className=" text-md"
            onPress={() => navigation.navigate("Home")}
          >
            Continue with Facebook
          </Text>
          <Image source={require("../assets/fb.gif")} className="h-5 w-5" />
        </TouchableOpacity>
      </View>

      <View className="items-center justify-center mt-2">
        <Text className=" text-lg text-grey ">or</Text>
      </View>
      <View>
        <TouchableOpacity className="flex-row justify-between  rounded-lg bg-white p-4  m-2 mt-5h">
          <Text
            className=" text-md"
            onPress={() => navigation.navigate("Home")}
          >
            Continue with Email
          </Text>
          <Image source={require("../assets/gmail.gif")} className="h-5 w-5" />
        </TouchableOpacity>
      </View>
      <View className="m-5">
        <Text className="text-gray-500 leading-loose">
          By continuing you agree to our
          <Text className="text-[#00ccbb] "> T&Cs</Text>. Please also check out
          our <Text className="text-[#00ccbb] ">Privacy Policy</Text>.
        </Text>
      </View>
      <View className="m-5 mt-0">
        <Text className="text-gray-500 leading-loose">
          We use your data to offer you a personalised experience and to better
          understand and improve our services. For more information{" "}
          <Text className="text-[#00ccbb] ">see here </Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

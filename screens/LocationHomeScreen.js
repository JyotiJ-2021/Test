import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import NotifyEmail from "../components/NotifyEmail";

const LocationHomeScreen = () => {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [openNotify, setOpenNotify] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); //it load ui

  const toggleModal = (visible) => {
    setOpenModal(visible);
  };

  const handleNotify = () => {
    setOpenNotify(!openNotify);
  };
  return (
    <SafeAreaView className="bg-white pt-5">
      <StatusBar animated={true} backgroundColor="#00ccbb" />
      {/**Header */}
      <View className="flex-row  pb-3 items-center mx-4 space-x-2 px-0">
        <TouchableOpacity className="flex-1" onPress={() => toggleModal(true)}>
          <View className="flex-row space-x-2">
            <Image
              source={{ uri: "https://links.papareact.com/wru" }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-xs">
                Deliver Now!
              </Text>
              <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20} color="#00ccbb" />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row"
          onPress={() => navigation.navigate("Welcome")}
        >
          <UserIcon size={35} color="#00ccbb" />
        </TouchableOpacity>
      </View>
      {/**Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-0">
        <View className="flex-row flex-1 space-x-2 p-2  bg-gray-200">
          <TouchableOpacity
            className="flex-row"
            onPress={() => navigation.navigate("Search")}
          >
            <SearchIcon color="gray" size={20} />
            <TextInput
              style={{ marginTop: -5 }}
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
          <AdjustmentsIcon color="#00ccbb" />
        </TouchableOpacity>
      </View>
      {/**body */}
      <View className="text-center bg-gray-100  items-center justify-center">
        <Image
          source={require("../assets/delivery-man.webp")}
          className="h-40 m-10 w-40 bg-gray-300 mb-0 rounded-full"
        />
        <Text className="text-center pb-40 m-10 mt-2">
          <Text className="text-lg font-bold mb-5">👋 We're not there yet</Text>
          {"\n"}
          <Text className="text-gray-400 pt-20">
            But we are working on it! We can send you an email when we get
            there.
          </Text>
        </Text>
      </View>
      <View className="bg-gray-100">
        <TouchableOpacity
          onPress={() => handleNotify()}
          className="rounded-lg bg-[#00ccbb] p-3  m-4"
        >
          <Text className="text-center text-white text-lg font-bold">
            Email Me
          </Text>
        </TouchableOpacity>
      </View>
      {openNotify && (
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={openNotify}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
          className="pt-50"
        >
          <NotifyEmail handleOpen={() => handleNotify()} />
        </Modal>
      )}
      {openModal && (
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={openModal}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
          className="pt-50"
        >
          <View className="flex-3 h-50 mt-50">
            <Text onPress={() => toggleModal(false)}>jjhjhj</Text>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default LocationHomeScreen;

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ListViewComponent,
  FlatList,
} from "react-native";
import React from "react";
import {
  ArrowLeftIcon,
  SwitchVerticalIcon,
  XCircleIcon,
  XIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { CheckCircleIcon } from "react-native-heroicons/solid";

const FilterScreen = () => {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = (visible) => {
    setOpenModal(visible);
  };

  const DATA = [
    {
      id: "12",
      title: "Distance",
    },
    {
      id: "123",
      title: "Quickest Delivery",
    },
    {
      id: "1234",
      title: "Recommended",
    },
    {
      id: "12345",
      title: "Top Rated",
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View key={item.id} className="flex-row justify-between mt-3 mb-3">
        <Text className="text-md ">{item.title}</Text>
        {item.title === "Recommended" ? (
          <CheckCircleIcon color="#00ccbb" />
        ) : null}
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View className="flex-1 bg-gray-100 ">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Filters</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full  absolute top-5 left-6 "
          >
            <XIcon color="#00ccbb" height={30} width={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center space-x-4 px-4 py-3 my-10 bg-white">
        <TouchableOpacity
          className="flex-row"
          onPress={() => toggleModal(true)}
        >
          <View className="flex-row">
            <SwitchVerticalIcon
              color="gray"
              height={25}
              width={25}
              className="mt-4"
            />
            <Text className="ml-4">
              <Text className="text-lg font-bold">Sort</Text>
              {"\n"}
              <Text className="text-md text-gray-400">Recomended</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-96">
        <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-3  m-4">
          <Text className="text-center text-white text-lg font-bold">Done</Text>
        </TouchableOpacity>
      </View>

      {openModal && (
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={openModal}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View className="bg-gray-100">
            <View className="flex-1 bg-gray-100 ">
              <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
                <View>
                  <Text className="text-lg font-bold text-center">Sort</Text>
                </View>

                <TouchableOpacity
                  onPress={navigation.goBack}
                  className="rounded-full  absolute top-5 left-6 "
                >
                  <ArrowLeftIcon color="#00ccbb" height={30} width={30} />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row items-center space-x-4 px-4 py-3 my-10 bg-white">
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-3  m-4">
              <Text className="text-center text-white text-lg font-bold">
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default FilterScreen;

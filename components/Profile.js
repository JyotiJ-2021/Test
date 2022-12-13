import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  CashIcon,
  HeartIcon,
  LocationMarkerIcon,
  LogoutIcon,
  MailIcon,
  PencilAltIcon,
  PhoneIcon,
  UserCircleIcon,
  UserGroupIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import { SupportIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Profile = ({ handleClose }) => {
  const navigation = useNavigation();
  return (
    <View className="m-4">
      <View className="flex-row space-x-4 mt-5">
        <UserCircleIcon color="#00ccbb" size={50} />
        <Text className="mt-4">User Name</Text>
      </View>
      <View className="flex-row space-x-4 mt-5">
        <LocationMarkerIcon color="#00ccbb" />
        <Text>Location</Text>
      </View>
      <View className="flex-row space-x-4 mt-5">
        <PhoneIcon color="#00ccbb" />
        <Text>1234567</Text>
      </View>
      <View className="flex-row space-x-4 mt-5">
        <MailIcon color="#00ccbb" />
        <Text>abc@gmail.com</Text>
      </View>
      <View className="flex-row space-x-4 mt-5">
        <HeartIcon color="#00ccbb" />
        <Text>Favourites</Text>
      </View>
      <View className="flex-row space-x-4 mt-5">
        <CashIcon color="#00ccbb" />
        <Text>Payment</Text>
      </View>
      <View className="flex-row space-x-4 mt-5">
        <UserGroupIcon color="#00ccbb" />
        <Text>Tell Your Friend</Text>
      </View>
      <View className="flex-row space-x-4 mt-5">
        <SupportIcon color="#00ccbb" />
        <Text>Support</Text>
      </View>
      <View className="flex-row space-x-4 mt-5">
        <PencilAltIcon color="#00ccbb" />
        <Text>Edit </Text>
      </View>
      <View className="flex-row space-x-4 mt-5">
        <TouchableOpacity
          className="flex-row"
          onPress={() => navigation.navigate("Welcome")}
        >
          <LogoutIcon color="#00ccbb" />
          <Text className="ml-5">Logout </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

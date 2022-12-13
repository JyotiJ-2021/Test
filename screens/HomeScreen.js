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
  StyleSheet,
  Button,
  DrawerLayoutAndroid,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import clientSanity from "../sanity";
import Profile from "../components/Profile";
import PopUpScreen from "./POPupScreen";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); //it load ui

  useEffect(() => {
    clientSanity
      .fetch(
        `*[_type=="featured"]{
                ...,
                restaurant[]->{
                  ...,
                  dish[]->,
                  type->{
                      name
                  }
                },
              }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []); //initial load only

  const toggleModal = (visible) => {
    setOpenModal(visible);
  };

  const navigationView = () => (
    <Profile handleClose={() => drawer.current.closeDrawer()} />
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <SafeAreaView className="bg-white pt-5">
        <StatusBar animated={true} backgroundColor="#00ccbb" />
        {/**Header */}
        <View className="flex-row  pb-3 items-center mx-4 space-x-2 px-0">
          <TouchableOpacity
            className="flex-1"
            onPress={toggleBottomNavigationView}
          >
            <View className="flex-row space-x-2">
              <Image
                source={require("../assets/res-logo.png")}
                className="h-10 w-10 bg-gray-300  rounded-full"
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
            onPress={() => drawer.current.openDrawer()}
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
                placeholder="Restaurants and Dishes"
                keyboardType="default"
                onPress={() => navigation.navigate("Search")}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
            <AdjustmentsIcon color="#00ccbb" />
          </TouchableOpacity>
        </View>
        {/**body */}

        <ScrollView
          className="bg-gray-100 "
          contentContainerStyle={{
            paddingBottom: 150,
            marginVertical: 20,
          }}
        >
          <Categories />
          {featuredCategories?.map((category) => {
            return (
              <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                description={category.short_description}
                featuredCategory="featured"
              />
            );
          })}
        </ScrollView>

        {visible && <PopUpScreen handlePopup={toggleBottomNavigationView} />}
      </SafeAreaView>
      <View className="flex-1 mx-4 ">
        <Text> Hello</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "#aaa",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

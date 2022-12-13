import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import sanityClient, { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "react-native-heroicons/outline";
import BasketIcon from "../components/BasketIcon";

const CategoryScreen = () => {
  const [categoryList, setCategoryList] = useState([]);
  const navigation = useNavigation();
  const {
    params: { id, title, imgUrl },
  } = useRoute();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="category" && _id==$id]
            {
                  list[]->{...}
                
                  }[0]`,
        { id }
      )
      .then((data) => setCategoryList(data));
  }, []);

  return (
    <SafeAreaView>
      {categoryList.list !== null &&
      categoryList.list !== undefined &&
      categoryList.list !== "" &&
      categoryList.list.length < 0 ? null : (
        <BasketIcon id={id} imgUrl={imgUrl} title={title} />
      )}

      <ScrollView>
        <View>
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className=" w-full h-56 bg-gray-300 p-4"
          />
          <Text className="-mt-9 font-[serif] relative text-white text-right pr-5 font-bold text-lg">
            {title}
          </Text>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-5 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00ccbb" />
          </TouchableOpacity>
        </View>

        <View className="bg-white mt-4">
          <View className="pb-4 pt-4 px-4 space-x-1 bg-[#bdbdbd] text-white">
            <Text className="text-white font-extrabold text-lg">
              Menu List
              <Text className="text-white font-normal text-sm"> ({title})</Text>
            </Text>
          </View>
          <View className="px-4 pt-2">
            {categoryList.list !== null &&
            categoryList.list !== undefined &&
            categoryList.list !== "" ? (
              categoryList.list.map((item, i) => {
                return (
                  <>
                    <View className="flex-row mt-5 mb-30" key={i}>
                      <View className="flex-1 or-2">
                        <Text className="text-lg-mb-1">{item.name}</Text>
                        <Text className="text-gray-400 mr-2">
                          {item.short_description}
                        </Text>
                        <Text className="text-gray-400 mt-2">
                          $ {item.price}
                        </Text>
                      </View>
                      <View>
                        <Image
                          source={{ uri: urlFor(item.image).url() }}
                          className="h-24 w-24 bg-gray-300 p-4 "
                        />
                      </View>
                    </View>
                    <View className="bg-white border-b-2 border-slate-300 mt-2">
                      <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity>
                          <MinusCircleIcon size={30} color="#00ccbb" />
                        </TouchableOpacity>
                        <Text>1</Text>
                        <TouchableOpacity>
                          <PlusCircleIcon size={30} color="#00ccbb" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </>
                );
              })
            ) : (
              <View className="flex-1 text-white-400">
                <View className="flex-1 or-2">
                  <Text className="text-gray-400 mr-2">
                    Currently not available {title} items!{"\n"} please check
                    for other dishes.
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;

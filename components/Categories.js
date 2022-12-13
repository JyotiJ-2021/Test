import { ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import santiyClient, { urlFor } from "../sanity";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    santiyClient
      .fetch(`*[_type=="category" ]`)
      .then((data) => setCategory(data));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
    >
      {category?.map((category, i) => {
        return (
          <CategoryCard
            key={i}
            id={category._id}
            imgUrl={urlFor(category.image).url()}
            title={category.name}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;

import { View, Text, FlatList, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "../Cards/ProductCard";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://easy-plum-caridea-tie.cyclic.app/api/product"
      );
      const data = await response.json();
      setProducts(data?.data);
      console.log(data?.data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  //   const products = [
  //     {
  //       id: 1,
  //       title: "Product 1",
  //       price: 19.99,
  //       image: "https://i.ibb.co/PCcKNT2/image-16726662281359227603.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "Product 2",
  //       price: 29.99,
  //       image: "https://i.ibb.co/PTgsFpF/jeans-denim-pants-clothing.webp",
  //     },
  //     {
  //       id: 1,
  //       title: "Product 1",
  //       price: 19.99,
  //       image: "https://i.ibb.co/PCcKNT2/image-16726662281359227603.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "Product 2",
  //       price: 29.99,
  //       image: "https://i.ibb.co/PTgsFpF/jeans-denim-pants-clothing.webp",
  //     },
  //     {
  //       id: 1,
  //       title: "Product 1",
  //       price: 19.99,
  //       image: "https://i.ibb.co/PCcKNT2/image-16726662281359227603.jpg",
  //     },
  //     {
  //       id: 2,
  //       title: "Product 2",
  //       price: 29.99,
  //       image: "https://i.ibb.co/PTgsFpF/jeans-denim-pants-clothing.webp",
  //     },

  //     // Add more products as needed
  //   ];
  return (
    <ScrollView>
      <View>
        {/* <Text onPress={() => navigation.navigate("Details")}>Details</Text> */}
        <View
          style={{
            width: Dimensions.get("window").width,
            display: "flex",
            justifyContent: "center",
            padding: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {products?.map((item) => (
            <ProductCard product={item} navigation={navigation} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

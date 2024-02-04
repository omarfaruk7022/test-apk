// ProductCard.js

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = ({ product, navigation }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text
          onPress={() => {
            navigation.navigate("Details", {
              item: product,
            });
          }}
          style={styles.title}
        >
          {product.name}
        </Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "40%",
    borderRadius: 8,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    color: "#777",
    fontSize: 14,
  },
});

export default ProductCard;

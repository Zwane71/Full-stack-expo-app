import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "@/assets/data/products";
import { useState } from "react";
import Button from "@/src/components/Button";

const ProductDetailsScreen = () => {
	const { id } = useLocalSearchParams();

	const product = products.find((p) => p.id.toString() === id);

	const addToCart = () => [console.warn("Adding to Cart size: ", selectedSize)];

	const sizes = ["S", "M", "L", "XL"];

	const [selectedSize, setSelectedSize] = useState("XL");

	if (!product) {
		return <Text>Product not Found </Text>;
	}

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: product?.name }} />
			<Image
				source={{
					uri:
						product.image ||
						"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png",
				}}
				style={styles.image}
				resizeMode='contain'
			/>
			<Text> Select Size</Text>
			<View style={styles.sizes}>
				{sizes.map((size) => (
					<Pressable
						onPress={() => {
							setSelectedSize(size);
						}}
						style={[
							styles.size,
							{
								backgroundColor: selectedSize === size ? "gainsboro" : "white",
							},
						]}
						key={size}>
						<Text
							style={[
								styles.sizedText,
								{
									color: selectedSize === size ? "black" : "gray",
								},
							]}>
							{" "}
							{size}{" "}
						</Text>
					</Pressable>
				))}
			</View>
			<Text style={styles.price}> Price: ${product.price} </Text>
			<Button onPress={addToCart} text={"Add to Cart"} />
		</View>
	);
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		padding: 10,
	},
	image: {
		width: "100%",
		aspectRatio: 1,
	},

	price: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: "auto",
	},
	sizes: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 10,
	},
	size: {
		backgroundColor: "gainsboro",
		width: 50,
		aspectRatio: 1,
		borderRadius: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	sizedText: {
		fontSize: 20,
		fontWeight: "500",
	},
});

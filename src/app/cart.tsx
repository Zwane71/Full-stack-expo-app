import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Platform, Text, View } from "react-native";
import { useContext } from "react";
import { CartContext, useCart } from "@/src/provider/CartProvider";
import CartListItem from "../components/CartListIems";

const CartScreen = () => {
	const { items } = useCart();
	return (
		<View>
			<FlatList
				data={items}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
				contentContainerStyle={{ padding: 10, gap: 10 }}
			/>
			<StatusBar style={Platform.OS === "android" ? "dark" : "auto"} />
		</View>
	);
};

export default CartScreen;

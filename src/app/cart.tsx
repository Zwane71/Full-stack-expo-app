import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Platform, Pressable, Text, View } from "react-native";
import { useContext } from "react";
import { CartContext, useCart } from "@/src/provider/CartProvider";
import CartListItem from "../components/CartListIems";

const CartScreen = () => {
	const { items, total } = useCart();
	return (
		<View style={{ padding: 10 }}>
			<FlatList
				data={items}
				renderItem={({ item }) => <CartListItem cartItem={item} />}
				contentContainerStyle={{ gap: 10 }}
			/>
			<Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
				Total: ${total}
			</Text>
			<Pressable
				style={{
					backgroundColor: "lightblue",
					padding: 10,

					borderRadius: 10,
				}}>
				<Text
					style={{
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
					}}>
					Checkout
				</Text>
			</Pressable>
			<StatusBar style={Platform.OS === "android" ? "dark" : "auto"} />
		</View>
	);
};

export default CartScreen;

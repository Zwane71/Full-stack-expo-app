import orders from "@/assets/data/orders";
import OrderItemListItem from "@/src/components/OrderItemListItem";
import OrderListItem from "@/src/components/OrderListItem";
import { OrderStatusList } from "@/src/types";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function OrderDetailsScreens() {
	const { id } = useLocalSearchParams();
	const order = orders.find((o) => o.id.toString() === id);

	if (!order) {
		return <Text>Not Found</Text>;
	}
	return (
		<View style={{ padding: 10 }}>
			<Stack.Screen options={{ title: `Order #${id}` }} />

			<FlatList
				data={order.order_items}
				renderItem={({ item }) => <OrderItemListItem item={item} />}
				contentContainerStyle={{ gap: 10 }}
				ListHeaderComponent={() => <OrderListItem order={order} />}
			/>
		</View>
	);
}

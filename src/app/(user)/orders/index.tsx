import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import { FlatList, Text, View } from "react-native";

export default function OrdersScreen() {
	return (
		<View>
			<FlatList
				data={orders}
				renderItem={({ item }) => <OrderListItem order={item} />}
				contentContainerStyle={{ gap: 10, padding: 10 }}
			/>
		</View>
	);
}

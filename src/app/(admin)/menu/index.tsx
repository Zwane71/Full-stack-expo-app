import { SafeAreaView } from "react-native-safe-area-context";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { FlatList } from "react-native";

export default function MenuScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FlatList
				data={products}
				renderItem={({ item }) => <ProductListItem product={item} />}
				numColumns={2}
				keyExtractor={(item) => item.id.toString()} // Ensure unique keys for items
				key={"2"} // Ensure FlatList resets if numColumns changes dynamically
				contentContainerStyle={{ gap: 10, padding: 10 }}
				columnWrapperStyle={{ gap: 10 }}
			/>
		</SafeAreaView>
	);
}

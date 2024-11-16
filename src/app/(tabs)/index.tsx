import { SafeAreaView } from "react-native-safe-area-context";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {
	return (
		<SafeAreaView>
			<ProductListItem product={products[5]} />
			<ProductListItem product={products[1]} />
		</SafeAreaView>
	);
}

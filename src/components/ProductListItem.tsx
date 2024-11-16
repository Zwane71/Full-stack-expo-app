import { Colors } from "@/src/constants/Colors";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { Product } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";

type ProductListItemProps = {
	product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={{
					uri:
						product.image ||
						"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png",
				}}
				style={styles.image}
				resizeMode='contain'
			/>
			<Text style={styles.title}>{product.name}</Text>
			<Text style={styles.price}>${product.price}</Text>
		</SafeAreaView>
	);
};

export default ProductListItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 20,
		flex: 1,
		margin: 5,
	},
	title: {
		fontSize: 18,
		fontWeight: "600",
		marginVertical: 10,
	},
	price: {
		color: Colors.light.tint,
		fontWeight: "bold",
	},
	image: {
		width: "100%",
		aspectRatio: 1,
	},
});

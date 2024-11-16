import { Colors } from "@/src/constants/Colors";
import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import products from "@/assets/data/products";

const product = products[0];
export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Image source={{ uri: product.image }} style={styles.image} />
			<Text style={styles.title}>{product.name}</Text>
			<Text style={styles.price}>${product.price}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderRadius: 20,
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

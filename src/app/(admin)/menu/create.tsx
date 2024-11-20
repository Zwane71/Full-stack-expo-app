import { Colors } from "@/src/constants/Colors";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	Image,
	TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Stack } from "expo-router";

const CreateProductScreen = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [errors, setErrors] = useState("");
	const [image, setImage] = useState<string | null>(null);

	const resetField = () => {
		setErrors("");
		setName("");
		setPrice("");
		setImage(null);
	};

	const validateInput = () => {
		if (!name.trim()) {
			setErrors("Name is required");
			return false;
		} else if (!price.trim()) {
			setErrors("Price is required");
			return false;
		} else if (isNaN(parseFloat(price))) {
			setErrors("Price must be a valid number");
			return false;
		}
		return true;
	};

	const onCreate = () => {
		if (!validateInput()) {
			return;
		}
		console.warn("Creating product:", { name, price, image });

		resetField();
	};

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images", "videos"],
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ title: "Create Products" }} />
			<TouchableOpacity onPress={pickImage}>
				<Image
					source={{
						uri:
							image ||
							"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png",
					}}
					style={styles.image}
				/>
			</TouchableOpacity>
			<Text style={styles.textButton}>Select Image</Text>

			<Text style={styles.label}>Name</Text>
			<TextInput
				value={name}
				onChangeText={setName}
				placeholder='Name'
				style={styles.input}
			/>

			<Text style={styles.label}>Price ($)</Text>
			<TextInput
				value={price}
				onChangeText={setPrice}
				placeholder='9.99'
				style={styles.input}
				keyboardType='numeric'
			/>

			{errors ? <Text style={styles.errorText}>{errors}</Text> : null}

			<Button onPress={onCreate} title='Create' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 10,
	},
	input: {
		backgroundColor: "white",
		padding: 10,
		borderRadius: 5,
		marginTop: 5,
		marginBottom: 20,
	},
	label: {
		color: "gray",
		fontSize: 16,
	},
	image: {
		width: "100%",
		aspectRatio: 1,
		borderRadius: 10,
	},
	textButton: {
		alignSelf: "center",
		textAlign: "center",
		fontWeight: "bold",
		color: Colors.light.tint,
		marginVertical: 10,
	},
	errorText: {
		color: "red",
		marginBottom: 10,
	},
});

export default CreateProductScreen;

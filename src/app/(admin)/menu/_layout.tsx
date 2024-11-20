import { Colors } from "@/src/constants/Colors";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

const MenuScreenLayout = () => {
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen
				name='index'
				options={{
					title: "Menu",
					headerRight: () => (
						<Link href={"/"} asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='plus-square-o'
										size={25}
										color={Colors.light.tint}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>

			<Stack.Screen
				name='[id]'
				options={{
					title: "Menu",
					headerRight: () => (
						<Link href={"/"} asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='pencil'
										size={25}
										color={Colors.light.tint}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
		</Stack>
	);
};

export default MenuScreenLayout;

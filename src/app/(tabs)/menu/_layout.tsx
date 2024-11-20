import { Colors } from "@/src/constants/Colors";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

const MenuScreenLayout = () => {
	return (
		<Stack
			screenOptions={{
				headerRight: () => (
					<Link href={"/cart"} asChild>
						<Pressable>
							{({ pressed }) => (
								<FontAwesome
									name='shopping-cart'
									size={24}
									color={Colors.light.tint}
									style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
								/>
							)}
						</Pressable>
					</Link>
				),
			}}>
			<Stack.Screen name='index' options={{ title: "Menu" }} />
		</Stack>
	);
};

export default MenuScreenLayout;

import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/src/components/HapticTab";
import { IconSymbol } from "@/src/components/ui/IconSymbol";
import TabBarBackground from "@/src/components/ui/TabBarBackground";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.light.background,
				tabBarInactiveTintColor: "gainsboro",
				tabBarButton: HapticTab,

				tabBarStyle: {
					backgroundColor: Colors.light.tint,
				},
			}}>
			<Tabs.Screen
				name='index'
				options={{
					href: null,
				}}
			/>
			<Tabs.Screen
				name='menu'
				options={{
					title: "Menu",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<FontAwesome name='cutlery' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='explore'
				options={{
					title: "Orders",
					tabBarIcon: ({ color }) => (
						<FontAwesome name='list' size={20} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
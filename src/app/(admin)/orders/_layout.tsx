import { Stack } from "expo-router";
import React from "react";

const OrderScreenLayout = () => {
	return (
		<Stack>
			{/* <Stack.Screen name='inde' options={{ title: "Orders" }} /> */}
			<Stack.Screen name='list' options={{ headerShown: false }} />
		</Stack>
	);
};

export default OrderScreenLayout;

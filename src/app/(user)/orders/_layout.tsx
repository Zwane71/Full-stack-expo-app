import { Stack } from "expo-router";
import React from "react";

const OrderScreenLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ title: "Orders" }} />
		</Stack>
	);
};

export default OrderScreenLayout;

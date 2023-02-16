import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Dice = ({ dice, rollDice, loading }) => {
	return (
		<Flex flexDirection={"column"} gap="4" justifyContent={"flex-end"}>
			<Flex justifyContent={"center"}>
				<Heading>{dice}</Heading>
			</Flex>
			<Button
				onClick={rollDice}
				isLoading={loading}
				variant="outline"
				colorScheme={"whatsapp"}
			>
				Roll Dice
			</Button>
		</Flex>
	);
};

export default Dice;

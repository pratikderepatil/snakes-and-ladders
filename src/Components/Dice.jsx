import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Dice = ({ dice, rollDice, loading }) => {
	return (
		<Flex flexDirection={"column"} gap="4" justifyContent={"flex-end"}>
			<Flex justifyContent={"center"}>
				<Heading>{dice}</Heading>
			</Flex>
			{/* OnClick dice will generate a random number, and player will moving based on the outcome of dice.
			While the player is moving the button will be in loading state */}
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

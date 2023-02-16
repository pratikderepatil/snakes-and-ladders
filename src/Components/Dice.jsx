import { Box, Button } from "@chakra-ui/react";
import React from "react";

const Dice = ({ dice, rollDice }) => {
	return (
		<>
			<Box>{dice}</Box>
			<Button onClick={rollDice}>Roll Dice</Button>
		</>
	);
};

export default Dice;

import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Tile = ({ number, to, currplayer }) => {
	let color = "white";
	let round = "10%";
	if (number > to) {
		color = "red.400";
	}
	if (number < to) {
		color = "green.400";
	}
	if (number === currplayer) {
		color = "gray.400";
		round = "45%";
	}
	if (number === 100) {
		color = "yellow.400";
	}
	return (
		<Flex
			justifyContent={"center"}
			alignItems={"center"}
			w="50"
			h="50"
			borderWidth="1px"
			bgColor={color}
			borderRadius={round}
		>
			<Heading size={"sm"}>{number}</Heading>
		</Flex>
	);
};

export default Tile;

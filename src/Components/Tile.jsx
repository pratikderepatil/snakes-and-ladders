import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Tile = ({ number, to, currplayer }) => {
	let color = "white";
	let round = "10%";

	// Tile where snake starts will be displaed as red
	if (number > to) {
		color = "red.400";
	}

	// Tile where ladder starts will be displaed as green
	if (number < to) {
		color = "green.400";
	}

	//  When player and tile number is same background color of tile will be gray and tile will appear to be roundssc
	if (number === currplayer) {
		color = "gray.400";
		round = "45%";
	}

	//  When tile number is 100 background color of tile will be yellow

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
			{/* Will display the tile on board */}
			<Heading size={"sm"}>{number}</Heading>
		</Flex>
	);
};

export default Tile;

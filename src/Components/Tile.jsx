import React from "react";
import { Box } from "@chakra-ui/react";

const Tile = ({ row, col, number, to, player }) => {
	return number > to ? (
		<Box w="50" h="50" borderWidth="1px" p="" borderRadius="lg">
			{number} S
		</Box>
	) : number < to ? (
		<Box w="50" h="50" borderWidth="1px" p="" borderRadius="lg">
			{number} L
		</Box>
	) : (
		<Box w="50" h="50" borderWidth="1px" p="" borderRadius="lg">
			{number}
		</Box>
	);
};

export default Tile;

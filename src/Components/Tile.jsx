import React from "react";
import { Box } from "@chakra-ui/react";

const Tile = ({ row, col, number, to, currplayer }) => {
	let cellData = "";

	if (number > to) {
		cellData += "S";
	}
	if (number < to) {
		cellData += "L";
	}
	if (number === currplayer) {
		cellData += "P";
	}
	return (
		<Box w="50" h="50" borderWidth="1px" p="" borderRadius="lg">
			{number} {cellData}
		</Box>
	);
};

export default Tile;

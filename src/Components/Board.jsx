import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Tile from "./Tile";
import {
	ladderPositions,
	snakePositions,
} from "../Data/SnakeAndLadderPosition";
const Board = () => {
	const board = [];
	let tile = 1;
	for (let i = 1; i <= 10; i++) {
		for (let j = 1; j <= 10; j++) {
			board.push({
				row: i,
				col: j,
				number: tile,
				to: tile,
				player: [],
			});
			tile++;
		}
	}
	ladderPositions.map((ele) => {
		return (board[ele.from - 1].to = ele.to);
	});
	snakePositions.map((ele) => {
		return (board[ele.from - 1].to = ele.to);
	});

	console.log(board);
	return (
		<Grid
			templateRows="repeat(10, 60px)"
			templateColumns="repeat(10, 60px)"
			gap={0}
		>
			{board.map((ele) => {
				return <Tile {...ele} key={ele.number} />;
			})}
		</Grid>
	);
};

export default Board;

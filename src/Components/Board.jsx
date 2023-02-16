import { Grid } from "@chakra-ui/react";
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
		let boardRow = [];
		if (i % 2 === 1) {
			for (let j = 1; j <= 10; j++) {
				boardRow.push({
					row: i,
					col: j,
					number: tile,
					to: tile,
					player: [],
				});
				tile++;
			}
		} else {
			tile += 9;
			for (let j = 1; j <= 10; j++) {
				boardRow.push({
					row: i,
					col: j,
					number: tile,
					to: tile,
					player: [],
				});
				tile--;
			}
			tile += 11;
		}
		board.splice(0, 0, boardRow);
	}
	ladderPositions.map((ele) => {
		return (board[ele.fromrow - 1][(ele.from % 10) - 1].to = ele.to);
	});
	snakePositions.map((ele) => {
		return (board[ele.fromrow - 1][(ele.from % 10) - 1].to = ele.to);
	});
	console.log(board);
	return (
		<Grid
			templateRows="repeat(10, 60px)"
			templateColumns="repeat(10, 60px)"
			gap={0}
		>
			{board.map((ele) => {
				return ele.map((elem) => {
					return <Tile {...elem} key={elem.number} />;
				});
			})}
		</Grid>
	);
};

export default Board;

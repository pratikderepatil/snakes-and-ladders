import { Grid } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Tile from "./Tile";
import {
	ladderPositions,
	snakePositions,
} from "../Data/SnakeAndLadderPosition";
import Dice from "./Dice";
const Board = () => {
	const board = [];
	const [player, setPlayer] = useState(0);
	const [dice, setDice] = useState(0);
	const ref = useRef(null);
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
				});
				tile--;
			}
			tile += 11;
		}
		board.splice(0, 0, boardRow);
	}

	snakePositions.map((ele) => {
		for (let j = 1; j <= 10; j++) {
			if (board[10 - ele.fromrow][j].number === ele.from) {
				return (board[10 - ele.fromrow][j].to = ele.to);
			}
		}
		return ele;
	});
	ladderPositions.map((ele) => {
		for (let j = 1; j <= 10; j++) {
			if (board[10 - ele.fromrow][j].number === ele.from) {
				return (board[10 - ele.fromrow][j].to = ele.to);
			}
		}
		return ele;
	});

	const rollDice = () => {
		const newDice = Math.floor(Math.random() * (6 - 1)) + 1;
		setDice(newDice);
		if (player + newDice > 100) {
		} else {
			for (let i = 1; i <= newDice; i++) {
				setTimeout(() => setPlayer((prev) => (prev = player + i)), i * 1000);
			}
			let row = Math.floor(player / 10);
			for (let j = 0; j < 10; j++) {
				console.log(board[9 - row][j]);
				if (
					board[9 - row][j].number === player &&
					board[9 - row][j].number !== board[9 - row][j].to
				) {
					setPlayer(board[9 - row][j].to);
				}
			}
		}
	};
	return (
		<>
			<Dice dice={dice} rollDice={rollDice} />
			<Grid
				templateRows="repeat(10, 60px)"
				templateColumns="repeat(10, 60px)"
				gap={0}
			>
				{board.map((ele) => {
					return ele.map((elem) => {
						return <Tile {...elem} currplayer={player} key={elem.number} />;
					});
				})}
			</Grid>
		</>
	);
};

export default Board;

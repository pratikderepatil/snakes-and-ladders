import { Grid, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
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
	const toast = useToast();
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
		const newDice = Math.floor(Math.random() * 6) + 1;
		setDice(newDice);
		if (player + newDice > 100) {
		} else if (player + newDice === 100) {
			toast({
				title: "You won!.",
				description: "You have succesfully reached the destinaiton",
				status: "success",
				duration: 9000,
				isClosable: true,
			});
			setPlayer(0);
		} else {
			const dest = checkValue(player, newDice, board);
			console.log(dest);
			setPlayer(dest);
		}
	};

	const checkValue = (player, dice) => {
		for (let i = 0; i < ladderPositions.length; i++) {
			console.log(ladderPositions[i]);
			if (ladderPositions[i].from === dice + player) {
				console.log(ladderPositions[i]);
				return ladderPositions[i].to;
			}
		}
		for (let i = 0; i < snakePositions.length; i++) {
			console.log(snakePositions[i]);
			if (snakePositions[i].from === dice + player) {
				console.log(snakePositions[i]);
				return snakePositions[i].to;
			}
		}

		return player + dice;
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

import { Grid, useToast } from "@chakra-ui/react";
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
	const toast = useToast();
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

	const changePosition = (changeby, time) => {
		setTimeout(() => setPlayer(player + changeby), time);
		console.log(player);
	};

	const rollDice = () => {
		const newDice = Math.floor(Math.random() * (6 - 1)) + 1;
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
			let dest = player + newDice;
			let row = Math.floor(player / 10);
			for (let j = 0; j < 10; j++) {
				if (
					board[9 - row][j].number === player &&
					board[9 - row][j].number !== board[9 - row][j].to
				) {
					dest = board[9 - row][j].to;
				}
				console.log(dest);
			}
			setPlayer((prev) => (prev = dest));
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

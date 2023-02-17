import { Flex, Grid, Heading, useToast } from "@chakra-ui/react";
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
	const [loading, setLoading] = useState(false);
	const [dice, setDice] = useState(0);
	const toast = useToast();
	let tile = 1;
	// Creating board tiles.
	for (let i = 1; i <= 10; i++) {
		// on board there are 10 rows and 10 coloumns
		let boardRow = [];
		// for rows with odd number will start form 1 - 10 in multiple of 10's
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
			// for rows with even number will start form 10 - 1 in multiple of 10's
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
		// inserting the row at the start of board array
		board.splice(0, 0, boardRow);
	}
	// adding snake positions on the board
	snakePositions.map((ele) => {
		for (let j = 1; j <= 10; j++) {
			if (board[10 - ele.fromrow][j].number === ele.from) {
				return (board[10 - ele.fromrow][j].to = ele.to);
			}
		}
		return ele;
	});
	// adding ladder positions on the board.
	ladderPositions.map((ele) => {
		for (let j = 1; j <= 10; j++) {
			if (board[10 - ele.fromrow][j].number === ele.from) {
				return (board[10 - ele.fromrow][j].to = ele.to);
			}
		}
		return ele;
	});
	// Rolling the dice and moving the player on the random outcome
	const rollDice = () => {
		setLoading(true);
		// Generating random value between 1 to 6
		const newDice = Math.floor(Math.random() * 6) + 1;
		setDice(newDice);
		// Adding the outcome to current postion of player if the new outcome is greater than 100 no action is performed
		if (player + newDice > 100) {
		}
		// Adding the outcome to current postion of player if the new outcome is 100 game is over, and new starts
		else if (player + newDice === 100) {
			// pop up will be displayed with message you won
			toast({
				title: "You won!.",
				description: "You have succesfully reached the destinaiton",
				status: "success",
				duration: 9000,
				isClosable: true,
				position: "top",
			});
			// start a new game
			setPlayer(0);
		} else {
			const dest = checkValue(player, newDice, board);
			// checking id the destination id greater than new outcome
			if (dest > player + newDice) {
				// pop up will be displayed with message you climbed the ladder
				toast({
					title: `You climbed the ladder at ${
						player + newDice
					} and took you ahead to ${dest}`,
					status: "success",
					duration: 3000,
					isClosable: true,
					position: "top",
				});
			}
			// checking id the destination id greater than new outcome
			else if (dest < player + newDice) {
				// pop up will be displayed with message you were eaten by the snake
				toast({
					title: `You were eaten by the snake at ${
						player + newDice
					} and bring you
back to ${dest}`,
					status: "error",
					duration: 3000,
					isClosable: true,
					position: "top",
				});
			}
			// will move the current player position to new outcome after 500 miliseconds
			setTimeout(() => {
				setPlayer(player + newDice);
			}, 500);

			// will move the current player position to new outcome after 1000 miliseconds if eaten by snake or climber the ladder
			setTimeout(() => {
				setPlayer(dest);
			}, 1000);
		}
		setLoading(false);
	};

	const checkValue = (player, dice) => {
		// checking if the new outcome lands on ladder, and returning to position.
		for (let i = 0; i < ladderPositions.length; i++) {
			if (ladderPositions[i].from === dice + player) {
				console.log(ladderPositions[i]);
				return ladderPositions[i].to;
			}
		}
		// checking if the new outcome lands on snake, and returning to position.
		for (let i = 0; i < snakePositions.length; i++) {
			if (snakePositions[i].from === dice + player) {
				console.log(snakePositions[i]);
				return snakePositions[i].to;
			}
		}
		// returning if new outcome doesnot land on snake or ladder
		return player + dice;
	};
	return (
		<>
			<Flex justifyContent={"center"} gap="5" h={"auto"} m="auto" p="20">
				<Flex justifyContent={"flex-end"} p="3" gap="4" flexDirection="column">
					<Dice dice={dice} rollDice={rollDice} loading={loading} />
					<Flex
						justifyContent={"center"}
						alignItems={"center"}
						bgColor={player === 0 ? "gray.400" : "white"}
						borderWidth="1px"
						borderRadius={player === 0 ? "20" : "10%"}
						h="50"
					>
						<Heading fontSize={"lg"}> Start 00</Heading>
					</Flex>
				</Flex>
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
			</Flex>
		</>
	);
};

export default Board;

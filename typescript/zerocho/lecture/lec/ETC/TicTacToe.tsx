import React, { useEffect, useCallback, useReducer } from "react";
import Table from "./components/Table";

type Winner = "O" | "X";

interface ReducerState {
	winner: Winner | "";
	turn: Winner;
	tableData: string[][];
	recentCell: [number, number];
}

const initialState: ReducerState = {
	winner: "",
	turn: "O",
	tableData: [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	],
	recentCell: [-1, -1],
};

export const SET_WINNER = "SET_WINNER" as const;
export const CLICK_CELL = "CLICK_CELL" as const;
export const CHANGE_TURN = "CHANGE_TURN" as const;
export const RESET_GAME = "RESET_GAME" as const;

interface SetWinnerAction {
	type: typeof SET_WINNER;
	winner: Winner;
}

const setWinner = (winner: Winner): SetWinnerAction => {
	return { type: SET_WINNER, winner };
};

interface ClickCellAction {
	type: typeof CLICK_CELL;
	row: number;
	cell: number;
}

export const clickCell = (row: number, cell: number): ClickCellAction => {
	return { type: CLICK_CELL, row, cell };
};

interface ChangeTurnAction {
	type: typeof CHANGE_TURN;
}

interface ResetGame {
	type: typeof RESET_GAME;
}

type ReducerActions =
	| SetWinnerAction
	| ClickCellAction
	| ChangeTurnAction
	| ResetGame;

const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
	switch (action.type) {
		case SET_WINNER:
			return {
				...state,
				winner: action.winner,
			};
		case CLICK_CELL:
			const tableData = [...state.tableData];
			tableData[action.row] = [...tableData[action.row]];
			tableData[action.row][action.cell] = state.turn;
			return {
				...state,
				tableData,
				recentCell: [action.row, action.cell],
			};
		case CHANGE_TURN:
			return {
				...state,
				turn: state.turn === "O" ? "X" : "O",
			};
		case RESET_GAME:
			return {
				...initialState,
			};
		default:
			return state;
	}
};

const TicTacToe = () => {
	const [state, dispatch] = useReducer<
		React.Reducer<ReducerState, ReducerActions>
	>(reducer, initialState);
	const { tableData, turn, winner, recentCell } = initialState;

	useEffect(() => {
		const [row, cell] = recentCell;
		if (row < 0) {
			return;
		}
		let win = false;
		if (
			tableData[row][0] === turn &&
			tableData[row][1] === turn &&
			tableData[row][2] === turn
		) {
			win = true;
		}
		if (
			tableData[0][cell] === turn &&
			tableData[1][cell] === turn &&
			tableData[2][cell] === turn
		) {
			win = true;
		}
		if (
			tableData[0][0] === turn &&
			tableData[1][1] === turn &&
			tableData[2][2] === turn
		) {
			win = true;
		}
		if (
			tableData[0][2] === turn &&
			tableData[1][1] === turn &&
			tableData[2][0] === turn
		) {
			win = true;
		}
		console.log(win, row, cell, tableData, turn);
		if (win) {
			// 승리시
			dispatch({ type: SET_WINNER, winner: turn });
			dispatch({ type: RESET_GAME });
		} else {
			// all이 true면 무승부라는 뜻
			let all = true;
			tableData.forEach((row) => {
				// 무승부 검사
				row.forEach((cell) => {
					if (!cell) {
						all = false;
					}
				});
			});
			if (all) {
				dispatch({ type: RESET_GAME });
			} else {
				dispatch({ type: CHANGE_TURN });
			}
		}
	}, [recentCell]);

	const onClickTable = useCallback(() => {
		dispatch(setWinner("O"));
	}, []);
	return (
		<div>
			<Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
			{winner && <div>{winner}님의 승리</div>}
		</div>
	);
};

export default TicTacToe;

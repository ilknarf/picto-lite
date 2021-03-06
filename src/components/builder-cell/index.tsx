import * as React from "react";
import { useContext } from "react";
import { CellState } from "models/nonogram";
import { BoardDispatch } from "components/nonogram-board";
import { createBoardAction } from "util/builder";
import { Cell } from "components/cell";

export interface Props {
  cellState: CellState;
  location: number;
}

export const BuilderCell = (props: Props) => {
  const boardDispatch = useContext(BoardDispatch);
  const onAction = () => {
    // treat all clicks as left
    boardDispatch(createBoardAction(props.location));
  };

  return <Cell cellState={props.cellState} onAction={onAction} />;
};

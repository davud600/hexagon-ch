import { type Dispatch, type SetStateAction } from 'react'

export type ModuleColor = 'light' | 'neutral' | 'dark' | 'legal' | 'selected'
export type PieceIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type PieceColor = 8 | 16

export type PiecesType = {
  none: PieceIndex
  king: PieceIndex
  pawn: PieceIndex
  knight: PieceIndex
  bishop: PieceIndex
  rook: PieceIndex
  queen: PieceIndex

  white: PieceColor
  black: PieceColor
}

export type SelectedPieceType = {
  pieceValue: number
  posIndex: number
}

export type Move = {
  startPosIndex: number
  targetPosIndex: number
}

export type BoardType = number[]

export type HexagonSide =
  | 'north'
  | 'south'
  | 'northEast'
  | 'northWest'
  | 'southEast'
  | 'southWest'

export type HexagonSides = {
  north: HexagonSide
  south: HexagonSide
  northEast: HexagonSide
  northWest: HexagonSide
  southEast: HexagonSide
  southWest: HexagonSide
}

export type HexagonSlidingSide =
  | 'west'
  | 'east'
  | 'northEast'
  | 'northWest'
  | 'southEast'
  | 'southWest'

export type HexagonSlidingSides = {
  west: HexagonSlidingSide
  east: HexagonSlidingSide
  northEast: HexagonSlidingSide
  northWest: HexagonSlidingSide
  southEast: HexagonSlidingSide
  southWest: HexagonSlidingSide
}

export type GameResultType = 8 | 16 | 0 | 1

export type BoardContextData = {
  BoardState: {
    board: BoardType
    setBoard: Dispatch<SetStateAction<BoardType>>
  }
  SelectedPieceState: {
    selectedPiece: SelectedPieceType | null
    setSelectedPiece: Dispatch<SetStateAction<SelectedPieceType | null>>
  }
  MovesState: {
    moves: Move[]
    setMoves: Dispatch<SetStateAction<Move[]>>
  }
  ColorToMoveState: {
    colorToMove: PieceColor
    setColorToMove: Dispatch<SetStateAction<PieceColor>>
  }
  HistoryState: {
    boardHistory: string[]
    setBoardHistory: Dispatch<SetStateAction<string[]>>
  }
  ScoreState: {
    whiteScore: number
    blackScore: number
  }
  viewPreviousBoardInHistory: () => void
  viewNextBoardInHistory: () => void
  isViewingHistory: () => boolean
  makeMove: (index: number) => void
}

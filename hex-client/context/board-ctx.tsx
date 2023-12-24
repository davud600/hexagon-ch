import { Board as InitialBoard, Pieces } from '@/constants/board-objects'
import { GameModes } from '@/constants/game-settings-objects'
import { useSettings } from '@/hooks/use-game-settings'
import { aiGetMove } from '@/lib/board/ai'
import {
  getBoardFromFEN,
  getFenFromBoard,
  getGameResult,
  getScore,
} from '@/lib/board/board'
import { getLegalMovesFromBoard } from '@/lib/board/moves'
import { getOppositeColor } from '@/lib/board/piece'
import {
  type BoardContextData,
  type BoardType,
  type GameResultType,
  type Move,
  type PieceColor,
  type SelectedPieceType,
} from '@/types/board'
import { createContext, type ReactNode, useState, useEffect } from 'react'

export const BoardContext = createContext<BoardContextData>({
  BoardState: {
    board: InitialBoard,
    setBoard: () => false,
  },
  SelectedPieceState: {
    selectedPiece: null,
    setSelectedPiece: () => false,
  },
  MovesState: {
    moves: getLegalMovesFromBoard(InitialBoard, Pieces.white),
    setMoves: () => false,
  },
  ColorToMoveState: {
    colorToMove: Pieces.white,
    setColorToMove: () => false,
  },
  HistoryState: {
    boardHistory: [],
    setBoardHistory: () => false,
  },
  ScoreState: {
    whiteScore: 0,
    blackScore: 0,
  },
  TimersState: {
    whiteTime: 4.12,
    blackTime: 5.2,
  },
  viewPreviousBoardInHistory: () => false,
  viewNextBoardInHistory: () => false,
  isViewingHistory: () => false,
  makeMove: () => false,
})

export function BoardProvider({ children }: { children: ReactNode }) {
  const { gameMode, aiColor } = useSettings()

  const [board, setBoard] = useState<BoardType>(InitialBoard)
  const [selectedPiece, setSelectedPiece] = useState<SelectedPieceType | null>(
    null
  )
  const [colorToMove, setColorToMove] = useState<PieceColor>(Pieces.white)
  const [moves, setMoves] = useState<Move[]>(
    getLegalMovesFromBoard(board, colorToMove)
  )
  const [boardHistory, setBoardHistory] = useState<string[]>([
    getFenFromBoard(board),
  ])
  const [viewingBoardIndex, setViewingBoardIndex] = useState<number>(0)
  const [gameResult, setGameResult] = useState<GameResultType>(1)
  const [whiteScore, setWhiteScore] = useState<number>(0)
  const [blackScore, setBlackScore] = useState<number>(0)

  /**
   * Updating score for each color
   */
  useEffect(() => {
    setWhiteScore(getScore(Pieces.white, board))
    setBlackScore(getScore(Pieces.black, board))
  }, [board])

  /**
   * Updaing Legal Moves
   */
  useEffect(() => {
    setMoves(getLegalMovesFromBoard(board, colorToMove))
  }, [board, colorToMove])

  /**
   * Ai Turn Caller
   */
  useEffect(() => {
    // Local vs ai...
    if (gameMode === GameModes.LocalVsAi) {
      if (colorToMove === aiColor) {
        const aiMove = aiGetMove(moves, board, aiColor)

        if (aiMove === undefined) return

        makeMove(aiMove.targetPosIndex, aiMove.startPosIndex)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moves])

  /**
   * Updating Game Result State
   */
  useEffect(() => {
    if (isViewingHistory()) return

    setGameResult(getGameResult(board, colorToMove, moves))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moves, board, colorToMove])

  /**
   * Game status
   */
  useEffect(() => {
    if (gameResult === 1) return // game hasn't ended

    if (gameResult === 0) {
      console.log('stalemate')
      return
    }

    console.log(`winner: ${gameResult}`)
  }, [gameResult])

  /**
   * Updating Board History when board changes
   */
  useEffect(() => {
    if (isViewingHistory()) return

    setBoardHistory((prevBoardHistory) => {
      const updatedBoardHistory = [...prevBoardHistory]
      const currentBoardFen = getFenFromBoard(board)

      if (
        updatedBoardHistory[updatedBoardHistory.length - 1] !== currentBoardFen
      ) {
        updatedBoardHistory.push(currentBoardFen)
        setViewingBoardIndex(updatedBoardHistory.length - 1)
      }

      return updatedBoardHistory
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board])

  /**
   * Remove all legal moves if viewing history so players can't move
   */
  useEffect(() => {
    if (isViewingHistory() && moves.length > 0) setMoves([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moves])

  const makeMove = (index: number, startPosIndex?: number) => {
    if (startPosIndex !== undefined) {
      setBoard((prevBoard) => {
        const updatedBoard = [...prevBoard]
        updatedBoard[startPosIndex] = 0
        updatedBoard[index] = prevBoard[startPosIndex] as unknown as number
        return updatedBoard
      })
    } else {
      setBoard((prevBoard) => {
        if (selectedPiece === null) return prevBoard

        const updatedBoard = [...prevBoard]
        updatedBoard[selectedPiece.posIndex] = 0
        updatedBoard[index] = selectedPiece.pieceValue
        setSelectedPiece(null)
        return updatedBoard
      })
    }

    setColorToMove((prevColorToMove) => getOppositeColor(prevColorToMove))
  }

  /**
   * History state methods
   */
  const viewPreviousBoardInHistory = () => {
    if (boardHistory.length <= 1 || viewingBoardIndex < 1) return

    setViewingBoardIndex((prevViewingBoardIndex) => {
      setBoard(
        getBoardFromFEN(
          boardHistory[prevViewingBoardIndex - 1] as unknown as string
        )
      )

      return prevViewingBoardIndex - 1
    })
  }

  const viewNextBoardInHistory = () => {
    if (viewingBoardIndex >= boardHistory.length - 1) return

    setViewingBoardIndex((prevViewingBoardIndex) => {
      setBoard(
        getBoardFromFEN(
          boardHistory[prevViewingBoardIndex + 1] as unknown as string
        )
      )

      return prevViewingBoardIndex + 1
    })
  }

  const isViewingHistory = () => {
    return viewingBoardIndex < boardHistory.length - 1
  }

  const value = {
    BoardState: {
      board,
      setBoard,
    },
    SelectedPieceState: {
      selectedPiece,
      setSelectedPiece,
    },
    MovesState: {
      moves,
      setMoves,
    },
    ColorToMoveState: {
      colorToMove,
      setColorToMove,
    },
    HistoryState: {
      boardHistory,
      setBoardHistory,
    },
    ScoreState: {
      whiteScore,
      blackScore,
    },
    TimersState: {
      whiteTime: 4.12,
      blackTime: 5.2,
    },
    viewPreviousBoardInHistory,
    viewNextBoardInHistory,
    isViewingHistory,
    makeMove,
  }

  return <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
}

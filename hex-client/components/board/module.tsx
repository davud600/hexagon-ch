import { useBoard } from '@/hooks/use-board'
import { type DragEvent } from 'react'
import { type ModuleColor, type Move } from '@/types/board'
import BoardPiece from './Piece'
import { getPieceColor } from '@/lib/board/piece'
import { getModuleColorFromIndex, movesIncludeMove } from '@/lib/board/board'

export function BoardModule({
  index,
  rowIndex,
  width,
  height,
  xPos,
  yPos,
}: {
  index: number
  rowIndex: number
  width: number
  height: number
  xPos: number
  yPos: number
}) {
  const { MovesState, SelectedPieceState, BoardState, makeMove } = useBoard()

  console.log({ index })

  let color = getModuleColorFromIndex(index)

  // Whether the piece should be highlighted
  if (SelectedPieceState.selectedPiece?.posIndex === index) {
    color = 'selected'
  } else {
    MovesState.moves.forEach((move) => {
      if (
        move.targetPosIndex === index &&
        move.startPosIndex === SelectedPieceState.selectedPiece?.posIndex
      )
        color = 'legal'
    })
  }
  const className = `hexagon hex ${color}`

  const handleOnDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (
      SelectedPieceState.selectedPiece === null ||
      SelectedPieceState.selectedPiece === undefined
    )
      return

    if (
      verifyMove({
        startPosIndex: SelectedPieceState.selectedPiece.posIndex,
        targetPosIndex: index,
      })
    )
      makeMove(index)
  }

  const handleOnClick = () => {
    if (
      SelectedPieceState.selectedPiece === null ||
      SelectedPieceState.selectedPiece === undefined
    )
      return

    if ((BoardState.board[index] || -1) > 0) {
      if (
        getPieceColor(SelectedPieceState.selectedPiece.pieceValue) ===
          getPieceColor(BoardState.board[index] as unknown as number) &&
        SelectedPieceState.selectedPiece.posIndex !== index
      ) {
        SelectedPieceState.setSelectedPiece({
          pieceValue: BoardState.board[index] as unknown as number,
          posIndex: index,
        })
        return
      }
    }

    if (
      verifyMove({
        startPosIndex: SelectedPieceState.selectedPiece.posIndex,
        targetPosIndex: index,
      })
    )
      makeMove(index)
  }

  const verifyMove = (move: Move): boolean => {
    if (!movesIncludeMove(MovesState.moves, move)) {
      SelectedPieceState.setSelectedPiece(null)
      return false
    }

    return true
  }

  return (
    // <div
    //   className={className}
    //   onDragOver={(e) => handleOnDragOver(e)}
    //   onDrop={(e) => handleOnDrop(e)}
    //   onClick={handleOnClick}
    // >
    //   <BoardPiece index={index} />
    // </div>

    <div
      key={`firstRow ${rowIndex}`}
      className="bg-transparent"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'absolute',
        transform: `translate(${xPos}px, ${yPos}px)`,
      }}
    >
      <img
        className="bg-transparent w-full h-full"
        src="test-hex.svg"
        alt="hex"
      />
    </div>
  )
}

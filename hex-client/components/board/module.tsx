import { useBoard } from '@/hooks/use-board'
import { type DragEvent } from 'react'
import { ModuleColor, type Move } from '@/types/board'
import { getPieceColor } from '@/lib/board/piece'
import { movesIncludeMove } from '@/lib/board/board'
import { ModuleColors } from '@/constants/board-objects'

export function BoardModule({
  color,
  index,
  rowIndex,
  width,
  height,
  xPos,
  yPos,
}: {
  color: ModuleColor
  index: number
  rowIndex: number
  width: number
  height: number
  xPos: number
  yPos: number
}) {
  const { MovesState, SelectedPieceState, BoardState, makeMove } = useBoard()

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
      onDragOver={(e) => handleOnDragOver(e)}
      onDrop={(e) => handleOnDrop(e)}
      onClick={handleOnClick}
      key={`firstRow ${rowIndex}`}
      className="bg-transparent"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'absolute',
        transform: `translate(${xPos}px, ${yPos}px)`,
      }}
    >
      <svg
        className="bg-transparent w-full h-full"
        style={{
          fill: ModuleColors[color],
        }}
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 185 161"
        width="185"
        height="161"
      >
        <title>hexagon-svgrepo-com-svg</title>
        <path
          id="Layer"
          className="s0"
          d="m0 80.4l46.2-80h92.4l46.2 80-46.2 80h-92.4z"
        />
      </svg>
    </div>
  )
}

import { BoardContext } from '@/context/board-ctx'
import { useContext } from 'react'

export function useBoard() {
  return useContext(BoardContext)
}

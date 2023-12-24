import { type Dispatch, type SetStateAction } from 'react'
import { type PieceColor } from './board'

export type GameMode = 'local-multiplayer' | 'local-vs-ai'

export type GameModes = {
  LocalMultiPlayer: GameMode
  LocalVsAi: GameMode
}

export type GameSettingsData = {
  gameMode: GameMode
  setGameMode: Dispatch<SetStateAction<GameMode>>
  aiColor: PieceColor | null
  setAiColor: Dispatch<SetStateAction<PieceColor | null>>
}

import { Pieces } from '@/constants/board-objects'
import { GameModes } from '@/constants/game-settings-objects'
import { type PieceColor } from '@/types/board'
import { type GameMode, type GameSettingsData } from '@/types/game-settings'
import { createContext, useEffect, useState, type ReactNode } from 'react'

export const GameSettingsContext = createContext<GameSettingsData>({
  gameMode: GameModes.LocalVsAi,
  setGameMode: () => false,
  aiColor: Pieces.black,
  setAiColor: () => false,
})

export function GameSettingsProvider({ children }: { children: ReactNode }) {
  const [gameMode, setGameMode] = useState<GameMode>(GameModes.LocalMultiPlayer)
  const [aiColor, setAiColor] = useState<PieceColor | null>(null)

  useEffect(() => {
    if (gameMode === GameModes.LocalVsAi) setAiColor(Pieces.black)
  }, [gameMode])

  const value = {
    gameMode,
    setGameMode,
    aiColor,
    setAiColor,
  }

  return (
    <GameSettingsContext.Provider value={value}>
      {children}
    </GameSettingsContext.Provider>
  )
}

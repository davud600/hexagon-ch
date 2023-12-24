import { GameSettingsContext } from '@/context/game-settings-ctx'
import { useContext } from 'react'

export function useSettings() {
  return useContext(GameSettingsContext)
}

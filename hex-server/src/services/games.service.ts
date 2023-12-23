import crypto from 'crypto'

import { type Game, type GameData } from '../types/sockets/games'

const gamesStore = new Map<string, Game>()

export const GamesService = {
  getAll: (): Game[] => {
    return Array.from(gamesStore.values())
  },

  get: (id: string): Game | Error => {
    try {
      const game = gamesStore.get(id)

      if (!!!game) throw new Error('Could not find game!')

      return game
    } catch (error) {
      console.error((error as Error).message)
      return error as Error
    }
  },

  create: (data: GameData): Game | Error => {
    try {
      const uniqueId = crypto.randomBytes(8).toString('hex')
      const game = { id: uniqueId, ...data }

      gamesStore.set(uniqueId, game)

      return game
    } catch (error) {
      console.error('Failed to create game!')
      return new Error('Failed to create game!')
    }
  },

  update: (id: string, data: Partial<GameData>): Game | Error => {
    try {
      const game = GamesService.get(id)

      if (game instanceof Error) throw new Error(game.message)

      gamesStore.set(id, { ...game, ...data })

      return game
    } catch (error) {
      console.error('Failed to update game!')
      return new Error('Failed to update game!')
    }
  },

  delete: (id: string): void | Error => {
    try {
      gamesStore.delete(id)
    } catch (error) {
      console.error('Failed to delete game!')
      return new Error('Failed to delete game!')
    }
  },
}

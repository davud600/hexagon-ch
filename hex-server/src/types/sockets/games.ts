export type PlayerColor = 'white' | 'black'

export type PlayerData = {
  color: PlayerColor
  totalScore: number
  joined: boolean
}

export type GameData = {
  boardFen: string
  player1: PlayerData
  player2: PlayerData
}

export type Game = {
  id: string
} & GameData

export type PlayerColor = 'white' | 'black'

export type GameSettings = {
  time: number
}

export type Move = {
  board: string // fen format
}

export type GameStatus =
  | 'waiting'
  | 'on going'
  | 'white won'
  | 'black won'
  | 'stalemate'

export type PlayerData = {
  socketId: string
  joined: boolean
  color: PlayerColor
  totalScore: number
  timeLeft: number
}

export type GameData = {
  status: GameStatus
  roomId: string
  boardFen: string
  player1: PlayerData
  player2: PlayerData
}

export type Game = {
  id: string
} & GameData

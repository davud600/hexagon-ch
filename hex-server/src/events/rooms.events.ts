import { STARTING_BOARD_FEN } from '../constants/games/board'
import { io } from '../server'
import { GamesService } from '../services/games.service'

export function RoomsEvents() {
  io.on('joinRoom', (socket, data) => {
    const { roomId } = data

    // emitted when client goes to /room/:roomid
    console.log(`${socket} has joined the room`)

    // create game
    // const game = GamesService.create({
    //   boardFen: STARTING_BOARD_FEN,
    //   player1: {
    //     color: 'white',
    //     totalScore: 0,
    //   },
    //   player2: {
    //     color: 'black',
    //     totalScore: 0,
    //   },
    // })
  })
}

'use client'

import Board from '@/components/board/board'
import GameScores from '@/components/game/scores'
import GameTimers from '@/components/game/timers'

const Gameroom = () => {
  return (
    <div className="w-full h-full">
      <Board />

      <div className="absolute w-full h-[90%] flex flex-col justify-end bg-transparent">
        <GameTimers />
        <GameScores />
      </div>

      {/* <div className="flex align-middle justify-around">
        <div className="hidden md:flex md:items-center">settings</div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <span className="text-white text-[1.5em]">Player 1</span>
            <span className="text-white text-[1.5em]">04:12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white text-[1.5em]">Player 2</span>
            <span className="text-white text-[1.5em]">04:33</span>
          </div>
        </div>
        <div className="hidden md:flex md:items-center">info</div>
      </div> */}
    </div>
  )
}
export default Gameroom

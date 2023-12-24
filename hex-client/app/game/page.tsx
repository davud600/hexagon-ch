'use client'

import Board from '@/components/board/board'

const Gameroom = () => {
  return (
    <>
      <Board />

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
    </>
  )
}
export default Gameroom

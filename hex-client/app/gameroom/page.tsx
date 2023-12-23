import Image from 'next/image'

const Gameroom = () => {
  return (
    <div className="flex align-middle justify-around h-[85vh]">
      <div className="hidden md:flex md:items-center">settings</div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-between">
          <span className="text-white text-[1.5em]">Player 1</span>
          <span className="text-white text-[1.5em]">04:12</span>
        </div>
        <Image width={550} height={550} alt="no board" src="/boardRoom.png" />
        <div className="flex justify-between">
          <span className="text-white text-[1.5em]">04:33</span>
          <span className="text-white text-[1.5em]">Player 2</span>
        </div>
      </div>
      <div className="hidden md:flex md:items-center">info</div>
    </div>
  )
}
export default Gameroom

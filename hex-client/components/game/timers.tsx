import { useBoard } from '@/hooks/use-board'

export default function GameTimers() {
  const { TimersState } = useBoard()

  return (
    <div className="mt-4 relative w-full h-full flex justify-center bg-transparent">
      <div className="absolute w-[90%] flex justify-between text-white bg-transparent">
        <div className="text-start flex gap-2 bg-transparent">
          <span className="text-white text-[1em] md:text-[1.5em] bg-transparent">
            White time:
          </span>
          <span className="text-white text-[1em] md:text-[1.5em] bg-transparent">
            {TimersState.whiteTime}
          </span>
        </div>
        <div className="text-start flex gap-2 bg-transparent">
          <span className="text-white text-[1em] md:text-[1.5em] bg-transparent">
            Black time:
          </span>
          <span className="text-white text-[1em] md:text-[1.5em] bg-transparent">
            {TimersState.blackTime}
          </span>
        </div>
      </div>
    </div>
  )
}

import { useBoard } from '@/hooks/use-board'

export default function GameScores() {
  const { ScoreState } = useBoard()

  return (
    <div className="relative w-full h-full flex justify-center mt-4 bg-transparent">
      <div className="md:my-3 absolute w-[90%] flex justify-between text-white bg-transparent bottom-10">
        <span className="bg-transparent ext-[1em] md:text-[1.5em]">
          White score: {ScoreState.whiteScore - ScoreState.blackScore}
        </span>
        <span className="bg-transparent ext-[1em] md:text-[1.5em]">
          Black score: {ScoreState.blackScore - ScoreState.whiteScore}
        </span>
      </div>
    </div>
  )
}

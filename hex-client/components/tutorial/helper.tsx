import { TabsProps } from 'antd'
import Image from 'next/image'

export const tabItems: TabsProps['items'] = [
  {
    key: '1',
    label: 'Pawn',
    children: (
      <div className="flex flex-col items-center gap-10">
        <span className="text-[1em] md:text-[3em]">
          The mighty <strong>pawn</strong>! <br />
        </span>
        <section className="flex justify-center items-center gap-x-12">
          <Image
            src="/hex_pawnMovement.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noBoard"
          />
          <span className="text-[1.5em]">
            It isn`t any different from regular chess. At the start of the game,
            the player can move one or two spaces. <br />
            From then, only one up is allowed.
          </span>
        </section>
        <section className="flex justify-center items-center gap-x-12">
          <span className="text-[1.5rem]">
            The capturing is exactly the same... , except it`s not... <br />
          </span>
          <Image
            src="/hex_pawnBeforeCapture.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noBoard"
          />
        </section>
        <section className="flex justify-center items-center gap-x-12">
          <Image
            src="/hex_pawnAfterCaptureLeft.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noBoard"
          />
          <span className="text-[1.5em]">
            Whether you take on the left or right, that will change the outcome
            of how close you are to sending the pawn to the `end` of the board.
            If you take on the left there`s 3 spaces left, if you take on the
            right there`s 4.
          </span>
          <Image
            src="/hex_pawnAfterCaptureRight.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noBoard"
          />
        </section>
      </div>
    ),
  },
  {
    key: '2',
    label: 'King',
    children: (
      <div className="flex flex-col items-center gap-10">
        <span className="text-[3em]">
          The fragile <strong>king</strong>!
        </span>
        <section className="flex justify-center items-center gap-x-12">
          <span className="text-[1.5em]">
            In regular chess, the king moves are the same as the queen`s, but
            for only one space over. <br />
            The same apply here too.
          </span>
          <Image
            src="/hex_kingMovement.jpg"
            height={600}
            width={600}
            alt="noBoard"
          />
        </section>
      </div>
    ),
  },
  {
    key: '3',
    label: 'Queen',
    children: (
      <div className="flex flex-col items-center gap-10">
        <span className="text-[3em]">
          The <strong>QUEEN</strong>!
        </span>
        <section className="flex justify-center items-center gap-x-12">
          <span className="text-[1.5em]">
            It is the most powerful piece in hexagonal chess! <br />
            But it`s kinda confusing...? <br />
            Well not really...
          </span>
          <Image
            src="/hex_queenMovement.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noQueen"
          />
        </section>
        <section className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-x-16">
              <Image
                src="/hex_diagonalMoves.jpg"
                height={500}
                width={500}
                className="w-[26vw] h-[28vw]"
                alt="noMoves"
              />
              <span className="text-[1.5em] w-[26rem]">
                Even in regular chess, you can think of the queen as the bishop
                and rook together, and that applies here too!
              </span>
              <Image
                src="/hex_straightMoves.jpg"
                height={500}
                width={500}
                className="w-[26vw] h-[28vw]"
                alt="noMoves"
              />
            </div>
            <Image
              src="/hex_queenLegalMoves.jpg"
              height={500}
              width={500}
              className="w-[26vw] h-[28vw]"
              alt="noMoves"
            />
          </div>
        </section>
      </div>
    ),
  },
  {
    key: '4',
    label: 'Bishop',
    children: (
      <div className="flex flex-col items-center gap-10">
        <span className="text-[3em]">
          The stealthy <strong>bishop</strong>!
        </span>
        <section className="flex justify-center items-center gap-x-12">
          <Image
            src="/hex_bishopLegalMoves.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noBoard"
          />
          <span className="text-[1.5em]">
            It might be confusing to know which line is diagonal and which is
            straight. In the hexagonal board, if it helps you can think of
            diagonal the hexagon that doesn`t touch with the piece directly.
            <br />
            Although don`t confuse it with forward hexagons, the bishop can`t
            move there!
          </span>
          <Image
            src="/hex_bishopMovement.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noBoard"
          />
        </section>
        <section className="flex justify-center items-center gap-x-12">
          <Image
            src="/hex_allBishops.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noBoard"
          />
          <span className="text-[1.5em]">
            As you might have seen in the first image, we have 3 bishops. <br />
            One bishop per each color.
          </span>
        </section>
        <section className="flex justify-center items-center gap-x-12">
          <div className="flex flex-col items-center gap-y-12">
            <span className="text-[1.5em]">
              Look at the capturing below. Although this might seem like it`s
              blocked, that`s a legal move.
            </span>
            <div className="flex gap-x-10">
              <Image
                src="/hex_bishopBeforeCapture.jpg"
                height={500}
                width={500}
                className="w-[26vw] h-[28vw]"
                alt="noBoard"
              />
              <Image
                src="/hex_bishopAfterCapture.jpg"
                height={500}
                width={500}
                className="w-[26vw] h-[28vw]"
                alt="noBoard"
              />
            </div>
          </div>
        </section>
      </div>
    ),
  },
  {
    key: '5',
    label: 'Knight',
    children: (
      <div className="flex flex-col items-center gap-10">
        <span className="text-[3em]">
          The holy <strong>knight</strong>!
        </span>
        <section className="flex justify-center items-center gap-x-12">
          <span className="text-[1.5em]">
            The moves are the same, two steps forward, one step over. <br />
            Forward as in straight, don`t confuse it with diagonal.
          </span>
          <Image
            src="/hex_knightMovement.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noBoard"
          />
        </section>
        <section className="flex justify-center items-center gap-x-12">
          <Image
            src="/hex_knightBeforeCapture.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noKnight"
          />
          <span className="text-[1.5em]">
            In normal chess the knight can move up to 8 spaces, here it can move
            up to 12!
          </span>
          <Image
            src="/hex_knightAfterCapture.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noKnight"
          />
        </section>
      </div>
    ),
  },
  {
    key: '6',
    label: 'Rook',
    children: (
      <div className="flex flex-col items-center gap-10">
        <span className="text-[3em]">
          The deadly <strong>rook</strong>!
        </span>
        <section className="flex justify-center items-center gap-x-12">
          <span className="text-[1.5em]">
            It is the most similar piece from the regular chess. <br />
            It can move in any file that it touches.
          </span>
          <Image
            src="/hex_rookMovement.jpg"
            height={500}
            width={500}
            className="w-[26vw] h-[28vw]"
            alt="noBoard"
          />
        </section>
      </div>
    ),
  },
]

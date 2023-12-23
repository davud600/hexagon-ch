'use client'
import { useEffect, useState } from 'react'
import { pieces } from './helper'
import {
  Hex,
  HexGrid,
  Hexagon,
  Layout,
  Path,
  Pattern,
  GridGenerator,
} from 'react-hexgrid'

const Gameroom = () => {
  const [boardState, setBoardState] = useState(pieces)
  const hexagons = GridGenerator.hexagon(4).map((hex, index) => ({
    ...hex,
    content: `${hex.q},${hex.r}`, // Using q and r coordinates for content
    key: `hex-${index}`, // Adding a unique key
  }))

  const hexWidth = 5

  useEffect(() => {
    document.querySelectorAll('.hexagon-group').forEach((element) => {
      element.addEventListener('click', () => {
        console.log('clicked class')
      })
    })
  }, [])
  return (
    <div className="flex align-middle justify-around h-[85vh]">
      <div className="hidden md:flex md:items-center">settings</div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-between">
          <span className="text-white text-[1.5em]">Player 1</span>
          <span className="text-white text-[1.5em]">04:12</span>
        </div>
        <HexGrid
          width={document.documentElement.clientWidth < 500 ? 350 : 600}
          height={800}
        >
          <Layout
            size={{ x: 3.8, y: 3.8 }}
            flat={true}
            origin={{ x: 0, y: 0 }}
            spacing={1.9}
          >
            {hexagons.map((hex) => (
              <Hexagon
                key={hex.key}
                onClick={() => console.log(Number(hex.key.slice(4)))}
                q={hex.q}
                spacing={1}
                r={hex.r}
                fill="#f3f3f3" // Set hexagon fill color
                color="red"
                stroke={
                  Number(hex.key.slice(4)) % 2 === 0
                    ? '#f33333'
                    : Number(hex.key.slice(4)) % 3 === 0
                    ? '#000000'
                    : '#f0f0f0f0'
                }
                strokeWidth={6}
                s={hex.s}
                alignmentBaseline="hanging"
              ></Hexagon>
            ))}
          </Layout>
        </HexGrid>
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

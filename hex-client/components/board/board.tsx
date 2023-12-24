'use client'

import { Pieces } from '@/constants/board-objects'
import { getModuleColorFromRowIndex } from '@/lib/board/board'
import { useEffect, useState } from 'react'
import { BoardModule } from './module'

export default function Board() {
  console.log(Pieces)
  const [parentWidth, setParentWidth] = useState(window.innerWidth)

  // 23 * 1 / 20 * 1 = 23/20
  // 46 * 2 / 40 * 2 = 92/40
  // 69 * 3 / 60 * 3 = 207/180
  // 92 * 4 / 80 * 4 = 368/320
  const width = window.innerWidth <= 768 ? 44 : 69
  const height = window.innerWidth <= 768 ? 38 : 60

  useEffect(() => {
    const handleResize = () => setParentWidth(window!.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const CONSTANT = 0.28 * height

  const x1 = (parentWidth - width) / 2
  const y1 = 10
  const x2 = x1 - width + CONSTANT
  const y2 = y1 + height * 0.5
  const x3 = x2 - width + CONSTANT
  const y3 = y2 + height * 0.5
  const x4 = x3 - width + CONSTANT
  const y4 = y3 + height * 0.5
  const x5 = x4 - width + CONSTANT
  const y5 = y4 + height * 0.5
  const x6 = x5 - width + CONSTANT
  const y6 = y5 + height * 0.5
  const x7 = x6
  const y7 = y6 + height
  const x8 = x7
  const y8 = y7 + height
  const x9 = x8
  const y9 = y8 + height
  const x10 = x9
  const y10 = y9 + height
  const x11 = x10
  const y11 = y10 + height

  const firstRow = Array.from({ length: 6 }, (_, index) => index) // rows starting from top-right / north-east
  const secondRow = Array.from({ length: 7 }, (_, index) => index)
  const thirdRow = Array.from({ length: 8 }, (_, index) => index)
  const fourthRow = Array.from({ length: 9 }, (_, index) => index)
  const fifthRow = Array.from({ length: 10 }, (_, index) => index)
  const sixthRow = Array.from({ length: 11 }, (_, index) => index)
  const seventhRow = Array.from({ length: 10 }, (_, index) => index)
  const eighthRow = Array.from({ length: 9 }, (_, index) => index)
  const ninethRow = Array.from({ length: 8 }, (_, index) => index)
  const tenthRow = Array.from({ length: 7 }, (_, index) => index)
  const eleventhRow = Array.from({ length: 6 }, (_, index) => index)

  return (
    <div className="w-full h-full relative">
      {firstRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number)}
            key={`firstRow ${number}`}
            index={number}
            rowIndex={number}
            width={width}
            height={height}
            xPos={x1 + (width - CONSTANT) * number}
            yPos={y1 + height * number * 0.5}
          />
        )
      })}
      {secondRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number + 1)}
            key={`secondRow ${number}`}
            index={number + firstRow.length}
            rowIndex={number}
            width={width}
            height={height}
            xPos={x2 + (width - CONSTANT) * number}
            yPos={y2 + height * number * 0.5}
          />
        )
      })}
      {thirdRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number + 2)}
            key={`thirdRow ${number}`}
            index={number + secondRow.length + firstRow.length}
            rowIndex={number}
            width={width}
            height={height}
            xPos={x3 + (width - CONSTANT) * number}
            yPos={y3 + height * number * 0.5}
          />
        )
      })}
      {fourthRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number)}
            key={`fourthRow ${number}`}
            index={
              number + thirdRow.length + secondRow.length + firstRow.length
            }
            rowIndex={number}
            width={width}
            height={height}
            xPos={x4 + (width - CONSTANT) * number}
            yPos={y4 + height * number * 0.5}
          />
        )
      })}
      {fifthRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number + 1)}
            key={`fifthRow ${number}`}
            index={
              number +
              fourthRow.length +
              thirdRow.length +
              secondRow.length +
              firstRow.length
            }
            rowIndex={number}
            width={width}
            height={height}
            xPos={x5 + (width - CONSTANT) * number}
            yPos={y5 + height * number * 0.5}
          />
        )
      })}
      {sixthRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number + 2)}
            key={`sixthRow ${number}`}
            index={
              number +
              fifthRow.length +
              fourthRow.length +
              thirdRow.length +
              secondRow.length +
              firstRow.length
            }
            rowIndex={number}
            width={width}
            height={height}
            xPos={x6 + (width - CONSTANT) * number}
            yPos={y6 + height * number * 0.5}
          />
        )
      })}
      {seventhRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number + 1)}
            key={`seventhRow ${number}`}
            index={
              number +
              sixthRow.length +
              fifthRow.length +
              fourthRow.length +
              thirdRow.length +
              secondRow.length +
              firstRow.length
            }
            rowIndex={number}
            width={width}
            height={height}
            xPos={x7 + (width - CONSTANT) * number}
            yPos={y7 + height * number * 0.5}
          />
        )
      })}
      {eighthRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number)}
            key={`eighthRow ${number}`}
            index={
              number +
              seventhRow.length +
              sixthRow.length +
              fifthRow.length +
              fourthRow.length +
              thirdRow.length +
              secondRow.length +
              firstRow.length
            }
            rowIndex={number}
            width={width}
            height={height}
            xPos={x8 + (width - CONSTANT) * number}
            yPos={y8 + height * number * 0.5}
          />
        )
      })}
      {ninethRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number + 2)}
            key={`ninethRow ${number}`}
            index={
              number +
              eighthRow.length +
              seventhRow.length +
              sixthRow.length +
              fifthRow.length +
              fourthRow.length +
              thirdRow.length +
              secondRow.length +
              firstRow.length
            }
            rowIndex={number}
            width={width}
            height={height}
            xPos={x9 + (width - CONSTANT) * number}
            yPos={y9 + height * number * 0.5}
          />
        )
      })}
      {tenthRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number + 1)}
            key={`tenthRow ${number}`}
            index={
              number +
              ninethRow.length +
              eighthRow.length +
              seventhRow.length +
              sixthRow.length +
              fifthRow.length +
              fourthRow.length +
              thirdRow.length +
              secondRow.length +
              firstRow.length
            }
            rowIndex={number}
            width={width}
            height={height}
            xPos={x10 + (width - CONSTANT) * number}
            yPos={y10 + height * number * 0.5}
          />
        )
      })}
      {eleventhRow.map((number) => {
        return (
          <BoardModule
            color={getModuleColorFromRowIndex(number)}
            key={`eleventhRow ${number}`}
            index={
              number +
              tenthRow.length +
              ninethRow.length +
              eighthRow.length +
              seventhRow.length +
              sixthRow.length +
              fifthRow.length +
              fourthRow.length +
              thirdRow.length +
              secondRow.length +
              firstRow.length
            }
            rowIndex={number}
            width={width}
            height={height}
            xPos={x11 + (width - CONSTANT) * number}
            yPos={y11 + height * number * 0.5}
          />
        )
      })}
    </div>
  )
}

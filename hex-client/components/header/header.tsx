import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="flex h-14 border-b-2 border-b-white w-full md:justify-center">
      <div className="flex items-center justify-around gap-x-28 md:justify-between w-full md:w-[90%]">
        <Link className="flex items-center" href="./">
          <Image width={50} height={50} alt="no piece" src="/hexagon.svg" />
          <span className="text-white">Chess</span>
        </Link>
        <Image
          height={50}
          width={300}
          alt="no pieces"
          src="/allPiecesGray.svg"
          className="hidden md:flex"
          style={{ background: 'rgba(24, 24, 24, 0.5)' }}
        />
        <Button className="border-white text-white">Log in</Button>
      </div>
    </div>
  )
}

import Image from 'next/image'
import { TwitterOutlined, InstagramOutlined } from '@ant-design/icons'

export const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className="flex h-full border-t-2 border-t-white w-full md:justify-center">
      <div className="flex w-full md:w-[95%] justify-around align-middle items-center md:justify-between">
        <Image alt="no piece" height={40} width={40} src="/confrontation.png" />
        <span className="text-white">hexagon {date}</span>
        <div className="flex gap-x-6">
          <TwitterOutlined style={{ color: 'white' }} />
          <InstagramOutlined style={{ color: 'white' }} />
        </div>
      </div>
    </div>
  )
}

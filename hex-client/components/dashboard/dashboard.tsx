'use client'
import Image from 'next/image'
import { Footer } from '../shared/footer/footer'
import { Button, Modal } from 'antd'
import { useState } from 'react'
import Link from 'next/link'

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-y-28 items-center w-full h-[88vh] justify-center">
        <Image
          width={600}
          height={600}
          src="/homeGray.svg"
          alt="no fav"
          //   style={{ filter: 'invert(1)' }}
        />
        <div className="flex flex-col gap-y-4">
          <Link
            className="bg-emerald-600 w-[13rem] h-[2.5rem] flex items-center justify-center rounded-md"
            href="/game"
          >
            <span className="text-white bg-emerald-600">Play</span>
          </Link>
          <Link
            className="bg-emerald-600 w-[13rem] h-[2.5rem] flex items-center justify-center rounded-md"
            href="/tutorial"
          >
            <span className="text-white bg-emerald-600">Tutorial</span>
          </Link>
          <Link
            className="bg-emerald-600 w-[13rem] h-[2.5rem] flex items-center justify-center rounded-md"
            href="/settings"
          >
            <span className="text-white bg-emerald-600">Settings</span>
          </Link>
        </div>
      </div>
      <Footer />
      {/* <div
        className={
          modalOpen
            ? 'flex absolute w-60 h-60 bg-red-700 top-[40%] right-[44%]'
            : 'hidden'
        }
      >
        How do you wanna play?
      </div> */}
      <Modal
        open={modalOpen}
        closable
        onCancel={() => setModalOpen(false)}
        style={{ all: 'unset' }}
      >
        hehes
      </Modal>
    </div>
  )
}

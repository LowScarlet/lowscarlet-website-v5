"use client"

import Image from "next/image";
import { BiExpandAlt } from 'react-icons/bi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiGithub } from "react-icons/fi";
import { Fragment, ReactNode, useState } from "react";
import listClassName from "../utils/listClassName";
import { Transition, Dialog } from "@headlessui/react";

export default function Header({
  children,
  prefix,
  suffix
}: {
  children?: ReactNode,
  suffix?: ReactNode,
  prefix?: ReactNode
}) {
  const [openSidebar, setOpenSidebar] = useState(false)

  const profileImgUrl = '/images/pp.png'
  const name = 'Tegar Maulana Fahreza'
  const nickname = 'LowScarlet'

  const love = 12

  return (<>
    <header className={
      listClassName([
        'flex items-center space-x-2'
      ])
    }>
      <button
        className={
          listClassName([
            'h-12 w-12 group'
          ])
        }
        onClick={() => {
          setOpenSidebar(true)
        }}
      >
        {
          prefix ?? (
            <div className={
              listClassName([
                'transition duration-300 ease-in-out',
                'hover:opacity-50',
                'relative rounded-full overflow-hidden'
              ])
            }>
              <Image width={52} height={52} quality={25} src={profileImgUrl} alt={"Profile Image's"} />
              <div className={
                listClassName([
                  'absolute inset-0 flex items-center justify-center'
                ])
              }>
                <BiExpandAlt className={
                  listClassName([
                    'transition duration-300 transition-opacity',
                    'opacity-0 group-hover:opacity-100',
                    'text-xl'
                  ])
                } />
              </div>
            </div>
          )
        }
      </button>
      <div className={
        listClassName([
          'grow'
        ])
      }>
        {
          children ?? (
            <div>
              <h1 className={
                listClassName([
                  'text-base font-bold dark:text-white text-gray-700'
                ])
              }>
                {name}
              </h1>
              <p className={
                listClassName([
                  'text-sm dark:text-gray-400 text-gray-500'
                ])
              }>
                <FiGithub className={
                  listClassName([
                    'inline'
                  ])
                } /> {nickname}
              </p>
            </div>
          )
        }
      </div>
      <button
        className={
          listClassName([
            'h-12 w-12 group'
          ])
        }
      >
        {
          suffix ?? (
            <div className={
              listClassName([
                'transition duration-300 ease-in-out',
                'hover:cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:text-gray-400 dark:hover:text-white hover:brightness-150',
                'rounded-full overflow-hidden font-bold',
              ])
            }>
              <div>
                <div className={
                  listClassName([
                    'flex justify-center items-center',
                    'dark:text-current text-violet-500 text-2xl'
                  ])
                }>
                  <AiOutlineHeart className={
                    listClassName([
                      'group-hover:hidden'
                    ])
                  } />
                  <AiFillHeart className={
                    listClassName([
                      'group-hover:inline hidden'
                    ])
                  } />
                </div>
              </div>
              <h1 className={
                listClassName([
                  'text-xs'
                ])
              }>
                {love}
              </h1>
            </div>
          )
        }
      </button>
    </header>
  </>)
}
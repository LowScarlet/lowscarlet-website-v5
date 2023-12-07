/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { BiExpandAlt, BiLogoLinkedin } from 'react-icons/bi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TypeAnimation } from "react-type-animation";
import Badge from "./_components/Badge";
import { useState } from "react";
import CommentsModal from "./_components/CommentsModal";
import React from "react";
import Projects from "./_components/projects/Projects";
import { techs } from "./_components/Techs";
import { imageModal } from "./_components/imageViewers/imageViewerInterface";
import ImageViewerModal from "./_components/imageViewers/imageViewerModal";

const social_media = [
  {
    href: 'https://github.com/LowScarlet',
    icon: <FiGithub className='text-2xl' />,
  },
  {
    href: 'https://www.instagram.com/low_scarlet',
    icon: <FiInstagram className='text-2xl' />,
  },
  {
    href: 'https://www.linkedin.com/in/tegar-maulana-fahreza-04615a221',
    icon: <BiLogoLinkedin className='text-2xl' />,
  },
  {
    href: 'mailto:tegarmaulanafahreza.email@gmail.com',
    icon: <FiMail className='text-2xl' />,
  },
]

export default function Home() {
  const [love, setLove] = useState(0)

  const [isImageViewerModal, setIsImageViewerModal] = useState<imageModal>({
    isOpen: false,
    image: null
  })

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

  const { nextJs, expressJs, prismaOrm } = techs

  return (<>
    <main className="max-w-md mx-auto px-4 select-none">
      <div className="py-10">
        <div className="flex items-center space-x-2">
          <button className="group" onClick={() => {
            setIsImageViewerModal({
              isOpen: true,
              image: {
                title: 'Profile Page',
                url: '/images/pp.png'
              }
            })
          }}>
            <div className="relative h-12 w-12 rounded-full overflow-hidden hover:opacity-50 transition duration-300 ease-in-out">
              <Image width={100} height={100} quality={100} src={"/pp.png"} alt={"/pp.png"} />
              <div className="absolute inset-0 flex items-center justify-center">
                <BiExpandAlt className="opacity-0 group-hover:opacity-100 text-xl transition duration-300 transition-opacity" />
              </div>
            </div>
          </button>
          <div className="grow">
            <h1 className="text-base font-bold dark:text-white text-gray-700">
              Tegar Maulana Fahreza
            </h1>
            <p className="text-sm dark:text-gray-400 text-gray-500">@LowScarlet</p>
          </div>
          <button
            onClick={() => {
              setIsCommentModalOpen(true)
            }}
            className="transition duration-300 ease-in-out h-12 w-12 rounded-full overflow-hidden flex justify-center items-center group hover:cursor-pointer dark:text-gray-400 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:hover:text-white hover:brightness-150"
          >
            <div>
              <div className="flex justify-center items-center dark:text-current text-violet-500">
                <AiOutlineHeart className="text-2xl font-bold group-hover:hidden" />
                <AiFillHeart className="text-2xl font-bold group-hover:inline hidden" />
              </div>
              <h1 className="text-xs font-bold text-center">{love}</h1>
            </div>
          </button>
        </div>
      </div>
      <div className="text-xl dark:text-gray-400 text-gray-700">
        <h2 className="pb-4 font-bold">
          I make <TypeAnimation
            className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            preRenderFirstString={true}
            sequence={[
              'websites',
              1000,
              'frontends',
              1000,
              'backends',
              1000,
              'apps',
              1000,
            ]}
            speed={40}
            repeat={Infinity}
          />
        </h2>
        <p className="pb-4">
          I'm Tegar, an Indonesian web developer with a deep passion for technology. I enjoy crafting functional and visually appealing websites.
        </p>
        <p>
          Currently working in a small and messing project with <Badge title={nextJs.title} icon={nextJs.icon} href={nextJs.link} />, <Badge title={expressJs.title} icon={expressJs.icon} href={expressJs.link} />, <Badge title={prismaOrm.title} icon={prismaOrm.icon} href={prismaOrm.link} /> & some other tooling.
        </p>
      </div>
      <div className="py-8">
        <div className="flex flex-row mt-3 gap-3 overflow-x-auto py-2">
          {
            social_media.map((item, index) => (
              <Link target="_blank" key={index} href={item.href} className="flex flex-row items-center justify-start gap-2.5 border text-neutral-900 dark:text-neutral-100 dark:border-neutral-700 border-neutral-200 dark:bg-neutral-700 bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 ease-in-out rounded-md px-3 py-2.5">
                {item.icon}
              </Link>
            ))
          }
        </div>
      </div>
      <div className="pb-10">
        <Projects />
      </div>
    </main>
  </>)
}

/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import Image from "next/image";
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiPrisma } from 'react-icons/si';
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { MdOutlineArrowDownward, MdWhatsapp } from 'react-icons/md';
import { BiLogoLinkedin, BiSticker } from 'react-icons/bi';
import { AiFillHeart, AiOutlineHeart, AiOutlineSend } from 'react-icons/ai';
import { TypeAnimation } from "react-type-animation";
import Badge from "./_components/Badge";
import ProjectDisclosure from "./_components/ProjectsDisclousure";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [love, setLove] = useState(0)
  const count_projects = 16
  const projects = [
    {
      title: 'PumpkinProject',
      icon: '/pp.png',
      badges: [
        <Badge key={0} title="Private" icon={<FiGithub />} />,
        <Badge key={1} title="Next.js" icon={<TbBrandNextjs />} />,
        <Badge key={2} title="Express.js" icon={<SiExpress />} />
      ],
      context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      href: '/projects/pumpkinproject',
    },
    {
      title: 'Pumpkincraft',
      icon: '/pp.png',
      badges: [
        <Badge key={0} title="Private" icon={<FiGithub />} />,
        <Badge key={1} title="Next.js" icon={<TbBrandNextjs />} />,
        <Badge key={2} title="Express.js" icon={<SiExpress />} />
      ],
      context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      href: '/projects/pumpkincraft',
    },
    {
      title: 'Etika Chat',
      icon: '/pp.png',
      badges: [
        <Badge key={0} title="Private" icon={<FiGithub />} />,
        <Badge key={1} title="Next.js" icon={<TbBrandNextjs />} />,
        <Badge key={2} title="Express.js" icon={<SiExpress />} />
      ],
      context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      href: '/projects/etikachat',
    },
    {
      title: 'Chatify',
      icon: '/pp.png',
      badges: [
        <Badge key={0} title="Private" icon={<FiGithub />} />,
        <Badge key={1} title="Next.js" icon={<TbBrandNextjs />} />,
        <Badge key={2} title="Express.js" icon={<SiExpress />} />
      ],
      context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      href: '/projects/chatify',
    },
  ]
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
      href: 'https://wa.me/6281270634992',
      icon: <MdWhatsapp className='text-2xl' />,
    },
    {
      href: 'mailto:tegarmaulanafahreza.email@gmail.com',
      icon: <FiMail className='text-2xl' />,
    },
  ]
  return (<>
    <main className="max-w-md mx-auto px-4 select-none">
      <div className="py-10">
        <div className="flex items-center space-x-2">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <Image width={100} height={100} quality={100} src={"/pp.png"} alt={"/pp.png"} />
          </div>
          <div className="grow">
            <h1 className="text-base font-bold dark:text-white text-gray-700">Tegar Maulana Fahreza</h1>
            <p className="text-sm dark:text-gray-400 text-gray-500">@LowScarlet</p>
          </div>
          <button
            onClick={() => {
              setIsOpen(true)
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
          />.
        </h2>
        <p className="pb-4">
          I'm Tegar, an Indonesian web developer with a deep passion for technology. I enjoy crafting functional and visually appealing websites.
        </p>
        <p>
          Currently working in a small and messing project with <Badge title="Next.js" icon={<TbBrandNextjs />}></Badge>, <Badge title="Express.js" icon={<SiExpress />}></Badge>, <Badge title="Prisma ORM" icon={<SiPrisma />}></Badge> some other tooling.
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
        <h1 className="text-2xl font-bold dark:text-white text-gray-700">Projects ({count_projects})</h1>
        <div className="flex flex-col py-4">
          {
            projects.map((item, index) => (
              <ProjectDisclosure
                key={index}
                title={item.title}
                icon={item.icon}
                badges={item.badges}
                href={item.href}
              >
                {item.context}
              </ProjectDisclosure>
            ))
          }
        </div>
        <Link href={""} className="flex flex-row items-center justify-center gap-2.5 border text-neutral-900 dark:text-neutral-100 dark:border-neutral-700 border-neutral-200 dark:bg-neutral-700 bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 ease-in-out rounded-md px-1.5 py-1.5">
          <MdOutlineArrowDownward className='' /> Load More..
        </Link>
      </div>
    </main>


    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => { setIsOpen(false) }}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-dark-calm p-4 text-sm text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 mb-4"
                >
                  Comments
                </Dialog.Title>
                <div className="flex flex-col-reverse h-64 max-h-72 overflow-y-scroll">
                  {
                    [1, 2, 3, 4, 5,6,7,8,9].map((item, index) => (
                      <div key={index} className="mt-4">
                        <div className="flex items-center gap-2 text-gray-500">
                          <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                          <div className="grow text-xs text-gray-200">
                            <h1 className="font-bold">Tegar Maulana Fahreza</h1>
                            <p className="text-gray-300">Hello World!</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="mt-4 flex justify-center items-center gap-2 bg-stone-950 rounded-2xl py-2 px-4 text-gray-500">
                  <div className="h-8 w-8 rounded-full bg-dark-calm"></div>
                  <div className="grow">
                    <input type="text" className="w-full bg-transparent py-2 focus:outline-none" placeholder="Komentar..." />
                  </div>
                  <div className="flex gap-2">
                    <button>
                      <BiSticker className='text-2xl' />
                    </button>
                    <button>
                      <AiOutlineSend className='text-2xl' />
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>)
}

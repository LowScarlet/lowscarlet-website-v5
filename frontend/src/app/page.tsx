/* eslint-disable react/no-unescaped-entities */
"use client"

// Test

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiPrisma } from 'react-icons/si';
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { MdOutlineArrowDownward, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdWhatsapp } from 'react-icons/md';
import { BiLogoLinkedin } from 'react-icons/bi';
import { Disclosure, Transition } from "@headlessui/react";
import { TypeAnimation } from "react-type-animation";

function Badge({
  title,
  icon
}: {
  title: ReactNode,
  icon: ReactNode
}) {
  return (
    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
      <span className="pe-1">{icon}</span> {title}
    </span>
  )
}

function ProjectAccordion({
  children,
  title,
  icon,
  badges,
  href
}: {
  children?: ReactNode,
  title: ReactNode,
  icon: string,
  badges: Array<ReactNode>,
  href: string
}) {
  return (
    <Disclosure>
      {({ open }) => (<>
        <Disclosure.Button className="py-1 group">
          <div className="flex flex-row gap-0 items-center justify-between lg:justify-center mt-3 mb-3 w-full">
            <div className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
              <h1 className={"text-lg font-medium leading-[1.3em] text-left group-hover:text-white " + (open ? "text-white" : "text-gray-300")}>
                {title}
              </h1>
            </div>
            <div className={"w-full mr-2 border-y rounded-2 transition duration-110 opacity-80 group-hover:border-white " + (open ? "border-white" : "border-gray-700")} />
            {
              open ? <MdOutlineKeyboardArrowDown className='text-3xl transition duration-110 opacity-80 text-white' /> :
                <MdOutlineKeyboardArrowRight className='text-3xl text-gray-500 transition duration-110 opacity-80 group-hover:text-white' />
            }
          </div>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel>
            <div className="px-2 py-4">
              <div className="space-y-4">
                <div className="bg-stone-950 rounded-xl py-4">
                  <div className="flex justify-center items-center">
                    <Image className="rounded-full" width={64} height={64} quality={100} src={icon} alt={'Project Icon'} />
                  </div>
                </div>
                <div className="flex overflow-hidden gap-3">
                  {
                    badges.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))
                  }
                </div>
                <p className="text-gray-300">
                  {children}
                </p>
                <Link href={href} className="flex flex-row items-center justify-center gap-2.5 text-white transition duration-300 ease-in-out bg-neutral-700 hover:bg-neutral-900 rounded-md px-1.5 py-1.5">
                  <MdOutlineArrowDownward className='' /> Read More..
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </Transition>
      </>)}
    </Disclosure>
  )
}

export default function Home() {
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
  return (<>
    <main className="max-w-md mx-auto px-4">
      <div className="py-10">
        <div className="flex items-center space-x-2">
          <div className="h-12 w-12 bg-stone-950 rounded-full overflow-hidden">
            <Image width={100} height={100} quality={100} src={"/pp.png"} alt={"/pp.png"} />
          </div>
          <div className="grow">
            <h1 className="text-base font-bold text-white">Tegar Maulana Fahreza</h1>
            <p className="text-sm text-gray-400">@LowScarlet</p>
          </div>
        </div>
      </div>
      <div className="text-xl text-gray-400">
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
          Currently working in a small and messing project with <Badge title="Next.js" icon={<TbBrandNextjs />}></Badge>, <Badge title="Express.js" icon={<SiExpress />}></Badge>, <Badge title="Prisa ORM" icon={<SiPrisma />}></Badge> some other tooling.
        </p>
      </div>
      <div className="py-8">
        <div className="flex flex-row mt-3 gap-3 overflow-x-auto py-2">
          <Link href={""} className="flex flex-row items-center justify-start gap-2.5 text-white transition duration-300 ease-in-out bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5">
            <FiGithub className='text-2xl' />
          </Link>
          <Link href={""} className="flex flex-row items-center justify-start gap-2.5 text-white transition duration-300 ease-in-out bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5">
            <FiInstagram className='text-2xl' />
          </Link>
          <Link href={""} className="flex flex-row items-center justify-start gap-2.5 text-white transition duration-300 ease-in-out bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5">
            <BiLogoLinkedin className='text-2xl' />
          </Link>
          <Link href={""} className="flex flex-row items-center justify-start gap-2.5 text-white transition duration-300 ease-in-out bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5">
            <FiMail className='text-2xl' />
          </Link>
          <Link href={""} className="flex flex-row items-center justify-start gap-2.5 text-white transition duration-300 ease-in-out bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5">
            <MdWhatsapp className='text-2xl' />
          </Link>
        </div>
      </div>
      <div className="pb-10">
        <h1 className="text-2xl font-bold">Projects ({count_projects})</h1>
        <div className="flex flex-col py-4">
          {
            projects.map((item, index) => (
              <ProjectAccordion
                key={index}
                title={item.title}
                icon={item.icon}
                badges={item.badges}
                href={item.href}
              >
                {item.context}
              </ProjectAccordion>
            ))
          }
        </div>
        <Link href={""} className="flex flex-row items-center justify-center gap-2.5 text-white transition duration-300 ease-in-out bg-neutral-700 hover:bg-neutral-900 rounded-md px-1.5 py-1.5">
          <MdOutlineArrowDownward className='' /> Load More..
        </Link>
      </div>
    </main>
  </>)
}

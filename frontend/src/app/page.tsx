/* eslint-disable react/no-unescaped-entities */
"use client"

// Test

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiPrisma } from 'react-icons/si';
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { MdOutlineArrowDownward, MdOutlineKeyboardArrowRight, MdWhatsapp } from 'react-icons/md';
import { BiLogoLinkedin } from 'react-icons/bi';

function Badge({ children }: { children?: ReactNode }) {
  return (
    <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
      {children}
    </span>
  )
}

function ProjectAccordion({ children, title }: { children?: ReactNode, title: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <button className="group" onClick={() => setOpen(true)}>
      <div className="flex flex-row gap-0 items-center justify-between lg:justify-center mt-3 mb-3 w-full">
        <div className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
          <h1 className="text-lg font-medium leading-[1.3em] text-left text-gray-300 group-hover:text-white">
            {title}
          </h1>
        </div>
        <div className="w-full mr-2 border-y border-gray-700 rounded-2 transition duration-110 opacity-80 group-hover:border-white" />
        <MdOutlineKeyboardArrowRight className='text-3xl text-gray-500 transition duration-110 opacity-80 group-hover:text-white' />
      </div>
    </button>
  )
}

export default function Home() {
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
          I make <span className="text-white">website</span><span className="font-bold text-white">s</span>.
        </h2>
        <p className="pb-4">
          I'm Tegar, an Indonesian web developer with a deep passion for technology. I enjoy crafting functional and visually appealing websites.
        </p>
        <p>
          Currently working in a small and messing project with <Badge><span className="pe-1"><TbBrandNextjs /></span> Next.js</Badge>, <Badge><span className="pe-1"><SiExpress /></span> Express.js</Badge>, <Badge><span className="pe-1"><SiPrisma /></span> Prisma</Badge> some other tooling.
        </p>
      </div>
      <div className="flex flex-row mt-3 gap-3 py-10">
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
      <div className="pb-10">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="flex flex-col py-4">
          <ProjectAccordion title={'PumpkinProject'}>-</ProjectAccordion>
          <ProjectAccordion title={'Pumpkincraft'}>-</ProjectAccordion>
          <ProjectAccordion title={'Etika Chat'}>-</ProjectAccordion>
        </div>
        <Link href={""} className="flex flex-row items-center justify-center gap-2.5 text-white transition duration-300 ease-in-out bg-neutral-700 hover:bg-neutral-900 rounded-md px-1.5 py-1.5">
          <MdOutlineArrowDownward className='' /> Load More..
        </Link>
      </div>
    </main>
  </>)
}

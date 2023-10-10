"use client"

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { MdOutlineArrowDownward, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Disclosure, Transition } from "@headlessui/react";

export default function ProjectDisclosure({
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
          <div className="flex flex-row gap-0 items-center justify-between lg:justify-center mt-3 mb-3 w-full px-2">
            <div className="flex flex-col justify-start opacity-100 flex-none shrink-0 h-auto relative whitespace-pre w-auto mr-3">
              <h1 className={"text-lg font-medium leading-[1.3em] text-left dark:group-hover:text-white text-gray-700 " + (open ? "dark:text-white text-gray-700" : "dark:text-gray-300 text-gray-500")}>
                {title}
              </h1>
            </div>
            <div className={"w-full mr-2 border-y rounded-2 transition duration-110 opacity-80 dark:group-hover:border-white border-gray-700 " + (open ? "dark:border-white border-gray-700" : "dark:border-gray-700 border-gray-500")} />
            {
              open ? <MdOutlineKeyboardArrowDown className='text-3xl transition duration-110 opacity-80 dark:text-white text-gray-700' /> :
                <MdOutlineKeyboardArrowRight className='text-3xl dark:text-gray-500 text-gray-700 transition duration-110 opacity-80 dark:group-hover:text-white group-hover:text-gray-700' />
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
                <div className="flex items-center justify-center">
                  <div className="relative w-full h-24 rounded-xl overflow-hidden">
                    <Image width={100} height={100} quality={100} src={icon} alt="Foto Anda" className="absolute inset-0 w-full h-full object-cover filter blur-sm dark:brightness-50 brightness-150" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image className="rounded-full" width={64} height={64} quality={100} src={icon} alt={'Project Icon'} />
                    </div>
                  </div>
                </div>
                <div className="flex overflow-hidden gap-3">
                  {
                    badges.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))
                  }
                </div>
                <p className="dark:text-gray-300 text-gray-500">
                  {children}
                </p>
                <Link href={href} className="flex flex-row items-center justify-center gap-2.5 border text-neutral-900 dark:text-neutral-100 dark:border-neutral-700 border-neutral-200 dark:bg-neutral-700 bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 ease-in-out rounded-md px-1.5 py-1.5">
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
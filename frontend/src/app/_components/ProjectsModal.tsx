/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import { useRouter } from 'next/navigation'

import Image from "next/image";
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineLink } from 'react-icons/ai';

import { FiInstagram, FiMail } from 'react-icons/fi';
import { MdWhatsapp } from 'react-icons/md';
import { BiLogoLinkedin } from 'react-icons/bi';
import { Dispatch, Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Badge from "./Badge";
import Link from "next/link";

const badges = [
  <Badge key={0} title="Private" icon={<FiGithub />} />,
  <Badge key={1} title="Next.js" icon={<TbBrandNextjs />} />,
  <Badge key={2} title="Express.js" icon={<SiExpress />} />
]

const social_media = [
  {
    href: 'https://github.com/LowScarlet',
    icon: <FiGithub className='text-2xl' />,
  },
  {
    href: 'https://www.instagram.com/low_scarlet',
    icon: <AiOutlineLink className='text-2xl' />,
  },
]

export default function ProjectsModal({
  isOpen,
  setIsOpen,
  projectId
}: {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  projectId: string | null
}) {
  const router = useRouter()
  return (<>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {
        setIsOpen(false)
      }}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 dark:bg-black dark:bg-opacity-75 bg-neutral-200 bg-opacity-75" />
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
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl dark:bg-dark-calm bg-white p-4 text-sm text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex justify-center mb-2 dark:text-white text-gray-700"
                >
                  <div className="grow text-lg font-bold">
                    Etika Chat ({projectId})
                  </div>
                  <div className="flex justify-center items-center">
                    <button onClick={() => { setIsOpen(false) }}>
                      <AiOutlineClose className="text-2xl" />
                    </button>
                  </div>
                </Dialog.Title>
                <div className="h-72 max-h-80 overflow-y-scroll px-1">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center">
                      <div className="relative w-full h-24 rounded-xl overflow-hidden">
                        <Image width={100} height={100} quality={100} src={'/pp.png'} alt="Foto Anda" className="absolute inset-0 w-full h-full object-cover filter blur-sm dark:brightness-50 brightness-150" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image className="rounded-full" width={64} height={64} quality={100} src={'/pp.png'} alt={'Project Icon'} />
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row mt-3 gap-3 overflow-x-auto py-2">
                  {
                    social_media.map((item, index) => (
                      <Link target="_blank" key={index} href={item.href} className="flex flex-row items-center justify-start gap-2.5 border text-neutral-900 dark:text-neutral-100 dark:border-neutral-700 border-neutral-200 dark:bg-neutral-700 bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 ease-in-out rounded-md px-3 py-2.5">
                        {item.icon}
                      </Link>
                    ))
                  }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>)
}
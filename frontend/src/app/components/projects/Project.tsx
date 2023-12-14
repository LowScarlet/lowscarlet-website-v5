"use client"

import listClassName from "@/app/utils/listClassName";
import { Disclosure, Transition } from "@headlessui/react";
import { AiOutlineHeart, AiOutlineLink, AiOutlineComment } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FiGithub } from 'react-icons/fi';
import { MdUpdate } from "react-icons/md";
import Image from "next/image";
import Button from "../Button";
import { BiExpandAlt } from "react-icons/bi";
import { useContext } from "react";

function timeout(delay: number) {
  return new Promise(res => setTimeout(res, delay))
}

export default function Project({
  index,
  project,
}: {
  index: number,
  project: any,
}) {
  const { title, loves, comments } = project

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            className={
              listClassName([
                'w-full',
              ])
            }
            id={'project-' + index.toString()}
            data-open={open}
            onClick={() => {
              const projectDivs = document.querySelectorAll<HTMLButtonElement>(`button[id^="project-"]:not(#project-${index.toString()})`);

              projectDivs.forEach((button) => {
                const isOpen = button.getAttribute("data-open") === 'true';
                if (isOpen) {
                  button.click();
                }
              });
            }}
          >
            <div className={
              listClassName([
                'transition duration-110',
                'group',
                'flex flex-row gap-x-2 items-center',
                'text-lg font-medium',
                'my-1 px-1',
                'hover:cursor-pointer'
              ])
            }>
              <div className={
                listClassName([
                  'dark:group-hover:text-white'
                ])
              }>
                {
                  open ? <IoIosArrowDown /> : <IoIosArrowForward />
                }
              </div>
              <div className={
                listClassName([
                  'relative flex justify-start w-full',
                  'dark:group-hover:text-white',
                  'mr-3'
                ])
              }>
                <h1>
                  {title}
                </h1>
              </div>
              <div className={
                listClassName([
                  'flex gap-x-4',
                  'dark:group-hover:text-white'
                ])
              }>
                <div className={
                  listClassName([
                    'flex gap-x-1 items-center'
                  ])
                }>
                  <AiOutlineHeart />
                  <span className={
                    listClassName([
                      'text-sm'
                    ])
                  }>
                    {loves}
                  </span>
                </div>
                <div className={
                  listClassName([
                    'flex gap-x-1 items-center'
                  ])
                }>
                  <AiOutlineComment />
                  <span className={
                    listClassName([
                      'text-sm'
                    ])
                  }>
                    {comments}
                  </span>
                </div>
              </div>
            </div>
          </Disclosure.Button>

          <div className={
            listClassName([
              'overflow-hidden'
            ])
          }>
            <Transition
              className={
                listClassName([
                  '',
                ])
              }
              enter="transition duration-100 ease-out"
              enterFrom="transform -translate-y-12 opacity-0"
              enterTo="transform -translate-y-0 opacity-100"

              leave="transition duration-100 ease-out"
              leaveFrom="transform -translate-y-0 opacity-0"
              leaveTo="transform -translate-y-12 opacity-100"
            >
              <Disclosure.Panel>
                <div
                  id={'project-' + index.toString() + '-panel'}
                  className={
                    listClassName([
                      'px-2 py-4',
                      'text-base'
                    ])
                  }>

                  <div className="">
                    <div className="w-full h-24 rounded-xl overflow-hidden">
                      <Image
                        width={100}
                        height={100}
                        quality={25}
                        src={'/images/default/projects_icon.png'}
                        alt="Foto Anda"
                        className={
                          listClassName([
                            'w-full h-full object-cover'
                          ])
                        }
                      />
                    </div>
                    <div className="flex -mt-8 mb-4 px-4 items-end gap-x-4">
                      <Image
                        width={64}
                        height={64}
                        quality={100}
                        src={'/images/default/projects_icon.png'}
                        alt={'Project Icon'}
                        className={
                          listClassName([
                            'rounded-xl'
                          ])
                        }
                      />
                      <div className={
                        listClassName([
                          'flex justify-end gap-x-2 w-full'
                        ])
                      }>
                        <div className={
                          listClassName([
                            'flex gap-x-1 items-center justify-end'
                          ])
                        }>
                          <MdUpdate />
                          <span className={
                            listClassName([
                              'text-sm'
                            ])
                          }>
                            1 Years Ago..
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={
                      listClassName([
                        'flex flex-col gap-y-8'
                      ])
                    }>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                      <ul className={
                        listClassName([
                          'flex flex-row gap-2 overflow-x-auto'
                        ])
                      }>
                        <Button
                          target='_blank'
                          href={''}
                        >
                          <AiOutlineHeart className='text-xl' />
                        </Button>
                        <Button
                          target='_blank'
                          href={''}
                        >
                          <AiOutlineComment className='text-xl' />
                        </Button>
                        <Button
                          target='_blank'
                          href={''}
                        >
                          <FiGithub className='text-xl' />
                        </Button>
                        <Button
                          target='_blank'
                          href={''}
                        >
                          <AiOutlineLink className='text-xl' />
                        </Button>
                        <span className="grow" />
                        <Button
                          target='_blank'
                          href={''}
                        >
                          <BiExpandAlt className='text-xl' />
                        </Button>
                      </ul>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </>
      )}
    </Disclosure>
  )
}
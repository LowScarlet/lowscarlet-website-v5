/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";
import { BiSticker } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";

export default function CommentsModal({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  const [isStickersOpen, setIsStickersOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const chats = [
    {
      id: 6,
      avatar: null,
      username: 'Sahrul',
      type: 'sticker',
      content: 'love-ya'
    },
    {
      id: 5,
      avatar: null,
      username: 'Sahrul',
      type: 'text',
      content: 'no prob'
    },
    {
      id: 4,
      avatar: null,
      username: 'LowScarlet',
      type: 'text',
      content: 'thanku'
    },
    {
      id: 3,
      avatar: null,
      username: 'Sahrul',
      type: 'sticker',
      content: 'love-ya'
    },
    {
      id: 2,
      avatar: null,
      username: 'LowScarlet',
      type: 'sticker',
      content: 'love-ya'
    },
    {
      id: 1,
      avatar: null,
      username: 'LowScarlet',
      type: 'text',
      content: 'Good Game!!'
    },
  ]
  const stickers = [
    'cool-blob.png',
    'dance-blob.png',
    'happy-ghast.png',
    'miku-w.png',
    'party.png'
  ]
  return (<>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {
        if (!isAuthOpen) {
          setIsOpen(false)
        }
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
                  as="div"
                  className="flex justify-center mb-2"
                >
                  <div className="grow text-lg font-bold">
                    Comments
                  </div>
                  <div className="flex justify-center items-center">
                    <button onClick={() => { setIsOpen(false) }}>
                      <AiOutlineClose className="text-2xl" />
                    </button>
                  </div>
                </Dialog.Title>
                <div className="flex flex-col-reverse h-64 max-h-72 overflow-y-scroll">
                  {
                    chats.map((item, index) => (
                      <div key={item.id} className={chats[(index + 1)]?.username === item.username ? 'mt-1' : 'mt-4'}>
                        <div className="flex gap-2 text-gray-500">
                          {
                            chats[(index + 1)]?.username === item.username ? (
                              <div className="w-8"></div>
                            ) : (
                              <div className="h-8 w-8 rounded-full overflow-hidden">
                                <Image width={100} height={100} quality={100} src={"/images/avatars/default-2.png"} alt={"/images/avatars/default-1.png"} />
                              </div>
                            )
                          }
                          <div className="grow text-xs text-gray-200">
                            {
                              chats[(index + 1)]?.username === item.username ? (
                                null
                              ) : (
                                <h1 className="font-bold">{item.username}</h1>
                              )
                            }
                            {
                              item.type === 'text' ? (
                                <p className="text-gray-300">{item.content}</p>
                              ) : (<>
                                <img className="rounded-xl" src="/images/stickers/dance-blob.png" alt="" width={100} height={100} />
                              </>)
                            }
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className="bg-stone-950 rounded-2xl text-gray-500 mt-4">
                  <div className="flex pt-2 px-4 text-xs">
                    <div className="grow">
                      Comment as <span className="font-bold">Guest726</span>.
                    </div>
                    <div>
                      <button>logout</button>
                    </div>
                  </div>
                  <div className={"py-2 px-4 " + (isStickersOpen ? '' : 'hidden')}>
                    <div className="flex">
                      <div className="grow text-base font-bold">Stickers</div>
                      <div className="flex justify-center items-center">
                        <button onClick={() => { setIsStickersOpen(false) }}>
                          <AiOutlineClose className="text-xl" />
                        </button>
                      </div>
                    </div>
                    <div className={"h-20 grid grid-cols-4 my-4 gap-4 overflow-y-scroll"}>
                      {
                        stickers.map((item, index) => (
                          <button key={index} onClick={() => { setIsAuthOpen(true) }}>
                            <div className="flex items-center justify-center">
                              <img width={50} height={50} src={"/images/stickers/" + item} alt="" />
                            </div>
                          </button>
                        ))
                      }
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2 py-2 px-4">
                    <div className="h-8 w-8 rounded-full bg-dark-calm"></div>
                    <div className="grow">
                      <input id="comment" name="comment" autoComplete="off" type="text" className="w-full bg-transparent py-2 focus:outline-none" placeholder="Comments..." />
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => { setIsStickersOpen(true) }}>
                        <BiSticker className='text-2xl' />
                      </button>
                      <button onClick={() => { setIsAuthOpen(true) }}>
                        <AiOutlineSend className='text-2xl' />
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
        <AuthModal isOpen={isAuthOpen} setIsOpen={setIsAuthOpen} />
      </Dialog>
    </Transition>
  </>)
}

function AuthModal({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  const [tab, setTab] = useState<string | null>(null)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {
        setTab(null)
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
                  as="div"
                  className="flex justify-center mb-2"
                >
                  <div className="grow text-lg font-bold"></div>
                  <div className="flex justify-center items-center">
                    <button onClick={() => { setIsOpen(false) }}>
                      <AiOutlineClose className="text-2xl" />
                    </button>
                  </div>
                </Dialog.Title>
                <div className='text-center my-4'>
                  {
                    tab === null ? (
                      <div>
                        <h1 className='text-xl font-bold'>Login as</h1>
                        <p className='text-xs text-gray-300'>Login as a member or guest account</p>
                        <div className='flex py-8 gap-4 px-2'>
                          <button onClick={() => { setTab('login') }} className="w-1/2 flex flex-row items-center justify-center gap-2.5 border text-neutral-900 dark:text-neutral-100 dark:border-neutral-700 border-neutral-200 dark:bg-neutral-700 bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 ease-in-out rounded-md px-1.5 py-1.5">
                            Member
                          </button>
                          <button className="w-1/2 flex flex-row items-center justify-center gap-2.5 border text-neutral-900 dark:text-neutral-100 dark:border-neutral-700 border-neutral-200 dark:bg-neutral-700 bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 ease-in-out rounded-md px-1.5 py-1.5">
                            Guest
                          </button>
                        </div>
                      </div>
                    ) : (
                      tab === 'login' ? (
                        <div>
                          <h1 className='text-xl font-bold'>Login</h1>
                          <p className='text-xs text-gray-300'>Login with your account</p>
                          <div className='flex flex-col text-left py-8 gap-4 px-2'>
                            <div>
                              <label htmlFor="username">
                                Username
                              </label>
                              <input id="username" name="username" className="mt-1 w-full py-2 px-4 rounded-md" type="text" placeholder="Username" />
                            </div>
                            <div>
                              <label htmlFor="password">
                                Password
                              </label>
                              <input id="password" name="password" className="mt-1 w-full py-2 px-4 rounded-md" type="password" placeholder="Password" />
                            </div>
                            <div>
                              <button className="w-full flex flex-row items-center justify-center gap-2.5 border text-neutral-900 dark:text-neutral-100 dark:border-neutral-700 border-neutral-200 dark:bg-neutral-700 bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 ease-in-out rounded-md px-1.5 py-1.5">
                                Login
                              </button>
                            </div>
                            <div>
                              <p className='text-xs text-gray-300'>Doesn't have account? <button onClick={() => { setTab('register') }}>Register</button> or <button onClick={() => { setTab(null) }}>Go Back</button></p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h1 className='text-xl font-bold'>Register</h1>
                          <p className='text-xs text-gray-300'>Register a account</p>
                          <div className='flex flex-col text-left py-8 gap-4 px-2'>
                            <div>
                              <label htmlFor="username">
                                Username
                              </label>
                              <input id="username" name="username" className="mt-1 w-full py-2 px-4 rounded-md" type="text" placeholder="Username" />
                            </div>
                            <div>
                              <label htmlFor="email">
                                Email
                              </label>
                              <input id="email" name="email" className="mt-1 w-full py-2 px-4 rounded-md" type="email" placeholder="Email (Optional)" />
                            </div>
                            <div>
                              <label htmlFor="password">
                                Password
                              </label>
                              <input id="password" name="password" className="mt-1 w-full py-2 px-4 rounded-md" type="password" placeholder="Password" />
                            </div>
                            <div>
                              <button className="w-full flex flex-row items-center justify-center gap-2.5 border text-neutral-900 dark:text-neutral-100 dark:border-neutral-700 border-neutral-200 dark:bg-neutral-700 bg-neutral-50 dark:hover:bg-neutral-900 transition duration-300 ease-in-out rounded-md px-1.5 py-1.5">
                                Register
                              </button>
                            </div>
                            <div>
                              <p className='text-xs text-gray-300'>Already have an account? <button onClick={() => { setTab('login') }}>Login</button> or <button onClick={() => { setTab(null) }}>Go Back</button></p>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  }
                  <p className='text-xs text-gray-300'>This site uses cookies to store user identity.</p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
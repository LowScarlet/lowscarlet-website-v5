/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"

import Image from "next/image";
import { IoMdDownload } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

import { Dispatch, Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../Button";
import { imageModal } from "./imageViewerInterface";

export default function ImageViewerModal({
  modal,
  setModal,
}: {
  modal: imageModal,
  setModal: Dispatch<SetStateAction<imageModal>>,
}) {
  const { image } = modal
  if (!image) {
    return (<></>)
  }
  return (<>
    <Transition appear show={modal.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {
        setModal({
          ...modal,
          isOpen: false
        })
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
                    {image.title}
                  </div>
                  <div className="flex justify-center items-center">
                    <button onClick={() => {
                      setModal({
                        ...modal,
                        isOpen: false
                      })
                    }
                    }>
                      <AiOutlineClose className="text-2xl" />
                    </button>
                  </div>
                </Dialog.Title>
                <div className=" overflow-y-scroll px-1">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center">
                      <div className="rounded-xl overflow-hidden">
                        <Image width={1000} height={1000} quality={100} src={image.url || '/images/default/projects_icon.png'} alt={image.title} className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-3 gap-3 overflow-x-auto py-2">
                  <Button target="_blank" href={image.url}>
                    <IoMdDownload className='text-2xl' />
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>)
}
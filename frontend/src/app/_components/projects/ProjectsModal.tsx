/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client"


import Image from "next/image";
import { FiGithub } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineLink } from 'react-icons/ai';

import { Dispatch, Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { projectModal } from './Projects';
import Badge from '../Badge';
import { techs } from '../Techs';
import Button from "../Button";

export default function ProjectsModal({
  modal,
  setModal,
}: {
  modal: projectModal,
  setModal: Dispatch<SetStateAction<projectModal>>,
}) {
  const { project } = modal
  if (!project) {
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
                    {project.title} ({project.id})
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
                <div className="h-72 max-h-80 overflow-y-scroll px-1">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-center">
                      <div className="relative w-full h-24 rounded-xl overflow-hidden">
                        <Image width={100} height={100} quality={100} src={project.icon || '/images/default/projects_icon.png'} alt="Foto Anda" className="absolute inset-0 w-full h-full object-cover filter blur-sm dark:brightness-50 brightness-150" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image className="rounded-full" width={64} height={64} quality={100} src={project.icon || '/images/default/projects_icon.png'} alt={'Project Icon'} />
                        </div>
                      </div>
                    </div>
                    <div className="flex overflow-hidden gap-3">
                      {
                        project.techStacks.map((item, index) => {
                          const tech = techs[item as keyof typeof techs]
                          return (
                            <Badge key={index} title={tech.title} icon={tech.icon} href={tech.link}  ></Badge>
                          )
                        })
                      }
                    </div>
                    <p className="dark:text-gray-300 text-gray-500">
                      {project.context}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row mt-3 gap-3 overflow-x-auto py-2">
                  <Button target="_blank" href={project.link.source} disabled={!project.isOpenSource || !project.link.source}>
                    <FiGithub className='text-2xl' />
                  </Button>
                  <Button target="_blank" href={project.link.project} disabled={!project.link.project}>
                    <AiOutlineLink className='text-2xl' />
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
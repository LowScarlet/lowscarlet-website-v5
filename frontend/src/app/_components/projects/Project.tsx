"use client"

import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import { AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Badge from "../Badge";
import { techs } from "../Techs";
import React, { useState } from "react";
import ProjectsModal from "./ProjectModal";
import { BiExpandAlt } from "react-icons/bi";
import Button from "../Button";
import { projects, projectModal } from "./ProjectInterface";

function timeout(delay: number) {
  return new Promise(res => setTimeout(res, delay))
}

const projects: projects = {
  _count: 16,
  data: [
    {
      id: 1,
      title: 'PumpkinProject',
      icon: null,
      isOpenSource: false,
      link: {
        source: null,
        project: null
      },
      techStacks: [
        'nextJs',
        'expressJs'
      ],
      since: '',
      context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      title: 'PumpkinProject',
      icon: null,
      isOpenSource: false,
      link: {
        source: null,
        project: null
      },
      techStacks: [
        'nextJs',
        'expressJs'
      ],
      since: '',
      context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]
}

export default function Projects() {
  const [projectModal, setProjectModal] = useState<projectModal>({
    isOpen: false,
    project: null
  })

  const { data } = projects

  const refs = React.useMemo(() => {
    return (
      data.map(() => {
        return React.createRef<HTMLButtonElement>();
      }) ?? []
    );
  }, [data]);

  function handleClosingOthers(id: string) {
    const otherRefs = refs.filter((ref) => {
      return ref.current?.getAttribute("data-id") !== id;
    });

    otherRefs.forEach((ref) => {
      const isOpen = ref.current?.getAttribute("data-open") === "true";

      if (isOpen) {
        ref.current?.click();
      }
    });
  }

  return (
    <div>
      <h1 className="text-2xl font-bold dark:text-white text-gray-700">Projects ({data.length.toString()})</h1>
      <div className="flex flex-col py-4">
        {
          data.map((item, index) => {
            const { title, icon, isOpenSource, link, techStacks, since, context } = item
            const { source: linkSource, project: linkProject } = link
            return (
              <Disclosure key={index}>
                {({ open }) => (<>
                  <Disclosure.Button
                    className="py-1 group"
                    ref={refs[index]}
                    data-id={index}
                    data-open={open}
                    onClick={async () => {
                      handleClosingOthers(index.toString())
                      await timeout(100)
                      const element = document.getElementById(`project-${index}`)
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop,
                          behavior: 'smooth',
                        })
                      }
                    }}
                  >
                    <div id={`project-${index}`} className="flex flex-row gap-0 items-center justify-between lg:justify-center mt-3 mb-3 w-full px-2">
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
                              <Image width={100} height={100} quality={100} src={icon || '/images/default/projects_icon.png'} alt="Foto Anda" className="absolute inset-0 w-full h-full object-cover filter blur-sm dark:brightness-50 brightness-150" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Image className="rounded-full" width={64} height={64} quality={100} src={icon || '/images/default/projects_icon.png'} alt={'Project Icon'} />
                              </div>
                            </div>
                          </div>
                          <div className="flex overflow-hidden gap-3">
                            {
                              techStacks.map((item, index) => {
                                const tech = techs[item as keyof typeof techs]
                                return (
                                  <Badge key={index} title={tech.title} icon={tech.icon} href={tech.link}  ></Badge>
                                )
                              })
                            }
                          </div>
                          <p className="dark:text-gray-300 text-gray-500">
                            {context}
                          </p>
                          <div className="flex gap-2">
                            <Button target="_blank" href={linkSource} disabled={!item.isOpenSource || !item.link.source}>
                              <FiGithub className='text-2xl' />
                            </Button>
                            <Button target="_blank" href={linkProject} disabled={!item.link.project}>
                              <AiOutlineLink className='text-2xl' />
                            </Button>
                            <span className="grow" />
                            <Button onClick={() => {
                              setProjectModal({
                                isOpen: true,
                                project: item
                              })
                            }}>
                              <BiExpandAlt className='text-2xl' />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>)}
              </Disclosure>
            )
          })
        }
      </div>

      <ProjectsModal modal={projectModal} setModal={setProjectModal} />
    </div>
  )
}
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from 'next/image';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { PiCertificate } from "react-icons/pi";
import { TbSql } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { TypeAnimation } from 'react-type-animation';
import Badge from './components/Badge';
import Header from './components/Header';
import { nextJs, expressJs, prismaOrm } from "./components/Techs";
import listClassName from "./utils/listClassName";
import Button from './components/Button';
import Projects from './components/projects/Projects';
import Project from './components/projects/Project';
import React from 'react';

const subDescription = (<>
  Currently working in a small and messing project with <Badge title={nextJs.title} icon={nextJs.icon} href={nextJs.link} />, <Badge title={expressJs.title} icon={expressJs.icon} href={expressJs.link} />, <Badge title={prismaOrm.title} icon={prismaOrm.icon} href={prismaOrm.link} /> & some other tooling.
</>)

const mainDescription = "Hi, I'm Tegar, an Indonesian web magician passionate about crafting visually stunning and functional websites that seamlessly blend technology and artistry."

const heading = (<>
  I love building <TypeAnimation
    className={
      listClassName([
        'bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500',
        'text-2xl text-transparent'
      ])
    }
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
    cursor={true}
  />
</>)

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
    href: 'mailto:tegarmaulanafahreza.email@gmail.com',
    icon: <FiMail className='text-2xl' />,
  },
]

export interface project {
  id: number,
  title: string,
  icon: string | null,
  isOpenSource: boolean,
  link: {
    source: string | null,
    project: string | null,
  },
  techStacks: Array<string>,
  loves: number,
  comments: number,
  since: string,
  context: string
}

export interface projects {
  _count?: number
  data: Array<project>
}

const projects: projects = {
  _count: 16,
  data: [
    {
      id: 1,
      title: 'Pumpkin Project',
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
      loves: 12,
      comments: 9,
      since: '',
      context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      title: 'Etika Chat',
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
      loves: 12,
      comments: 9,
      since: '',
      context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]
}

export default function Home() {
  return (<>
    <div className={
      listClassName([
        'max-w-md mx-auto min-h-screen flex items-center justify-center',
        'select-none'
      ])
    }>
      <div className={
        listClassName([
          'px-4 py-10 flex flex-col gap-y-10'
        ])
      }>
        <Header />

        <main className={
          listClassName([
            'flex flex-col gap-y-10',
            'text-xl dark:text-gray-400 text-gray-700'
          ])
        }>
          <section className={
            listClassName([
              'flex flex-col gap-y-4'
            ])
          }>
            <h1 className={
              listClassName([
                'font-bold'
              ])
            }>
              {heading}
            </h1>

            <p>
              {mainDescription}
            </p>

            <p>
              {subDescription}
            </p>
          </section>

          <ul className={
            listClassName([
              'flex flex-row gap-2 overflow-x-auto'
            ])
          }>
            {
              social_media.map((item, index) => (
                <Button
                  key={index}
                  target='_blank'
                  href={item.href}
                >
                  {item.icon}
                </Button>
              ))
            }
          </ul>

          <Projects>
            {
              projects.data.map((project, index) => {
                return (
                  <Project
                    key={index}
                    index={index}
                    project={project}
                  />
                )
              })
            }
          </Projects>
        </main>
      </div>
    </div>
  </>)
}

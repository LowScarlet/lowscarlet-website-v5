/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";
import Image from "next/image";
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiPrisma } from 'react-icons/si';
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import { MdOutlineArrowDownward, MdWhatsapp } from 'react-icons/md';
import { BiLogoLinkedin } from 'react-icons/bi';
import { TypeAnimation } from "react-type-animation";
import Badge from "./_components/Badge";
import ProjectDisclosure from "./_components/ProjectsDisclousure";

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
      href: 'https://wa.me/6281270634992',
      icon: <MdWhatsapp className='text-2xl' />,
    },
    {
      href: 'mailto:tegarmaulanafahreza.email@gmail.com',
      icon: <FiMail className='text-2xl' />,
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
          {
            social_media.map((item, index) => (
              <Link target="_blank" key={index} href={item.href} className="flex flex-row items-center justify-start gap-2.5 text-white transition duration-300 ease-in-out bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5">
                {item.icon}
              </Link>
            ))
          }
        </div>
      </div>
      <div className="pb-10">
        <h1 className="text-2xl font-bold">Projects ({count_projects})</h1>
        <div className="flex flex-col py-4">
          {
            projects.map((item, index) => (
              <ProjectDisclosure
                key={index}
                title={item.title}
                icon={item.icon}
                badges={item.badges}
                href={item.href}
              >
                {item.context}
              </ProjectDisclosure>
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

"use client"

import React, { ReactNode, createContext, useState } from "react";
import listClassName from "@/app/utils/listClassName";
import { FaRegStar } from "react-icons/fa";

export default function Projects({
  children
}: {
  children?: ReactNode
}) {

  return (
    <section>
      <h1 className={
        listClassName([
          'flex text-xl font-bold items-center gap-x-2',
          'dark:text-white'
        ])
      }>
        <FaRegStar />
        Featured Projects
      </h1>
      <div className={
        listClassName([
          'transition duration-300 ease-in-out duration-300',
          'flex flex-col gap-y-1',
          'p-1'
        ])
      }>
        {children}
      </div>
    </section>
  )
}
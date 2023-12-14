"use client"

import { ReactNode } from "react";
import Link from "next/link";
import listClassName from "../utils/listClassName";

export default function Badge({
  title,
  icon,
  href
}: {
  title: ReactNode,
  icon: ReactNode,
  href?: string,
}) {
  const className = listClassName([
    'transition duration-300 ease-in-out',
    'border border-neutral-200 dark:border-neutral-700 ',
    'bg-neutral-50 dark:bg-neutral-800 rounded',
    'inline-flex items-center',
    'text-sm text-neutral-900 dark:text-neutral-100 no-underline',
    'p-1'
  ])

  return (
    href ? (
      <Link
        target="_blank"
        href={href}
        className={className}
      >
        <span className="pe-1">{icon}</span > {title}
      </Link>
    ) : (
      <span className={className}>
        <span className="pe-1">{icon}</span > {title}
      </span >
    )
  )
}
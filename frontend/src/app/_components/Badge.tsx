"use client"

import { ReactNode } from "react";
import Link from "next/link";

export default function Badge({
  title,
  icon,
  href
}: {
  title: ReactNode,
  icon: ReactNode,
  href?: string,
}) {
  return (
    href ? (
      <Link target="_blank" href={href} className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
        <span className="pe-1">{icon}</span > {title}
      </Link>
    ) : (
      <span className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
        <span className="pe-1">{icon}</span > {title}
      </span >
    )
  )
}
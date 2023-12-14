"use client"

import Link from "next/link";
import React, { ReactNode } from "react";

export default function Button({
  children,
  href,
  disabled = false,
  target = "_self",
  onClick,
  className,
}: {
  children?: ReactNode,
  href?: string | null,
  disabled?: boolean,
  target?: React.HTMLAttributeAnchorTarget,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: string,
}) {
  const bgColorClass = disabled ? 'opacity-50 bg-neutral-200 border dark:bg-neutral-900' : 'dark:bg-neutral-700 bg-neutral-50'
  const hoverClass = disabled ? '' : 'hover:bg-neutral-200 border dark:hover:bg-neutral-900'
  const defClassNames = hoverClass + ' ' + bgColorClass + ' ' + className + ` flex flex-row items-center justify-start gap-2.5 text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-700 transition duration-300 ease-in-out rounded-md px-3 py-2.5`
  return (
    disabled ? (
      <span className={defClassNames}>
        {children}
      </span>
    ) : (
      onClick ? (
        <button className={defClassNames} onClick={onClick}>
          {children}
        </button>
      ) : (
        <Link target={target} href={href || ''} className={defClassNames} >
          {children}
        </Link >
      )
    )
  )
}
"use client"

import { ReactNode } from "react"

export default function ScrollToButton({
  children,
  className,
  to
}: {
  children: ReactNode,
  className: string,
  to: string
}) {
  return (
    <button onClick={
      () => {
        const element = document.getElementById(to)
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
          })
        }
      }
    } className={className}>
      {children}
    </button>
  )
}
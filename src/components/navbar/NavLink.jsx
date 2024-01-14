"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink(props) {

  const path = usePathname()

  return (
    <Link className={`${path === props.href ? "activeNavLink" : ''} navItem`} {...props}>{props.children}</Link>
  )
}
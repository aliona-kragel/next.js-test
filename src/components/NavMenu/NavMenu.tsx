'use client'

import Link from "next/link";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  {
    id: 1,
    title: "About",
    href: "/about"
  },
  {
    id: 2,
    title: "Collection",
    href: "/collection"
  }
]

const NavMenu = () => {
  const pathname = usePathname()
  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.id}
            className={clsx(styles.nav__link, isActive && styles.active)} >
            {link.title}
          </Link >
        )
      })}
    </nav>
  )
}

export default NavMenu;
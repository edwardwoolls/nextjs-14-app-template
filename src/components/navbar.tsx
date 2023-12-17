import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion as m } from "framer-motion"
import { Menu, X } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation: NavItem[] = siteConfig.nav

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="mx-auto flex w-10/12 items-center justify-between py-6">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>

        {/* Desktop Menu */}

        <div className="my-8 hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link href={item.path} key={item.label}>
              <p className="hover:text-primary font-mono text-sm">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden items-center gap-6 md:flex">
        <ThemeToggle />
        <Button>Sign In</Button>
      </div>

      {/* Mobile Menu */}

      <m.div
        className="md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </m.div>

      {menuOpen && (
        <m.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-popover fixed inset-x-0 top-24 mx-8 flex flex-col items-center rounded-xl shadow-xl md:hidden"
        >
          <div className="my-8 flex flex-col items-center gap-6">
            {navigation.map((item) => (
              <Link href={item.path} key={item.label}>
                <p className="hover:text-primary font-mono text-sm">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
          <hr className="border-muted w-[80%]" />
          <div className="flex w-[80%] flex-col items-center gap-6 py-6">
            <Button className="w-full">Sign In</Button>
          </div>
        </m.div>
      )}
    </nav>
  )
}

"use client"
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton, RedirectToSignIn} from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
const MobileNav = () => {
  const pathname = usePathname()
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/assets/images/logo-icon.svg" alt="logo" width={35} height={35} />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                className="cursor-pointer"
                width={24}
                height={24} />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <ul className="header-nav_elements">
                  {
                    navLinks.slice(0, 6).map((link) => {
                      const isActive = link.route === pathname
                      return (
                        <li key={link.route}
                          className={`${isActive}` && 'p-18 flex whitespace-nowrap text-dark-800'}>

                          <Link className="sidebar-link cursor-pointer" href={link.route}>
                            <Image
                              src={link.icon}
                              alt="logo"
                              width={24}
                              height={24}
                              className='brightness-0'
                            />
                            {link.label}
                          </Link>

                        </li>
                      )
                    })
                  }
                </ul>
                <ul className="header-nav_elements">
                  {
                    navLinks.slice(6).map((link) => {
                      const isActive = link.route === pathname
                      return (
                        <li key={link.route}
                          className={`${isActive && 'p-18 flex whitespace-nowrap text-dark-800 hover:brightness-100'}`}>
                          <Link className="sidebar-link cursor-pointer" href={link.route}>
                            <Image
                              src={link.icon}
                              alt="logo"
                              width={24}
                              height={24}
                              className='brightness-0'
                            />
                            {link.label}
                          </Link>

                        </li>
                      )
                    })
                  }
                  <li className="flex-center gap-2 p-4 cursor-pointer">
                    <UserButton afterSignOutUrl='/' showName />
                  </li>
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          {/* <Button asChild className="button bg-gray-800 bg-cover">
            <Link href="/sign-in">Sign In</Link>
          </Button> */}
          <RedirectToSignIn />
        </SignedOut>

      </nav>
    </header>
  )
}

export default MobileNav
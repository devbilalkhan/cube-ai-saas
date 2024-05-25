"use client"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton, RedirectToSignIn } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'


const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-icon.svg" alt="logo" width={40} height={40} />
          <p className='text-gray-800 text-2xl font-bold'>cube.ai</p>
        </Link>
        <nav className="sidebar-nav">

          <ul className="sidebar-nav_elements">
            {
              navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname
                return (
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-gray-800 text-white' : 'text-gray-900'
                    }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive ? 'brightness-200' : 'brightness-0'} group-hover:brightness-200`}
                      />
                      {link.label}
                    </Link>

                  </li>
                )
              })
            }
          </ul>
          <ul className="sidebar-nav_elements">
            {
              navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname
                return (
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-gray-800 text-white' : 'text-gray-900'
                    }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive ? 'brightness-200' : 'brightness-0'} group-hover:brightness-200`}
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
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
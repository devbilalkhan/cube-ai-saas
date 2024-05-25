
import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SignedOut>
        {/* <Button asChild className="button bg-gray-800 bg-cover">
              <Link href="/sign-in">Sign In</Link>
            </Button> */}
        <RedirectToSignIn />
      </SignedOut>
      {/**Sidebar component */}
      <SignedIn>
        
      
      <Sidebar />
      {/**MobileNav component */}
      <MobileNav />
      {/**Content */}
      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
      </SignedIn>
    </main>
  )
}

export default Layout
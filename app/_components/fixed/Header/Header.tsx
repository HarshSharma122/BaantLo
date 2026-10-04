import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-center'>

    <div className='flex items-center justify-between border max-w-200 p-2 rounded-xl shadow-[#85D91F] shadow gap-12'>
        {/* logo */}
        <div className="">
            <Link href="/">
            <Image src="/logo-1.png" alt='logo' width={110} height={110}/>
            </Link>
        </div>


        <div className="flex items-center justify-center gap-6 text-[15px]">
           <Link href="/"><li className='list-none'>Home</li></Link> 
            <li className='list-none'>About</li>
            <li className='list-none'>Features</li>
            <li className='list-none'>Contact</li>

        </div>

        <div className="">

             <Link href="/get-started"><Button className="px-5 py-3 text-[16px] mr-2">Sign Up</Button></Link> 
            <Button variant="outline">Login</Button>

        </div>
    </div>
    </div>
  )
}

export default Header
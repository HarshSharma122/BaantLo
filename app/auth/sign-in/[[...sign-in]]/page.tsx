"use client"
import { SignIn} from '@clerk/react'

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <SignIn/>
    </div>
  )
}
export default page;


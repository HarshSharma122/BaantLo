"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { FaGoogle, FaTwitter } from 'react-icons/fa'
import { toast } from 'sonner'

const Login = ({ setIsLoginOpen, setAuthSignUpOpen }: { setIsLoginOpen: Function, setAuthSignUpOpen: Function }) => {
  const router = useRouter();
  const[isBtnClick, setIsBtnClick] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: ""
  });



  const handleSubmit = async (e: FormEvent) => {
    setIsBtnClick(true);
    e.preventDefault();
    try {

      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: input.email,
          password: input.password
        })
      })
      const message = await response.json();

      if (message.status == 200) {
        setIsBtnClick(false);
        toast.message(message.message);
        setIsLoginOpen(false);
        router.push("/dashboard");
      } else {
        toast.error(message.message);
        return;

      }
    } catch (error: any) {
      toast.error("Please try again later!", error);
      return error;
    }
  }


  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }











  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
      <div className="bg-white w-full max-w-md  rounded-xl p-6 shadow-lg">
        <div className="flex justify-center items-center mb-5">
          <h2 className="text-xl font-medium text-center">Login to your account</h2>


        </div>

        <form className="space-y-4">

          <Label>Email</Label>
          <Input value={input.email} name='email' onChange={handleChange} />

          <Label>Password</Label>
          <Input value={input.password} name='password' onChange={handleChange} />





          <div className="flex gap-3 pt-2">
            <Button
            disabled={isBtnClick}
              onClick={handleSubmit}
              type="submit"
              className={`flex-1`}
            >
              Login
            </Button>

            <Button
              onClick={() => setIsLoginOpen(false)}
              type="button"
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
          </div>



          <div className="pt-4">
            <h1>Continue with:</h1>



            <div className="flex gap-3 pt-3">
              <div className="border px-2 py-2 bg-black rounded-full cursor-pointer">
                <FaGoogle className='text-white' />
              </div>
              <div className="border px-2 py-2 bg-black rounded-full cursor-pointer">
                <FaTwitter className='text-white' />
              </div>
            </div>


          </div>



          <div className="">
            <h3 className='text-sm'>Create your account? <span onClick={() => (
              setIsLoginOpen(false),
              setAuthSignUpOpen(true)
            )} className='text-[16px] border-b-2 border-black'>Sign up</span> </h3>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

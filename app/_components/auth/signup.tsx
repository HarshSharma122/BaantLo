"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormEvent, useState } from 'react';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import { toast } from 'sonner';

const Signup = ({ setAuthSignUpOpen, setIsLoginOpen }: { setAuthSignUpOpen: Function, setIsLoginOpen: Function }) => {


    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });





    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        try {

            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: input.name,
                    email: input.email,
                    password: input.password
                })

            })

            const message = await response.json();

            if (response.ok) {
                toast.message(message.message);
                setIsLoginOpen(true);
                setAuthSignUpOpen(false);
            } else {
                toast.error(message.message);
                return;

            }
        } catch (error: any) {
            toast.error("Please try again later!", error);
            return error;
        }
    }


    const handleChange = (e:any)=>{
        setInput({...input, [e.target.name]:[e.target.value]})
    }








    return (
        <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
            <div className="bg-white w-full max-w-md  rounded-xl p-6 shadow-lg">
                <div className="flex justify-center items-center mb-5">
                    <h2 className="text-xl font-medium text-center">Create your Account</h2>


                </div>

                <form className="space-y-4">
                    <Label>Name</Label>
                    <Input name='name' value={input.name} onChange={handleChange}/>
                    <Label>Email</Label>
                    <Input type="email"  name='email' value={input.email} onChange={handleChange}/>

                    <Label>Password</Label>
                    <Input type="password" name='password' value={input.password} onChange={handleChange}/>





                    <div className="flex gap-3 pt-2">
                        <Button
                        onClick={handleSubmit}
                            type="submit"
                            className={`flex-1`}
                        >
                            Create Account
                        </Button>

                        <Button
                            onClick={() => setAuthSignUpOpen(false)}
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
                        <h3 className='text-sm'>Already have an account? <span onClick={() => (
                            setIsLoginOpen(true),
                            setAuthSignUpOpen(false)
                        )} className='text-[16px] border-b-2 border-black'>Sign in</span> </h3>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default Signup;
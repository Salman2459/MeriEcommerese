'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

const Header = () => {
  let inp = useRef()
  let searchRoute = useRouter()
  return (
    <div className="bg-sky-700 w-full h-[60px] flex items-center justify-center">
      <Link className='text-2xl text-white ml-5 mr-5' href={'/'}>Home</Link>
      <Link className='text-2xl text-white ml-5 mr-5' href={'/cart'}>Cart</Link>
      <Link className='text-2xl text-white ml-5 mr-5' href={'/login'}>Login</Link>
      <Link className='text-2xl text-white ml-5 mr-5' href={'/Signup'}>SignUp</Link>

      <input type='text' ref={inp}/>
      <button className='w-20 h-8 bg-slate-600 text-white' onClick={() => {
        searchRoute.push('/searchProduct/'+ inp.current.value)
      }}>Search</button>

    </div>
  )
}

export default Header
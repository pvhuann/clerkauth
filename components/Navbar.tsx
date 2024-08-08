import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { userId } = auth()
    return (
        <div className='flex justify-between items-center bg-slate-600 h-20 px-20'>
            <div className=''>
                <Link href={'/'}>Home</Link>
            </div>
            <div>
                <Link href={'/client'}>Client page</Link>
            </div>
            <div className='flex justify-between gap-3'>
                {
                    !userId ? (
                        <>
                            <Link href={'/sign-up'}>Sign up</Link>
                            <Link href={'/sign-in'}>Log in</Link>
                        </>
                    ) : (
                        <>
                            <Link href={'/profile'}>Profile</Link>
                            <UserButton/>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Navbar
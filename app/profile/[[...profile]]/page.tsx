import { UserProfile } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
    const {userId}= auth()
    const user = await currentUser()
    if(!userId){
        redirect('/')
    }
    return (
        <div className='flex justify-center flex-col items-center gap-10'>
            <div className='text-2xl'>{user?.username}</div>
            <UserProfile />
        </div>
    )
}

export default page
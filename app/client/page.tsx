'use client'


import { useUser } from '@clerk/nextjs'
// import React from 'react'

const page = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return <div className='flex justify-center'>Hello, {user.firstName} welcome to Clerk</div>;
}

export default page
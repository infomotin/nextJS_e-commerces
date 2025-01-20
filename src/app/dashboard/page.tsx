import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


export default async function DashboardPage() {
    //get user and redirect depending on role
    const user = await currentUser();
    console.log(user)
    // Role based redirect 
    //User redirect to home 
    if(!user?.privateMetadata?.role || user?.privateMetadata.role === 'USER') redirect('/');
    //if role Admin redirect to dashboard/admin
    if(user?.privateMetadata.role === 'ADMIN') redirect('/dashboard/admin');
    //if role SELLER redirect to dashboard/seller
    if(user?.privateMetadata.role === 'SELLER') redirect('/dashboard/seller');
}
 
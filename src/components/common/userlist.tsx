import { userDetail } from '@/app/api/users/route'
import React from 'react'
import Link from 'next/link'
import { Home, Mail, User } from 'lucide-react'

function userlist(props: userDetail) {
    let today = new Date();
    let bb = props.planExpiry!;
    let check = today > bb;
    return (
        <div className='grid grid-flow-col justify-stretch w-[calc(100vw-224px)] mt-10 ml-5 border border-slate-400 rounded-md p-3'>

            <div className='justify-stretch text-xs text-slate-300 font-semibold leading-relaxed'>
                <div>Customer Id: <Link href='#' className='text-sm text-blue-500 underline underline-offset-1'>{props.userId}</Link></div>

                <div className='flex'>Subscription(s):
                { check ? (<div className='bg-red-400 w-12 text-center rounded-md ml-3 text-white'>Expired</div>) : (<div className='bg-green-400 w-12 text-center rounded-md ml-3 text-white'>Active</div>) }
                </div>
                <div className='flex'>Merchant: <div className='ml-3'>Razorpay</div></div>
            </div>


            <div className='text-xs font-semibold text-slate-300 leading-relaxed'>
                <div className='flex'><User size={20} color="#b0abab" strokeWidth={1.5} /><span className='ml-2'>{props.name}</span></div>
                <div className='flex'><Home size={18} color="#b0abab" strokeWidth={1.5} /><span className='ml-2'>Sarlhai</span></div>
                <div className='flex'><Mail size={18} color="#b0abab" strokeWidth={1.5} /><span className='ml-2'>{props.email}</span></div>
            </div>


            <div className='text-xs font-semibold text-slate-300 leading-relaxed'>
                <div>Created At: {props.createdAt?.toLocaleString().substring(0, 10)} {props.createdAt?.toLocaleString().substring(11, 19)}</div>
                <div>Expires At: {props.planExpiry?.toString().substring(0, 10)} {props.planExpiry?.toString().substring(11, 19)}</div>
                <div>Net Payment: USD {props.totalTransactionAmount}</div>
            </div>
        </div>
    )
}

export default userlist;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { baseUrl } from '@/constants'
import { sliceText } from '@/lib/sliceText'
import React from 'react'

function BannerCard({ id, movie,series }) {
    return (
        <div className='w-full rounded-md flex flex-col items-start gap-1 p-2 text-sm bg-indigo-300'>
            <img className='h-44 object-cover w-full' src={`${baseUrl}${(movie || series)?.main_image}`} alt={movie?.name} />
            <h1>Nomi: <span className='font-semibold capitalize'>{(movie || series)?.name}</span> </h1>
            <h2>Haqida: <span className='font-semibold capitalize'>{sliceText((movie || series)?.description, 40)}</span> </h2>

        </div>
    )
}

export default BannerCard

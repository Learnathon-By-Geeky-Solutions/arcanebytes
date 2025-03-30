import Image from 'next/image'
import React from 'react'
import ErrorImg from '../../public/404.svg'

const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center py-10 md:py-5'>
        <Image src={ErrorImg} alt='404' width={600} height={600} />
    </div>
  )
}

export default ErrorPage
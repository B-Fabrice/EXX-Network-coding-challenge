import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isShow, setIsShow] = useState(false)
  return (
    <nav className='mx-auto py-4 md:py-6 px-3 md:px-20 flex justify-between items-center'>
      <div>
        <div>
          <Image
            src='/logo.png'
            className=''
            width={200}
            height={200}
            alt='b encrypty logo'
          />
        </div>
      </div>
      <div className='flex items-baseline gap-10'>
        <div className='flex gap-8'>
          {['About', 'Developers', 'Blog'].map((item, index) => (
            <Link
              key={index}
              href='/about'
              className='block md:w-fit'>
              {item}
            </Link>
          ))}
        </div>
        <div
          className='inline-flex items-center self-center gap-2 cursor-pointer relative'
          onClick={() => setIsShow(!isShow)}
        >
          <svg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M22.7813 12.95C22.7813 18.1173 18.5923 22.3062 13.425 22.3062M22.7813 12.95C22.7813 7.78269 18.5923 3.59375 13.425 3.59375M22.7813 12.95H4.06876M13.425 22.3062C8.25769 22.3062 4.06876 18.1173 4.06876 12.95M13.425 22.3062C15.1474 22.3062 16.5438 18.1173 16.5438 12.95C16.5438 7.78269 15.1474 3.59375 13.425 3.59375M13.425 22.3062C11.7026 22.3062 10.3063 18.1173 10.3063 12.95C10.3063 7.78269 11.7026 3.59375 13.425 3.59375M4.06876 12.95C4.06876 7.78269 8.25769 3.59375 13.425 3.59375'
              stroke='#0077FE'
              strokeWidth='2.07917'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          EN
          <svg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'
            className={`transform transition duration-300 ease-in-out ${isShow ? 'rotate-180' : ''}`}
          >
            <path
              d='M16.9979 10.8708L12.8396 15.0292L8.68124 10.8708'
              stroke='#111315'
              strokeWidth='2.07917'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {isShow && (
            <div className='absolute top-10 right-0 bg-white rounded-xl shadow-lg w-20'>
              <div className='flex flex-col gap-2 p-2'>
                <div className='text-center'>
                  FR
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <button className='bg-primary font-bold inline-flex px-8 py-4 rounded-xl text-white'>
            Connect Wallet
            <svg className='ml-1' width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.51044 7.48014L16.842 7.48014M16.842 7.48014L16.842 14.2987M16.842 7.48014L8.04412 15.6624'
                stroke='#F5F5F5'
                strokeWidth='2.07917'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
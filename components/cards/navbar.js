import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()

  return (
    <nav className='mx-auto py-4 md:py-6 px-3 md:px-20 flex justify-between items-center relative'>
      <div>
        <div>
          <Image
            src='/logo.png'
            width={200}
            height={200}
            alt='b encrypty logo'
            className='h-full w-full'
          />
        </div>
      </div>
      <div>
        <div className='hidden lg:flex items-baseline gap-10'>
          <div className='flex gap-8'>
            {['About', 'Developers', 'Blog'].map((item, index) => (
              <Link
                key={index}
                href='/about'
                className='block md:w-fit font-semibold text-sm'>
                {item}
              </Link>
            ))}
          </div>
          <div
            className='inline-flex items-center font-semibold text-sm self-center gap-2 cursor-pointer relative'
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
          { !isConnected && <div>
            <button
              className='bg-primary font-bold inline-flex px-8 py-4 rounded-xl text-white'
              onClick={() => open()}
            >
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
          </div>}
        </div>
        <div className='lg:hidden'>
          <svg
            onClick={() => setIsMenu(!isMenu)}
            className='cursor-pointer'
            width='29' height='19' viewBox='0 0 29 19' fill='none' xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1.61111 19H27.3889C28.275 19 29 18.2875 29 17.4167C29 16.5458 28.275 15.8333 27.3889 15.8333H1.61111C0.725 15.8333 0 16.5458 0 17.4167C0 18.2875 0.725 19 1.61111 19ZM1.61111 11.0833H27.3889C28.275 11.0833 29 10.3708 29 9.5C29 8.62917 28.275 7.91667 27.3889 7.91667H1.61111C0.725 7.91667 0 8.62917 0 9.5C0 10.3708 0.725 11.0833 1.61111 11.0833ZM0 1.58333C0 2.45417 0.725 3.16667 1.61111 3.16667H27.3889C28.275 3.16667 29 2.45417 29 1.58333C29 0.7125 28.275 0 27.3889 0H1.61111C0.725 0 0 0.7125 0 1.58333Z' fill='#111315' />
          </svg>
          <div className={`fixed z-20 h-screen backdrop-blur top-0 right-0 left-0 ${!isMenu ? 'hidden' : ''}`}>
            <div className='bg-white'>
              <div className='flex justify-end pt-8 px-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={3}
                  stroke='currentColor'
                  className='w-10 h-10 cursor-pointer'
                  onClick={() => setIsMenu(!isMenu)}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </div>
              <div>
                {['About', 'Developers', 'Blog'].map((item, index) => (
                  <Link
                    key={index}
                    href=''
                    className='block px-10 hover:bg-gray-100 font-semibold text-sm transition duration-200 ease-in-out py-4'
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div>
                <button className='bg-primary font-bold inline-flex px-8 py-4 lg:w-fit w-full lg:rounded-xl text-white'>
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
          </div>
        </div>
      </div>
    </nav>
  )
}
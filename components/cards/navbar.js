import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
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
      <div>
        <div>
          <Link href='/about'
            className='text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out'>
            About
          </Link>
          <Link href='/developers'
            className='text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out'>
            Developers
          </Link>
          <Link href='/blog'
            className='text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out'>
            Blog
          </Link>
        </div>
        <div>
        </div>
        <div>
          <button className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out'>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}
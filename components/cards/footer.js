import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-16 px-10 md:px-14'>
      <div className='flex md:justify-start justify-between flex-wrap lg:flex-nowrap gap-10'>
        <div className='lg:max-w-xs lg:min-w-[300px] w-full'>
          <Image
            src='/logo.png'
            width={100}
            height={100}
            className=''
            alt='logo'
          />
          <p className='text-gray-800 text-lg md:text-xl lg:max-w-none max-w-xs py-4'>EXX builds on the efficacy of Ethereum, it is faster, powerful and more secured</p>
        </div>
        <div className='lg:w-full w-1/3'>
          <h2 className='md:text-2xl text-xl font-bold'>General</h2>
          {[
            { name: 'About' },
            { name: 'Contact us' },
            { name: 'Brand Kits' },
            { name: 'News & Updates' },
          ].map((item, index) => (
            <Link
              key={index}
              href='#'
              className='block text-gray-800 py-3 text-lg md:text-xl'
            >
              {item.name}
            </Link>
          ))
          }
        </div>
        <div className='lg:w-full w-1/3'>
          <h2 className='md:text-2xl text-xl font-bold'>Explore</h2>
          {[
            { name: 'Documentation' },
            { name: 'Block Explorer' },
            { name: 'Github' },
            { name: 'Community' },
          ].map((item, index) => (
            <Link
              key={index}
              href='#'
              className='block text-gray-800 py-3 text-lg md:text-xl'
            >
              {item.name}
            </Link>
          ))
          }
        </div>
        <div className='lg:w-full w-1/3'>
          <h2 className='md:text-2xl text-xl font-bold'>Apply</h2>
          {[
            { name: 'Dev. Incubator' },
            { name: 'Career' },
            { name: 'Ambassador' },
          ].map((item, index) => (
            <Link
              key={index}
              href='#'
              className='block text-gray-800 py-3 text-lg md:text-xl'
            >
              {item.name}
            </Link>
          ))
          }
        </div>
        <div className='lg:w-full w-1/3'>
          <h2 className='md:text-2xl text-xl font-bold'>Follow Us</h2>
          {[
            { name: 'Twitter' },
            { name: 'Medium' },
            { name: 'Telegram' },
            { name: 'Discord' },
          ].map((item, index) => (
            <Link
              key={index}
              href='#'
              className='block text-gray-800 py-3 text-lg md:text-xl'
            >
              {item.name}
            </Link>
          ))
          }
        </div>
      </div>
      <div className='flex md:flex-nowrap mt-5 flex-wrap pt-6 border-t'>
        <Link
          href='#'
          className='block whitespace-nowrap text-gray-800 px-5 text-lg md:text-xl'
        >
          Privacy Policy
        </Link>
        <Link
          href='#'
          className='block whitespace-nowrap md:my-0 my-4 text-gray-800 px-5 md:border-x-2 text-lg md:text-xl'
        >
          Terms & Conditions
        </Link>
        <Link
          href='#'
          className='block whitespace-nowrap text-gray-800 px-5 text-lg md:text-xl'
        >
          Disclaimer
        </Link>
        <p className='w-full text-center md:mt-0 mt-16 md:text-end text-lg md:text-xl'>
          With love 💙 from Example, Inc
        </p>
      </div>
    </footer>
  )
}
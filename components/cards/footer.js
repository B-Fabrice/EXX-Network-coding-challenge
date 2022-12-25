import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='py-16 px-14'>
      <div className='flex gap-10'>
        <div className='max-w-xs min-w-[300px] w-full'>
          <h2 className='text-primary text-xl font-bold'>EXX Blockchain</h2>
          <p className='text-gray-800 py-4'>EXX builds on the efficacy of Ethereum, it is faster, powerful and more secured</p>
        </div>
        <div className='w-full'>
          <h2 className='text-xl font-bold'>General</h2>
          {[
            {name: 'About'},
            {name: 'Contact us'},
            {name: 'Brand Kits'},
            {name: 'News & Updates'},
          ].map((item, index) => (
            <Link
              key={index}
              href='#'
              className='block text-gray-800 py-3'
            >
              {item.name}
            </Link>
          ))
          }
        </div>
        <div className='w-full'>
          <h2 className='text-xl font-bold'>Explore</h2>
          {[
            {name: 'Documentation'},
            {name: 'Block Explorer'},
            {name: 'Github'},
            {name: 'Community'},
          ].map((item, index) => (
            <Link
              key={index}
              href='#'
              className='block text-gray-800 py-3'
            >
              {item.name}
            </Link>
          ))
          }
        </div>
        <div className='w-full'>
          <h2 className='text-xl font-bold'>Apply</h2>
          {[
            {name: 'Dev. Incubator'},
            {name: 'Career'},
            {name: 'Ambassador'},
          ].map((item, index) => (
            <Link
              key={index}
              href='#'
              className='block text-gray-800 py-3'
            >
              {item.name}
            </Link>
          ))
          }
        </div>
        <div className='w-full'>
          <h2 className='text-xl font-bold'>Follow Us</h2>
          {[
            {name: 'Twitter'},
            {name: 'Medium'},
            {name: 'Telegram'},
            {name: 'Discord'},
          ].map((item, index) => (
            <Link
              key={index}
              href='#'
              className='block text-gray-800 py-3'
            >
              {item.name}
            </Link>
          ))
          }
        </div>
      </div>
      <div className='flex pt-6 border-t'>
        <Link
          href='#'
          className='block whitespace-nowrap text-gray-800 px-5'
        >
          Privacy Policy
        </Link>
        <Link
          href='#'
          className='block whitespace-nowrap text-gray-800 px-5 border-x-2'
        >
          Terms & Conditions
        </Link>
        <Link
          href='#'
          className='block whitespace-nowrap text-gray-800 px-5'
        >
          Disclaimer
        </Link>
        <p className='w-full text-end'>
          With love 💙 from Example, Inc
        </p>
      </div>
    </footer>
  )
}
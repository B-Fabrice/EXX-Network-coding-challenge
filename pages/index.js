import JoinCommunity from 'components/join_community'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <div className='text-center'>
        <h1 className='font-bold text-5xl'>
          Start building apps with
          <span className='text-primary ml-2'>useful cases</span>
        </h1>

        <p className='mt-10 max-w-md mx-auto'>
          Welcome to the EXX Developer’s Guide. Now you can begin building your first DApp on EXX.
        </p>

        <div className='flex justify-center my-8 gap-6'>
          <button className='md:inline-flex hidden bg-primary font-bold px-20 py-4 w-fit rounded-xl text-white'>
            Get Started
          </button>
          <button className='md:inline-flex hidden text-primary border border-primary font-bold px-20 py-4 w-fit rounded-xl'>
            Faucet
            <svg className='ml-1' width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.51044 7.48014L16.842 7.48014M16.842 7.48014L16.842 14.2987M16.842 7.48014L8.04412 15.6624'
                stroke='#174AFF'
                strokeWidth='2.07917'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <div className='md:hidden'>
            <JoinCommunity />
          </div>
        </div>

        <div className='mx-auto rounded-3xl max-w-4xl shadow-md my-10'>
          <iframe
            src='https://docs.exx.network'
            scrolling='no'
            height={500}
            className='w-full overflow-y-scroll'
          ></iframe>
        </div>

        <div className='bg-black flex gap-8 flex-wrap justify-evenly py-10 px-8'>
          {[
            { name: 'Documentation', link: 'https://docs.exx.network', caption: 'EXX seamless swap portal' },
            { name: 'Exx Incubator', link: 'https://exx.network', caption: 'Launch with EXX platform' },
            { name: 'Video Tutorial', link: 'https://www.youtube.com/watch?v=L4bQd-PqWP0', caption: 'Earn seamlessly with EXX' },
          ].map((item, index) => (
            <div key={index} className='w-fit text-left'>
              <Link
                href={item.link}
                target='_blank'
                className='text-white inline-flex items-center font-bold'
              >
                <span className='mr-2'>{item.name}</span>
                <svg xmlns='http://www.w3.org/2000/svg' width='11' height='10' viewBox='0 0 11 10' fill='none'>
                  <path
                    d='M3.12479 1.46449L9.01735 1.46449M9.01735 1.46449L9.01734 7.35705M9.01735 1.46449L1.94628 8.53556'
                    stroke='white'
                    strokeWidth='2.07917'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
              <p className='text-gray-300'>{item.caption}</p>
            </div>
          ))
          }
        </div>

        <div className='relative'>
          <div className='bg-primary absolute top-0 right-0 left-0 bottom-[30px] -z-10'></div>
          <h2 className='white text-white font-bold text-4xl py-20'>Your journey to developing your first dapp.</h2>
          <div className='bg-white rounded-3xl flex justify-between max-w-5xl mx-auto p-7 shadow-md'>
            {[
              { src: '/dev_icon1.png', title: 'Write Smart Contract', desc: 'Write instructions via code on the Exx network.', instry: '{solidity}' },
              { src: '/dev_icon2.png', title: 'Build Web Apps', desc: 'Build a frontend application for easier interaction', instry: '{next} {react}' },
              { src: '/dev_icon3.png', title: 'Integrate Dapp', desc: 'Connect your contract with your web app.', instry: '{web3.js} {ethers.js}' },
            ].map((item, index) => (
              <div className='text-left py-5 px-6' key={index}>
                <Image
                  src={item.src}
                  alt='icon'
                  width={56}
                  height={56}
                />
                <h2 className='text-2xl font-bold mb-5 mt-4 text-black'>{item.title}</h2>
                <p className='text-gray-700'>
                  {item.desc}<br />
                  {item.instry}
                </p>
              </div>
            ))
            }
          </div>
        </div>

        <div className='p-24 flex gap-20 mt-24 mx-auto max-w-5xl rounded-3xl bg-slate-100'>
          <div className='flex-1'>
            <h2 className='text-4xl font-bold'>Get connected to the EXX Network</h2>
            <div className='flex gap-5 mt-12'>
              <button className='bg-primary text-white px-5 py-4 rounded-lg w-full block'>
                Add to Metamask
              </button>
              <button className='border-secondary px-5 py-4 rounded-lg block w-full border-2'>
                Learn More
              </button>
            </div>
          </div>
          <div className='flex-1 whitespace-nowrap flex flex-col gap-5 text-left'>
            {[
              { key: 'PRC URL:', value: 'https://ds2.exx.network' },
              { key: 'Network name:', value: 'Exx Testnet' },
              { key: 'Symbol:', value: 'EXX' },
              { key: 'Chain ID:', value: '47' },
              { key: 'Block Explorer:', value: 'https://exxscan.com' },
            ].map((item, index) => (
              <div key={index}>
                <span className='text-gray-600 font-light mr-2'>{item.key}</span>{item.value}
              </div>
            ))
            }
          </div>
        </div>

        <div className='mt-20 flex justify-between max-w-5xl mx-auto p-7'>
          {[
            { title: 'Documentation', desc: 'Everything needed to build on Exx', link_name: 'View docs', link: '#' },
            { title: 'Watch & Learn', desc: 'Solidity made easy with recordings', link_name: 'Watch now', link: '#' },
            { title: 'Blockchain Explorer', desc: 'Explore transactions on Exx', link_name: 'Explore now', link: '#' },
          ].map((item, index) => (
            <div className='text-left py-5 px-6' key={index}>
              <h2 className='text-xl font-bold text-secondary'>0{index + 1}</h2>
              <h2 className='text-xl font-bold mb-5 mt-4 text-black'>{item.title}</h2>
              <p className='text-gray-500'>{item.desc}</p>
              <Link
                href={item.link}
                className='mt-2 block text-secondary underline'
              >
                {item.link_name}
              </Link>
            </div>
          ))
          }
        </div>

        <div className='mt-20 rounded-3xl overflow-hidden mx-auto max-w-5xl flex bg-black'>
          <div className='text-left flex flex-col p-10 gap-10 max-w-md'>
            <h2 className='text-3xl block font-bold text-white'>Join our developer community</h2>
            <p className='text-gray-200'>
              Join our community of developers from diverse backgrounds where you can work collaboratively, develop projects, ask questions and grow your career.
            </p>
            <div>
              <JoinCommunity />
            </div>
          </div>
          <div className='w-full'>
            <Image
              src='/card_bg.png'
              alt='icon'
              width={100}
              height={100}
              className='h-full w-fit'
            />
          </div>
        </div>

        <div className='mt-20 text-left max-w-5xl mx-auto'>
          <h2 className='text-4xl font-bold'>Exx Updates</h2>
          <p className='max-w-md mt-10 text-gray-600'>
            Catch up with news, blog posts, events and other happenings within the EXX ecosystem.
          </p>
          <div className='flex gap-5 justify-between'>
            {[
              {src: '/card_img1.png'},
              {src: '/card_img2.png'},
              {src: '/card_img3.png'},
            ].map((item, index) => (
              <div className='bg-gray-100 mt-10 rounded-xl' key={index}>
                <p className='inline-flex py-3 px-4 w-full justify-between'>
                  <span className='inline-block font-bold text-sm'>Blockchain tips</span>
                  <span className='inline-block font-light text-sm'>March 27, 2022</span>
                </p>
                <h2 className='mb-6 px-4 text-md font-bold'>The design language of the Cross Chain- pekele pekele</h2>
                <Image
                  src={item.src}
                  alt='icon'
                  width={100}
                  height={100}
                  className='w-full h-fit'
                />
              </div>
            ))
            }
          </div>
        </div>

        <div className='mt-20 bg-black flex px-16 text-left py-24 text-white'>
          <div className='w-full'>
            <h2 className='text-3xl font-bold'>Stay Updated</h2>
            <p className='max-w-xs mt-10'>
              Subscribe to our newsletter. We only send important updates.
            </p>
          </div>
          <div className='w-full flex justify-center items-center'>
            <form className='flex items-baseline gap-3'>
              <input
                type='email'
                className='px-5 py-3 bg-transparent border-gray-500 border-2 rounded-lg w-full block'
                placeholder='Enter your email address'
              />
              <button className='bg-primary inline-flex text-white px-5 py-4 rounded-lg w-fit items-baseline justify-center gap-3'>
                Subscribe
                <svg xmlns='http://www.w3.org/2000/svg' width='11' height='10' viewBox='0 0 11 10' fill='none'>
                  <path
                    d='M3.12479 1.46449L9.01735 1.46449M9.01735 1.46449L9.01734 7.35705M9.01735 1.46449L1.94628 8.53556'
                    stroke='white'
                    strokeWidth='2.07917'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

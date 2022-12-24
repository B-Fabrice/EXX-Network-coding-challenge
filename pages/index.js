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
        <div className='flex justify-center mt-8 gap-6'>
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
          <button className='md:hidden inline-flex text-white border bg-primary font-bold px-20 py-4 w-fit rounded-xl'>
            <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'>
              <path
                d='M19.6791 5.45084C18.354 4.85254 16.9329 4.41173 15.4471 4.15926C15.42 4.15439 15.393 4.16657 15.379 4.19092C15.1963 4.51077 14.9939 4.92804 14.8521 5.25601C13.254 5.02058 11.6641 5.02058 10.0988 5.25601C9.957 4.92073 9.7472 4.51077 9.56363 4.19092C9.54969 4.16738 9.52265 4.1552 9.49561 4.15926C8.01061 4.41092 6.58953 4.85173 5.26353 5.45084C5.25205 5.45571 5.24222 5.46383 5.23566 5.47438C2.54021 9.43679 1.80181 13.3018 2.16405 17.1189C2.16569 17.1375 2.17634 17.1554 2.19109 17.1668C3.96948 18.4519 5.69214 19.232 7.38284 19.7491C7.40989 19.7572 7.43857 19.7475 7.45578 19.7256C7.85572 19.1882 8.21221 18.6215 8.5179 18.0257C8.53593 17.9908 8.51872 17.9494 8.48184 17.9355C7.91636 17.7245 7.37793 17.4671 6.85998 17.1749C6.819 17.1513 6.81573 17.0937 6.85343 17.0661C6.96242 16.9857 7.07142 16.9021 7.1755 16.8177C7.19435 16.8023 7.22058 16.799 7.2427 16.8088C10.6454 18.3374 14.3292 18.3374 17.6918 16.8088C17.7139 16.7982 17.7401 16.8015 17.7598 16.8169C17.8639 16.9013 17.9729 16.9857 18.0827 17.0661C18.1204 17.0937 18.1179 17.1513 18.077 17.1749C17.559 17.4728 17.0206 17.7245 16.4543 17.9347C16.4174 17.9485 16.401 17.9908 16.419 18.0257C16.7313 18.6207 17.0878 19.1873 17.4803 19.7248C17.4967 19.7475 17.5262 19.7572 17.5533 19.7491C19.2522 19.232 20.9748 18.4519 22.7532 17.1668C22.7688 17.1554 22.7786 17.1384 22.7803 17.1197C23.2138 12.7067 22.0542 8.8734 19.7062 5.47519C19.7005 5.46383 19.6906 5.45571 19.6791 5.45084ZM9.02601 14.7947C8.00159 14.7947 7.15747 13.8692 7.15747 12.7327C7.15747 11.5962 7.9852 10.6707 9.02601 10.6707C10.075 10.6707 10.9109 11.6043 10.8946 12.7327C10.8946 13.8692 10.0668 14.7947 9.02601 14.7947ZM15.9347 14.7947C14.9103 14.7947 14.0661 13.8692 14.0661 12.7327C14.0661 11.5962 14.8939 10.6707 15.9347 10.6707C16.9837 10.6707 17.8196 11.6043 17.8032 12.7327C17.8032 13.8692 16.9837 14.7947 15.9347 14.7947Z'
                fill='#E6F4FD'
              />
            </svg>
            Join Community
          </button>
        </div>
        <div className='mx-auto rounded-3xl max-w-4xl shadow-md mt-10'>
          <iframe
            src='https://docs.exx.network'
            scrolling='no'
            height={500}
            className='w-full overflow-y-scroll'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

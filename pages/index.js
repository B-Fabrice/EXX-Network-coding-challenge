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
          <button className='bg-primary font-bold inline-flex px-20 py-4 lg:w-fit w-full lg:rounded-xl text-white'>
            Get Started
          </button>
          <button className='text-primary border border-primary font-bold inline-flex px-20 py-4 lg:w-fit w-full lg:rounded-xl'>
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
        </div>
      </div>
    </div>
  )
}

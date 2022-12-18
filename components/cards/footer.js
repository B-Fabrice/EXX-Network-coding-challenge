export default function Footer() {
  return (
    <footer className='bg-gray-800'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          <div className='px-5 py-2
            hover:text-gray-400
            transition duration-300 ease-in-out'
          >
            <a href='' className='text-base text-gray-400'>
              About
            </a>
          </div>
        </nav>
      </div>
    </footer>
  )
}
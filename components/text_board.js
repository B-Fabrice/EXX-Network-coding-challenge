export default function TextBoard() {
  return (
    <div className='w-full mb-4 rounded-lg bg-slate-200 dark:bg-slate-800'>
      <div className='flex items-center justify-between px-3 py-2'>
        <div className='flex flex-wrap items-center divide-slate-100 sm:divide-x dark:divide-slate-500'>
          <div className='flex items-center space-x-1 sm:pr-4'>
            <button className='hover:dark:bg-slate-700 hover:bg-slate-100 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center'>
              Switch
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='ml-4 w-4 h-4'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5' />
              </svg>
            </button>
          </div>
          <div className='flex flex-wrap items-center space-x-1 sm:pl-4'>
            <button type='button' className='p-2 text-slate-500 rounded cursor-pointer hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:dark:bg-slate-700 hover:bg-slate-100'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z' />
              </svg>
            </button>
          </div>
        </div>
        <button type='button' data-tooltip-target='tooltip-fullscreen' className='p-2 text-slate-500 rounded cursor-pointer sm:ml-auto hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:dark:bg-slate-700 hover:bg-slate-100'>
          <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z' clipRule='evenodd'></path></svg>
        </button>
        <div id='tooltip-fullscreen' role='tooltip' className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-slate-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-slate-700'>
          Show full screen
          <div className='tooltip-arrow' data-popper-arrow></div>
        </div>
      </div>
      <div className='p-4 bg-slate-200 rounded-b-lg dark:bg-slate-800'>
        <textarea id='editor' rows='8' className='p-2 block w-full text-md outline-none rounded-lg text-slate-800 bg-slate-100 focus:bg-slate-50 border-0 dark:bg-slate-700 focus:dark:bg-slate-600 focus:ring-0 dark:text-slate-100 dark:placeholder-slate-400' placeholder='Write an article...' required></textarea>
      </div>
    </div>
  )
}
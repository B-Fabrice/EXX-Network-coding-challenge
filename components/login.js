import { useState } from 'react'
import { login } from 'services'
import { useDispatch } from 'react-redux'
import { login as loginUser } from 'slices/user'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handlerLogin = async () => {
    setLoading(true)
    setIsError(false)
    const { token } = await login({ username, password })
    if (token) {
      dispatch(loginUser(token))
      sessionStorage.setItem('designer_user', token)
    } else {
      setIsError(true)
    }
    setLoading(false)
  }

  return (
    <div className='flex flex-col justify-center'>
      <div className='relative py-3'>
        <div className='relative px-4 py-10 shadow-lg rounded-3xl'>
          <div className='max-w-md mx-auto'>
            <div>
              <h1 className='text-2xl text-center font-semibold text-slate-900 dark:text-slate-100'>Get Access</h1>
            </div>
            {isError && <p className='text-red-500 py-3 text-center mt-5'>Access denied!</p>}
            <form className='divide-y divide-gray-200'>
              <fieldset disabled={loading}>
                <div className='py-8 text-base leading-6 space-y-10 text-gray-700 sm:text-lg sm:leading-7'>
                  <div className='relative'>
                    <input
                      autoComplete='off'
                      type='text'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='peer text-slate-900 dark:text-slate-100 placeholder-transparent h-10 w-full border-b-2 bg-transparent border-gray-30 focus:outline-none focus:borer-rose-600'
                      placeholder='Username'
                    />
                    <label className='absolute left-0 -top-3.5 text-gray-600 dark:text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-300 peer-focus:text-sm'>Username</label>
                  </div>
                  <div className='relative mt-5'>
                    <input
                      autoComplete='new-password'
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='peer text-slate-900 dark:text-slate-100 bg-transparent placeholder-transparent h-10 w-full border-b-2 border-gray-30 focus:outline-none focus:borer-rose-600'
                      placeholder='Password'
                    />
                    <label className='absolute left-0 -top-3.5 text-gray-600 dark:text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-gray-300 peer-focus:text-sm'>Password</label>
                  </div>
                  <div className='relative'>
                    <button
                      type='button'
                      disabled={loading}
                      className='bg-cyan-500 dark:bg-slate-400 w-full text-cyan-100 dark:text-slate-900 rounded-md px-2 py-3 font-bold'
                      onClick={() => handlerLogin()}
                    >
                      { loading ? 'Checking Access...' : 'Granting Access' }
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
import Login from 'components/login'
import Loading from 'components/loading'
import CodeBoard from 'components/codeBoard'
import { useSelector } from 'react-redux'
import TextBoard from 'components/text_board'

export default function Home() {
  const { user, loading } = useSelector((state) => state.user)
  return (
    <div className='mx-auto max-w-5xl p-10'>
      {loading ? (
        <Loading />
      ) : !user ? (
        <Login />
      ) : (
        <>
          <TextBoard />
          <CodeBoard />
        </>
      )}
    </div>
  )
}

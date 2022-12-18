import PropTypes from 'prop-types'
import Navbar from './navbar'
import { useEffect } from 'react'
import { login } from 'slices/user'
import { useDispatch } from 'react-redux'
import { refresh } from 'services'

export default function Layout({ children }) {
  const dispatch = useDispatch()

  const onload = async () => {
    const auth_token = sessionStorage.getItem('designer_user')
    const token =  auth_token && await refresh(auth_token)
    if (token?.token) {
      sessionStorage.setItem('designer_user', token)
      dispatch(login(token))
    } else {
      sessionStorage.removeItem('designer_user')
      dispatch(login(null))
    }
    
  }

  useEffect(() => {
    onload()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
import PropTypes from 'prop-types'
import Navbar from 'components/cards/navbar'
import Footer from 'components/cards/footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
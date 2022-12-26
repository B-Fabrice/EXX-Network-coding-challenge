import { useEffect, useState } from 'react'
import PropType from 'prop-types'
import Layout from 'components/layout/layout'
import 'styles/globals.css'
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, avalanche, bsc, fantom, mainnet, optimism, polygon } from 'wagmi/chains'

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

const chains = [mainnet, polygon, optimism, arbitrum, avalanche, fantom, bsc]
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider
})

export const ethereumClient = new EthereumClient(wagmiClient, chains)

function MyApp({ Component, pageProps }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <>
      {ready ?
        <WagmiConfig client={wagmiClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WagmiConfig>
        : null}
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropType.elementType.isRequired,
  pageProps: PropType.object.isRequired,
}

export default MyApp

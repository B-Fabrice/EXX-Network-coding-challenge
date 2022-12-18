import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='min-h-screen'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className='min-h-screen bg-gradient-to-br to-gray-400 via-slate-300 from-slate-300 dark:bg-gradient-to-br dark:from-slate-600 dark:via-slate-700 dark:to-gray-800 bg-no-repeat bg-cover'>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  )
}
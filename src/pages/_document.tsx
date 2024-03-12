import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en" className='h-full'>
      <Head />
      <body className='theme max-w-[800px] mx-auto h-full custom-transition'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
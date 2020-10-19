import { useEffect } from 'react'
import globalStyles from 'styles/globals'
import globalFonts from 'styles/fonts'

function App({ Component, pageProps }) {
  useEffect(() => {
    const removeFouc = foucElement => {
      foucElement.className = foucElement.className.replace('no-fouc', 'fouc')
    }
    removeFouc(document.documentElement)
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx global>
        {globalFonts}
      </style>
    </>
  )
}

export default App

import globalStyles from 'styles/globals'
import globalFonts from 'styles/fonts'

function App({ Component, pageProps }) {
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

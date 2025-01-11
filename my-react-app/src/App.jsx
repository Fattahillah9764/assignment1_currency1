import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './pages/homepage'
import CurrencyPage from './pages/currencypage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CurrencyPage/>
    </>
  )
}

export default App

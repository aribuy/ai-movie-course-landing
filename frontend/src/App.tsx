import React, { useState } from 'react'
import Hero from './sections/Hero'
import ProblemSolution from './sections/ProblemSolution'
import Pricing from './sections/Pricing'
import CheckoutPage from './sections/CheckoutPage'

function App() {
  const [showCheckout, setShowCheckout] = useState(false)

  if (showCheckout) {
    return <CheckoutPage />
  }

  return (
    <div className="min-h-screen">
      <Hero onCTAClick={() => setShowCheckout(true)} />
      <ProblemSolution />
      <Pricing onOrderClick={() => setShowCheckout(true)} />
    </div>
  )
}

export default App
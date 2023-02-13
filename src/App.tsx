import { ThoughtProvider } from './context/thought.context'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
    <ThoughtProvider>
      <RouterProvider router={router} />
    </ThoughtProvider>
  )
}

export default App

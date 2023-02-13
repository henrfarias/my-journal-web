import { ThoughtProvider } from './context/thought.context'
import JournalPage from './pages/journal'

function App() {
  return (
    <ThoughtProvider>
      <JournalPage />
    </ThoughtProvider>
  )
}

export default App

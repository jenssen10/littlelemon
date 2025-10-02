import MainPage from "./pages/main-page"
import { AlertProvider } from "./context/alert-context"

function App() {
  return (
    <AlertProvider>
      <MainPage />
    </AlertProvider>
  )
}

export default App

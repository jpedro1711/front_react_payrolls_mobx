import './App.css'
import AlertSnackBar from './components/AlertSnackBar'
import Loading from './components/Loading'
import HomePage from './pages/Home/HomePage'
import { BaseStore, storeContext,  } from './stores/BaseStore'

function App() {
  return (
    <>
    <storeContext.Provider value={BaseStore}>
      <div>
        <Loading />
        <AlertSnackBar />
        <HomePage />
      </div>
    </storeContext.Provider>
    </>
  )
}

export default App

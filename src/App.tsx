
import './App.css'
import { Navbar } from './pages/1.Navbar/Navbar'
import { Home } from './pages/2.Home/Home'
import { Education } from './pages/4.Education/Education'

function App() {

  return (
    <div className='bg-dark' >
      <Navbar />
      <Home />
      <Education />
    </div>
  )
}

export default App

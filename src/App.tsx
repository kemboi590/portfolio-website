
import './App.css'
import { Navbar } from './pages/1.Navbar/Navbar'
import { Home } from './pages/2.Home/Home'
import { Education } from './pages/4.Education/Education'
import { Experience } from './pages/5.Experience/Experience'
import { LicenseCert } from './pages/6.LicenseCert/LicenseCert'
import { Technologies } from './pages/7.Technologies/Technologies'
import Projects from './pages/8.Projects/Projects'

function App() {

  return (
    <div className='bg-dark overflow-x-hidden' >
      <Navbar />
      <Home />
      <Education />
      <Experience />
      <LicenseCert />
      <Technologies />
      <Projects />
    </div>
  )
}

export default App

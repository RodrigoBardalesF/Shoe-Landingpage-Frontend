import {BrowserRouter as Router, Routes, Route} from "react-router-dom"  
import Header from './partials/Header'
import Footer from './partials/Footer'
import Home from './routes/Home'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Router>
        <Header/>
        <Navbar/>
        <div>
          <Routes>
            <>
            <Route path = "/" element = {<Home/>}/>
            </>
          </Routes>
        </div>
        <Footer/>
      </Router>
      </>
  )
}


export default App

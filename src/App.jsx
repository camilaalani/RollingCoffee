import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import Inicio from './components/pages/Inicio'
import Administrador from './components/pages/Administrador';


function App() {
  

  return (
    <>
      <Menu></Menu>
      <Inicio></Inicio>
      {/* <Administrador></Administrador> */}
      <Footer></Footer>
    </>
  )
}

export default App

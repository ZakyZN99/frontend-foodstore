import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Login } from './pages/login';
import Register from './pages/register';
import { AccountDetails } from './pages/detailAccount';
// import { Dashboard } from './pages/dashboard';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <AccountDetails/>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
        <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>
        <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
        <script>var Alert = ReactBootstrap.Alert;</script>
      </div>
      
    </>
    
  )
}


export default App

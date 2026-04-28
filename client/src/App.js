import Contacts from './components/Contacts'
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className='nav-wrapper center-align'>
          <a className='brand-logo' href='/'>Contacts</a>
        </div>
      </nav>
      <div className='row'>
      <Contacts />
      </div>
    </div>
  );
}

export default App;

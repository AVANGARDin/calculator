import './App.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import ListOfBanks from './components/ListOfBanks';
import MortgageCalculator from './components/MortgageCalculator';
import AddBank from './components/AddBank';
import EditBank from './components/EditBank';

function App() {
  return (
<>
<header>
      <nav>
        <Link to="/">List of banks</Link>
        <Link to="/calculator">Mortgage calculator</Link>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<ListOfBanks/>} />
      <Route path='/calculator' element={<MortgageCalculator/>}/>
      <Route path='/addbank' element={<AddBank />}/>
      <Route path='/editbank' element={<EditBank/>}/>
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
</>
  );
}

export default App;

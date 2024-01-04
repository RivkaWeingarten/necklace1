
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import bootstrap from 'react-bootstrap'
import HomePage from './screens/HomePage';
import EachDiamond from './screens/EachDiamond';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   
      <Routes>
        <Route path='/' element ={<HomePage />} />
        <Route path='/diamond/:id' element ={<EachDiamond />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

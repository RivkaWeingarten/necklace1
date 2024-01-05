
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import bootstrap from 'react-bootstrap'
import HomePage from './screens/HomePage';
import EachDiamond1 from './screens/EachDiamond1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   
      <Routes>
        <Route path='/' element ={<HomePage />} />
        <Route path='/diamond/:id' element ={<EachDiamond1 />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

//styles Css//
import './App.css';

//Config Routes//
import {  BrowserRouter, Routes, Route} from 'react-router-dom'


//Components//
import Header from './components/Header'

//Pages//
import ParaComer from './pages/ParaComer'
import Sobremesa from './pages/Sobremesa';
import ParaBeber from './pages/ParaBeber';



function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
          <Routes>
          <Route path='/Hamburgueria/comidas' element={ <ParaComer />}/>
          <Route path='/Hamburgueria/sobremesa' element={ <Sobremesa />}/>
          <Route path='/Hamburgueria/bebidas' element={ <ParaBeber />}/>

          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

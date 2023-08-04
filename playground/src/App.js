import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Timer, Home, Calculator, CPList, Canvas, Calendar } from './page';

function App() {

  console.log('test');
  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/cal' element={<Calculator />} />
          <Route path='/cp' element={<CPList />} />
          <Route path='/canvas' element={<Canvas />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  );
}

const Header = styled.div`
`

export default App;







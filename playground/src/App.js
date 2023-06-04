import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { Timer, Home } from './page';

function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  );
}

const Header = styled.div`
`

export default App;







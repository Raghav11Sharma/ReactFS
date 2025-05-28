import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import { Container } from '@mui/material';

function App() {
  return (
    <>
     <NavBar></NavBar>
      <Container maxWidth ='xl' sx={{mt:10}}>
      <Outlet></Outlet>
      </Container>
    </>
   
  
  );
}

export default App;

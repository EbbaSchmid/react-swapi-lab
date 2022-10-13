import './App.css';
import { Route, Routes } from 'react-router-dom';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import StarshipList from './pages/StarshipList/StarshipList';


function App() {
  return (
    <>

    <Routes>

      <Route 
      path='/' 
      element={<StarshipList/>}/>

      <Route 
      path='/starship' 
      element={<StarshipPage/>}/>

    </Routes>

    </>
  );
}


export default App;
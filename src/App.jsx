import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import StarshipsList from './pages/StarshipsList/StarshipsList';


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route 
        path='/starship-page' 
        element={<StarshipPage />} 
      />
    <Route 
        path='/starships-list' 
        element={<StarshipsList />} 
      />
    </Routes>
    </>
  )
}


export default App;
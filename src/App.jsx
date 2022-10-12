import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import StarshipList from './pages/StarshipList/StarshipList'


function App() {
  return (
    <>
    <Routes>
      <Route 
        path='/starship-page' 
        element={<StarshipPage />} 
      />
    <Route 
        path='/starship-list' 
        element={<StarshipList />} 
      />
    </Routes>
    </>
  )
}


export default App;
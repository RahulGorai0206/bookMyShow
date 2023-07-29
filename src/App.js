import {Routes , Route} from 'react-router-dom';
import './App.css';

// pages
import HomePage from './pages/homePage';
import MoviePage from './pages/moviePage';
import PlayPage from './pages/playPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movies/:id" element={<MoviePage/>} />
      <Route path="/plays" element={<PlayPage/>} />
    </Routes>
  );
}

export default App;


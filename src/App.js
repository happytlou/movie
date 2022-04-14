import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">

      <SearchBar />

     {/* <Routes>
       <Route path="/" element={<Home />} />
       
     </Routes> */}
     
    </div>
  );
}

export default App;

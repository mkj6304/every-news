import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

 const pageSize = 7;

function App() {
   const apiKey = process.env.REACT_APP_API_KEY
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/business" element={<News key="buisness" apiKey={apiKey} pageSize={pageSize} country="us" category="buisness" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

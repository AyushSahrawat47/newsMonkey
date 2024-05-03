import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = (props) => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState("in");



  return (
    <div>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Navbar setCountry={setCountry} country= {country} />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key={`general${country}`} country={country} category="general" />}/>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key={`entertainment${country}`} country={country} category="entertainment"/>}/>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key={`health${country}`} country={country} category="health" />} />
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key={`science${country}`} country={country} category="science" />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key={`sports${country}`} country={country} category="sports" />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key={`technology${country}`} country={country} category="technology" />} />
        </Routes>
      </Router>   
    </div>
  )
}
export default App;


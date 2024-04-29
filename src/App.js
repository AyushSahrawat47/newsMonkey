import './App.css';
import React, { useState } from 'react'
import Navbar from './componenets/Navbar';
import News from './componenets/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = (props)=> {
 const apiKey = process.env.REACT_APP_NEWS_API;


const [progress, setProgress] = useState(0);

  
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News  apiKey={apiKey}setProgress ={setProgress} key="general"  country={"in"} category={"general"} />} />
            <Route exact path="/entertainment" element={<News  apiKey={apiKey}setProgress ={setProgress} key="entertainment"  country={"in"} category={"entertainment"} />} />
            <Route exact path="/health" element={<News  apiKey={apiKey}setProgress ={setProgress} key="health"  country={"in"} category={"health"} />} />
            <Route exact path="/science" element={<News  apiKey={apiKey}setProgress ={setProgress} key="science"  country={"in"} category={"science"} />} />
            <Route exact path="/sports" element={<News  apiKey={apiKey}setProgress ={setProgress} key="sports"  country={"in"} category={"sports"} />} />
            <Route exact path="/technology" element={<News  apiKey={apiKey}setProgress ={setProgress} key="technology"  country={"in"} category={"technology"} />} />
            <Route exact path="/technology" element={<News  apiKey={apiKey}setProgress ={setProgress} key="technology"  country={"in"} category={"technology"} />} />

          </Routes>
        </Router>
      </div>
    )
}
export default App;


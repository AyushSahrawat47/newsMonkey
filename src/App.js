import './App.css';
import React, { Component } from 'react'
import Navbar from './componenets/Navbar';
import News from './componenets/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={18} country={"in"} category={"general"} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={18} country={"in"} category={"entertainment"} />} />
            <Route exact path="/health" element={<News key="health" pageSize={18} country={"in"} category={"health"} />} />
            <Route exact path="/science" element={<News key="science" pageSize={18} country={"in"} category={"science"} />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={18} country={"in"} category={"sports"} />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={18} country={"in"} category={"technology"} />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={18} country={"in"} category={"technology"} />} />

          </Routes>
        </Router>
      </div>
    )
  }
}


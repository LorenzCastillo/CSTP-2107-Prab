// Local Imports
import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards'
import data from './assignmentData.json';
// 3rd Party Imports
import { useState } from 'react';


function App() {
  const [ assignmentData, setAssignmentData ] = useState(data);

  return (
    <>
      <div className="container">

        <div className="container-title">
          <h1>Assignment 1</h1>
        </div>
        <div>
          <Cards data={assignmentData[0].data}/>

        </div>
      </div>
    </>
  )
}

export default App

import React, {useState, useEffect} from 'react';
import {Button} from '@material-ui/core'
import Card from './Card'
import axios from 'axios'

import './app.css'

function App() {

  const [data, setdata] = useState({})
  const [showCard, setshowCard] = useState(true)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
     axios.get('https://api.github.com/users/whiteSnow0213').then(res => {
       console.log(res.data)
       setdata(res.data)
       setloading(false)
     })
  }, [])
 
  const toggleUser = () => {
    setshowCard(!showCard)
  }

  return (
    <div className="App">
       <Button  variant="contained" onClick={toggleUser}>Toggle User</Button>
    
       {showCard && <Card loading={loading}  data={data}/>}
      
    </div>
  );
}

export default App;

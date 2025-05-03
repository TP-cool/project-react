import React from 'react'
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div style={{textAlign: 'center',marginTop: '50px'}}>
        
        <div className="container" > 
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our application.</p>
        <p>Here you can find various features and functionalities.</p>
        <p>Feel free to explore!</p>
        <div style={{backgroundColor:'navy', borderRadius:'50%',width:'100px',height:'100px',marginLeft: '45%'}}>
            <div style={{ backgroundColor:'white', marginTop:'45%', backgroundColor:'white', borderRadius:'50%', width:'10px', height:'10px'}} >
            
            </div>
        </div>
    </div> 
        </div>
        
  )
}

export default Home
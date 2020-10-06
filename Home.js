import React, { Fragment } from 'react';
import { Helmet } from  'react-helmet';
import {FaCubes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import image from '../project/src33.png';

const Home = () => (
    <Fragment>
         {/* <img src={ome}alt="Quiz App options example"/> */}
        <Helmet><title>Quiz App - Home</title></Helmet>
    <div id="home">
        <img  className="image"src={image}alt="Quiz App options example"></img> 
       <section>
           <div>
           <div style={{textAlign:'center'}} >
           <FaCubes  className="cubes"></FaCubes>
         </div>
         <h1>Techquiz</h1>
        
         <div className="play-button-container">
          <ul>
              <li ><Link className="play" to ="/play/instructions"><div id="plays">Play</div></Link></li>
          </ul>
         </div>
         <div className="auth-container">
             <Link to="/login" className="auth" id="login-button">Login</Link>
             <Link to="/signup" className="auth" id="signup-button">Sign up</Link>
             
         </div>
         </div>
       </section>
    </div>
     </Fragment>
    

);


export default Home;
import React, { Fragment } from 'react'
import { Helmet } from  'react-helmet';
import {FaUserCircle} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaEnvelopeOpen} from 'react-icons/fa';
import {FaUnlockAlt,FaArrowCircleLeft} from 'react-icons/fa';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import image3 from '../../project/src26.png';


const Login = () => (
        <Fragment>
            <Helmet><title>login.quiz</title></Helmet>
            <div id="login">
            <span ><Link to="/"><FaArrowCircleLeft size="25px"/></Link></span>
            <img  className="image3"src={image3}alt="Quiz App options example"></img> 
            <section>
                <div>
                    <div style={{textAlign:'center'}}>
                      <h4 className="container" > Login to your Account</h4>
                    </div>
                    <div>
                   <FaUserCircle className="user" size="40px"></FaUserCircle>
                   <TextField className="first"
                    label="Enter firstName"
                    color="primary"
                    size="normal"
                    variant="outlined" 
                   />
                    </div>
                    <div>
                   <FaUser className="use" size="40px"></FaUser>
                   <TextField className="userlast"
                    label="Enter lastName"
                    color="primary"
                    size="normal"
                    variant="outlined" 
                   />
                    </div>
                    <div>
                        <FaEnvelopeOpen className="mail" size="40px"></FaEnvelopeOpen>
                        <TextField className="userMAIL"
                    label="Email"
                    color="primary"
                    size="normal"
                    variant="outlined" 
                   />
                    </div>
                    <div>
                        <FaUnlockAlt className="pass" size="40px" ></FaUnlockAlt>
                        <TextField className="userPASS"
                    label="Password"
                    color="primary"
                    size="normal"
                    variant="outlined" 
                   />
                    </div>
                    <div>
                    <span ><Link to="/signup"><button className="register">signup</button></Link></span>
                    <span ><Link to="/"><button className="right">Home</button></Link></span>
                    </div>
                </div>
            </section>
            </div>
        </Fragment>
    )


export default Login

import React, { Fragment } from 'react'
import { Helmet } from  'react-helmet';
import {FaUserCircle} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa';
import {FaEnvelopeOpen} from 'react-icons/fa';
import {FaUnlockAlt,FaArrowCircleLeft} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import image2 from '../../project/src23.png';


const signup = () => (
        <Fragment>
            <Helmet><title>signup.quiz</title></Helmet>
            <div id="signup">
            <span ><Link to="/"><FaArrowCircleLeft size="25px" className="arrow"/></Link></span>
            <img  className="image2"src={image2}alt="Quiz App options example"></img> 
            <section>
                <div>
                    <div style={{textAlign:'center'}}>
                      <h3 className="container" > create your Account</h3>
                    </div>
                    <div>
                   <FaUserCircle className="user" size="40px"></FaUserCircle>
                   <TextField className="userlast"
                    label="Enter lastName"
                    color="primary"
                    size="normal"
                    variant="outlined" 
                   /></div>
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
                    <span ><Link to="/login"><button className="register"> Login</button></Link></span>
                    <span ><Link to="/"><button className="right">Next--</button></Link></span>
                    </div>
                    <div>
                       <h6 className="h8">   or</h6>
                    </div>
                    <div>
                    <Link to="/updates" className="google" id="button"><FcGoogle classNam="icon2" size="20px"></FcGoogle>create account throught google</Link>
                    </div>
                </div>
            </section>
            </div>
        </Fragment>
    )


export default signup


import React, { Fragment } from 'react'
import { Helmet } from  'react-helmet';
import {FaUserCircle} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa';
import {FaEnvelopeOpen} from 'react-icons/fa';
import {FaUnlockAlt} from 'react-icons/fa';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import image4 from '../../project/src36.png';


const Account = () => (
        <Fragment>
            <Helmet><title>registerpage.quiz</title></Helmet>
            <div id="Account">
            <img  className="image4"src={image4}alt="Quiz App options example"></img>
            <section>
                <div>
                    <div style={{textAlign:'center'}}>
                      <h3 className="container" > create your Account</h3>
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
                    <span ><Link to="/updates"><button className="register"> Register</button></Link></span>
                    </div>
                </div>
            </section>
            </div>
        </Fragment>
    )


export default Account

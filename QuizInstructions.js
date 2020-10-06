import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import answer from '../../project/scr2.png';
import fiftyfifty from '../../project/scr3.png';
import hints from '../../project/scr1.png';
import Options from '../../project/scr1.png';
import {FaHeart} from 'react-icons/fa';
import {FaComments} from 'react-icons/fa';

const QuizInstructions = () =>(
    <Fragment>
        <Helmet><title>QuizInstructions-QuizApp</title></Helmet>
        <div className="instructions container">
            <h3 className="first">How To Play The Game</h3>
            <p className="second">Ensure you read this guide from start to finish</p>
            <ul className="browser-default" id="main-list">
                <li>The Game Has A Duration Of 15 Minutes And Ends As Soon As Your Time Elopses.</li>
                <li>Each Game Consists Of Questions.</li>
                <li>Every Question Contains 4 Options.
                <img className="img1"src={Options} alt="Quiz App options example"></img> 
                </li>
                <li>
                    Select The Option Which Best Answers The Question By Clicking It
                    <img src={answer}alt="Quiz App options example"/>
                </li>
                <li>
                
                It Show Green Color For The Correct And Also For Correct Answer Have Got 1 Mark
                   
                </li>
                <li>
                It show red color for wrong answer
                 
                
                 <img src={fiftyfifty} alt="quiz app fiftyfifty"/>
                </li>
                <li>
                Using A timer icon it help us to how time is left 
                <span>
                  {/* <FaComments  className="bulb"></FaComments>   */}
                    </span>  
                    <img src={hints} alt="quiz app"></img>
                </li>
                <li>Feel Free To Quit The Game At Any Time In That Case Your Score Will Be Enrolled Afterwards </li>
                <li> The Timer Starts As Soon As The Game Loods</li>
                <li>Let's Do . </li>

                     </ul>
                     <div className="style4">
                         <span className="left"><Link to="/">No take me back</Link></span>
                         <span className="right"><Link to="/play/quiz">OKAY! Let's begin</Link></span>
                     </div>
        </div>
    </Fragment>
    
);
export default QuizInstructions;
console.log("hi");
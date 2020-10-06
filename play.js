import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet';
import {FaQuestion, FaComments,FaClock,FaArrowCircleLeft } from 'react-icons/fa';
import QuizData from './QuizData';
import Answer from './Answer';
import { Link } from 'react-router-dom';
import Timer from 'react-compound-timer';
import TimerSeconds from 'react-compound-timer';


 export default class play extends Component {
     state = {
            questions:{
                1:'what is color of the banana?',
                2:'how many alphabets are present?',
                3:'what is the capital of India?',
                4:"how many days are there in a week?",
                5:'what is even prime number?',
            },
            answers:{
                1:{
                    1:'red',
                    2:'yellow',
                    3:'blue',
                    4:'white',
                },
                2:{
                    1:'26',
                    2:'27',
                    3:'32',
                    4:'30',
                },
                3:{
                    1:'delhi',
                    2:'agra',
                    3:'hyderabad',
                    4:'kashmir',
                },
                4:{
                    1:'2',
                    2:'10',
                    3:'7',
                    4:'8',
                },
                5:{
                    1:'0',
                    2:'2',
                    3:'3',
                    4:'5',
                }
            },
            correctAnswers:{
                1:'2',
                2:'1',
                3:'1',
                4:'3',
                5:'2',
            },
           correctAnswer:0,
           clickedAnswer:0,
           step:1,
           score:0,
           time:[],
           count:1,
           hints:5
            
         };
         
            
    
    checkAnswer = answer => {
         const {correctAnswers, step, score} = this.state;
         if (answer === correctAnswers[step]){
             this.setState({
                  score: score + 1,
                  correctAnswer: correctAnswers[step],
                  clickedAnswer: answer
             });
         }else{
             this.setState({
                correctAnswer: 0,
                clickedAnswer:answer ,
                
             });
         }
     }
     nextStep= step =>{
            this.setState({
              step: step+1,
              correctAnswer: 0,
              clickedAnswer:0

            });
     }
    

     
     Quit =(step)=>{
         this.setState({
          step:step+1,
          correctAnswer:0,
          clickedAnswer:0
         });
          
        }
    previous =(step)=>{
            this.setState({
             step:step-1,
             correctAnswer:0,
             clickedAnswer:0
            });
             
           }
     
           handlehints =() =>{
               const options = Array.from(document.querySelectorAll('.Answers'));
               let indexofanswer;
               options.forEach((answers,index) =>{
                      if(answers.innerHTML === this.state.Answer){
                             indexofanswer = index;
                      }
               }); 
               while(true){
                   const randomNumder = Math.round(Math.random() * 3);
                   if(randomNumder!== indexofanswer){
                       options.forEach((option,index)=>{
                       if(index === randomNumder){
                           options.styles.visibility ='hidden';
                           this.setState((prevState) => ({
                               hints:prevState.hints
                         }));
                       }
                      
                   });
                   break;
               }          
            }
        }
    
    
     
    render () {
        let {questions,step,answers,correctAnswer,clickedAnswer,score,count,hints} =this.state;
        return (
            <Fragment>
                <Helmet><title>Quizpage</title></Helmet>
                <span ><Link to="/"><FaArrowCircleLeft size="25px" className="arrow"/></Link></span>
                <div className="questions">
               
                    { step <= Object.keys(questions).length ? 
                    (<>
                   <h2>Quiz Mode</h2>
                   <div className="lifeline-container">
                       <p>
                           <span className="life">
                           <FaQuestion  className="heart"size="40px"></FaQuestion>
                           </span><span className="lifeline"></span>
                       </p>
                       <p>
                           <span className="hints">
                           <FaComments onClick={this.handlehints}  className="message"size="20px"></FaComments> 1</span>
                           <span >{hints}min</span>
                       </p>
                       </div>
                       <div>
                           <p>
                    <span className="left"style={{float:'left'}}>{Object.keys(questions).length} questions</span>
                           <span className="right">
                               <Timer initialTime={60 *15* 1000}
                                direction="backward"
                                timeToUpdate={1}
                                checkpoints={[
                         {
                           time:  0,
                           
                            callback: () => alert('countdown finished'),
                        },
                        ]}><Timer.Minutes />:<Timer.Seconds></Timer.Seconds></Timer><span className="lifeline"></span><span className="timer"></span>
                                   <FaClock className="clock" size="20px"></FaClock>
                               </span>
                           </p>
                        </div> 
                      
                 <h5>
                     <QuizData question={questions[step]}/>
                 
                </h5>
                  <div className="options-container">
                    
                 <Answer
                      answer={answers[step]}
                      step={step}
                      checkAnswer={this.checkAnswer}
                      correctAnswer={correctAnswer}
                      clickedAnswer={clickedAnswer}
                      />
                      </div>
                     
                
                <div className="button-container">
                   <button className="previousstep"
                     onClick={() => this.previous(step)} >Previous</button>
                    <button className="NextStep"
                   disabled={
                    clickedAnswer && Object.keys(questions).length >= step
                    ? false : true
                
                } onClick={() => this.nextStep(step)} >Next</button>
                    <button onClick={() => this.Quit(step)} 
                     >Quit</button>
                   
                  </div>
                  </>) : (
                    <div className="finalPage">
                        <h1>You have completed the quiz!</h1>
                        <p className="color">Your score is: {score} of {Object.keys(questions).length}</p>
                        <p className="thank">Thank you!</p>
                        <div>
                         <span className="style2" ><Link to="/play/instructions"><button className="tryagain">TryAgain</button></Link></span>
                         <span className="style3" ><Link to="/"><button className="homepage"> Go To HomePage</button></Link></span></div>
                     <div className="style">
                         <span className="account" >if you want more updates<Link to="/account">create your account--</Link></span>
                    </div>
                    </div>
                    
                )
                   
                   }
                  
                </div>
         </Fragment>
        )
    }
}



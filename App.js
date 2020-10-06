import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './project/Home';
import QuizInstructions from './project/quiz/QuizInstructions';
import play from'./project/quiz/play';
import Account from'./project/quiz/Account';
import Updates from './project/quiz/Updates';
import Login from './project/quiz/login';
import signup from './project/quiz/signup';


// import Userform from './components/Userform';
// import Nav from './components/nav';
// import About from './components/About';
// import Shop from './components/Shop';
// import Namelist from './components/Namelist';
// import Parentcomponent from './components/parentcomponent';
// import Usergreeting from './components/Usergreeting';
// import Greet from './components/greet'
// import Car from './components/priya'
// import Jsx from './components/JSX'
// import Greet from './components/greet';
// import State from './components/test2'
// import Count from './components/count'
// import Click from './components/click'
// import Class from './components/classclick'

class App extends Component {
    render(){
  return (
    <div>
    <Router>
    <div className="App">
      <Route path="/" exact component={Home}/>
      <Route path="/play/instructions" exact component={QuizInstructions}/>
      <Route path="/play/quiz" exact component={play}/>
      <Route path="/account" exact component={Account}/>
      <Route path="/updates" exact component={Updates}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={signup}/>
      <play></play>
      
      {/* <Home></Home>
      <QuizInstructions></QuizInstructions> */}
   
    {/* <Nav></Nav> */}
      {/* <Switch>
        <Route path="/" exact component={Home}/> */}
        {/* <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/> */}
      {/* </Switch> */}
    
        {/* <Userform></Userform> */}
    {/* // <Greet name='priya'>
    //     {/* <p>this is childern</p> */}
    {/* // </Greet> */} 
    {/* <Greet name='varsha'></Greet>
    <Greet name='nani'></Greet> */}
    {/* <State> </State> */}
    {/* <Count></Count> */}

    {/* <Car></Car> */}
    {/* <Jsx></Jsx>
    <Jsx></Jsx>
    <Jsx></Jsx> */} 
    {/* <Click></Click>
    <Class></Class> */}
    {/* 
     */}
     {/* <Usergreeting></Usergreeting> */}
     {/* <Namelist></Namelist> */}
     
     </div>
     </Router>
</div>
  );
}
}

// const Home= () => (
//   <form>
//   <div>
//     <label>UserName</label>
//     <input type='text'/>
//   </div>

//     <label>email
//     </label>
//     <input type='text'/>
//     </form>
 
// );


export default App;

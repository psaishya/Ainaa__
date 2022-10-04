import React, {useState} from 'react';
import Home from './Home'
import Header from './Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './Footer';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Test from './Test';
// import Logout from './Logout';
import UpdateProfile from './UpdateProfile';
import UserProfile from './UserProfile';
import AddGoals from './AddGoals';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import ViewTasks from './ViewGoals';
import EditGoal from './EditGoal';
import Ainaa from './Ainaa';

document.body.style.backgroundColor='white';
document.body.style.color='black';
export default function Main() {
  const[mode,setMode]=useState('light');
  const changemode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      
      document.body.style.backgroundColor='rgb(46, 40, 45)';
      document.body.style.color='rgb(100, 149, 237)';
      
      // setalertfunc("Dark mode has been enabled","success");
      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      // setalertfunc("Dark mode has been disabled","success");
  }
  }
  return (
    <div>
      <Header mode={mode} changemode={changemode}/>
      
      <Router>
            <Routes>
                <Route exact path='/' element={ <Home/>}/>
                <Route exact path='/about' element={ <About/>}/>
                <Route exact path='/login' element={ <Login/>}/>
                {/* <Route exact path='/logout' element={ <Logout/>}/> */}
                <Route exact path='/signup' element={ <Signup/>}/>
                <Route exact path='/test' element={ <Test/>}/>
                <Route exact path='/dashboard' element={ <Dashboard/>}/>
                {/* <Route exact path='/homepage' element={ <Sidebar/>}/> */}
                <Route exact path='/updateprofile' element={ <UpdateProfile/>}/>
                <Route exact path='/profile' element={ <UserProfile/>}/>
                <Route exact path='/viewgoals' element={ <ViewTasks/> }/>
                <Route exact path='/addgoals' element={<AddGoals/>}/>
                <Route exact path='/editgoal/:taskid' element={<EditGoal/>}/>
                <Route exact path='/ainaa' element={ <Ainaa/>}/>


            </Routes>
        </Router>
      <Footer/>
      
    </div>
  )
}


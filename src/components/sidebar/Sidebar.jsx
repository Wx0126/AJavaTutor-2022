import './sidebar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">
                A Java Tutor
            </span>
        </div>
        <hr/>
        <div className="center">
            <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
                <p className="title">TUTORIAL CONTENT</p>
                <Link to="/introduction" style={{ textDecoration: "none" }}>

                <li>
                    <TaskAltOutlinedIcon className='icon'/>
                    <span>Introduction</span>
                    
                </li>
                </Link>
                <li>
                    <TaskAltOutlinedIcon className='icon'/>
                    <span>chapter 1</span>
                </li> 
                <li>
                    <TaskAltOutlinedIcon className='icon'/>
                    <span>chapter 2</span>
                </li> 
                <li>
                    <TaskAltOutlinedIcon className='icon'/>
                    <span>chapter 3</span>
                </li> 
                <li>
                    <TaskAltOutlinedIcon className='icon'/>
                    <span>chapter 4</span>
                </li> 
                <li>
                    <TaskAltOutlinedIcon className='icon'/>
                    <span>chapter 5</span>
                </li> 
                <li>
                    <TaskAltOutlinedIcon className='icon'/>
                    <span>chapter 6</span>
                </li>  
                <p className="title">EXERCISE SECTION</p>
                <li>
                    <QuizOutlinedIcon className='icon'/>
                    <span>exercise 1</span>
                </li> 
                <li>
                    <QuizOutlinedIcon className='icon'/>
                    <span>exercise 2</span>
                </li> 
                <li>
                    <QuizOutlinedIcon className='icon'/>
                    <span>exercise 3</span>
                </li> 
                <li>
                    <QuizOutlinedIcon className='icon'/>
                    <span>exercise 4</span>
                </li> 
                <li>
                    <QuizOutlinedIcon className='icon'/>
                    <span>exercise 5</span>
                </li> 
                

   
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className='icon'/>
            <span>Users</span>
          </li>

          <li>
            <PersonAddIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon'/>
            <span>Logout</span>
          </li>

               
            </ul>
        </div>

    </div>
    
  )
}

export default Sidebar
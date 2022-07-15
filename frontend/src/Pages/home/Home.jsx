import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navsection from '../../components/navbar/Navsection';
const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homecontainer">
            <Navsection/>
            <div className="widgets">
                <h1>Welcome to A Java Tutor!!</h1>
  

            </div>

        </div>
        
    </div>
  )
}

export default Home
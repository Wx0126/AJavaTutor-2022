import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navsection from '../../components/navbar/Navsection';
const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homecontainer">
            <Navsection/>
            This is a Java Tutor Tutorial !!!!!
        </div>
        
    </div>
  )
}

export default Home
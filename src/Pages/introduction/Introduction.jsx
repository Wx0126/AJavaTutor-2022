import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import Datatable from '../../components/datatable/Datatable'
import './introduction.scss'
const Introduction = () => {
  return (
    <div className='introduction'>
        <Sidebar/>
        <div className="introductionContainer">
            <Navsection/>
            <Datatable/>
        </div>
        
    </div>
  )
}

export default Introduction
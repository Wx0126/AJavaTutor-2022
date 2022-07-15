import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import Datatable from '../../components/datatable/Datatable'
import './introduction.scss'

const Introduction = () => {
const submit=(e)=>{
        e.preventDefault();
        
            const code= document.getElementById("input").value;
            const data={ code:code };
            fetch('/code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data) 
            })
            .then (res => res.text())
            .then (txt => alert(txt))

        
        
    }

    
  return (
    <div className='introduction'>
        <Sidebar/>
        <div className="introductionContainer">
            <Navsection/>
                <div className="widgets">
                    <div className="left">
                        <span className="title">
                        <h1>Java Introduction</h1>
                        <h2>What is Java?</h2>
                        <p>Java is a popular programming language, born in 1995.
                                It is owned by Oracle, and more than 3 billion devices run Java.
                        </p>
                        <hr/>
                        <p>It is good at:</p>
                        <ul>
                            <li>Mobile applications (especially Android apps)</li>
                            <li>Desktop applications</li>
                            <li>Web applications</li>
                            <li>Games</li>
                            <li>Database connection</li>

                        </ul>

                        </span>
                    </div>


            
          
                 </div>

                 <div className="widgets">
                    <h3>The advantages of Java:</h3>
                    <ul>
                        <li>Java works on all kinds of platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
                        <li>It is one of the most used programming languages among the developers</li>
                        <li>Compared with other languages, it is easier to learn and simpler to use</li>
                        <li>It is open-source and free</li>
                        <li>It is secure, fast and strong</li>
                        <li>It has a large community support</li>
                        <li>Java is an object-oriented language which show the program structure clearly and support the code to be reused, lowering costs</li>
                    </ul>
                    
                 </div>
                 <div className="widgets">
                    <h3 >Exercise: </h3>
                    
                        <p>Please try to output this "Hello A Java Tutor!" by using the basic Syntax (System.out.println())</p>

                        	<form onSubmit={(e)=>{submit(e)}}>
                                <label>please enter your Java code here:</label> 
                                <input type="text" id = "input"/>
                                  <button id="button" type="submit">submit</button>
                            </form>
	                      
                    
                 </div>
            <Datatable/>

        </div>
        
    </div>
  )
}

export default Introduction
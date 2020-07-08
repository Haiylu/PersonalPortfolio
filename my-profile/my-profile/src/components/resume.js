import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience'
import Skills from './skills';
import  RelevantCourse from './courses';

class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>   
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img 
                            src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/007/924/datas/profile.png" alt="avatar"
                            style={{height:'200px'}}/>
                        </div>
                    <h2 style={{paddingTop:'2em'}}>Haiylu Kibret</h2>
                    <h4 style={{color:'grey'}}>Programmer </h4>
                    <hr style={{boarderTop: '3px solid #833fb2', width:'50%'}}/>
                    <p>I'm currently studying computer science at the University of virginia and interested in developing my skills as full-stack software engineer by solving challenging problems.</p>
                    <hr style={{ boarderTop: '3px solid #833fb2', width:'50%'}}/>
                    <h5>Address </h5>
                    <p>Arlington VA, 1803 N.Quinn</p>
                    <h5>Phone</h5>
                    <p>(571)-253-0756</p>
                    <h5>Email</h5>
                    <p>Haiylu.Kibret@gmail.com</p>
                    <h5>Web</h5>
                    <p>haiylu.com</p>
                    <hr style={{ boarderTop: '3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}> 
                    <h2>Education</h2>
                    <Education
                    startYear={2018}
                    endYear={2020}
                    schoolName="University of Virginia"
                    schoolDescription="Bachelor's degree in Computer Science"
                    />
                    <Education
                    startYear={2016}
                    endYear={2018}
                    schoolName="Northern Virginia Community College"
                    schoolDescription=" Associate's degree in Computer Science"
                    />
                <hr style={{boarderTop:'3px solid #e22947'}}/>
                <h2>Experience</h2>
                <Experience
                startYear={'May 2020'}
                endYear={'Present'}
                internshipName="Freelance Front-End developer"
                internshipDescription="
                Uses HTML 4/HTML 5, CSS3, JavaScript, Angular JS, Node JS and JSON.
                Implemented Web Storm for client-side and server-side development with Node JS.
                Experience in creating UI design, wireframes, Mock ups, Visual Design, Page layout, Layer Composition and prototyping using Adobe Photoshop and Adobe Illustrator.
                
                "
                />
                <Experience
                startYear={'Feb 2019'}
                endYear={'Dec 2019'}
                internshipName="Web Dev Intern at UVA Dev Hub"
                internshipDescription="Developed Dialog-Flow application for campus library services that allows users to interact with voice and text-based conversational interface; utilized React, JS ,HTML,CSS, JSON in the process.
                 Used the latest HTML5 elements for video playback, content rendering using semantic tags such as articles.
                "
                />
                <Experience
                startYear={'August 2018'}
                endYear={'Feb 2019'}
                internshipName="Software engineering intern at WillowTree"
                internshipDescription="Worked on a network of lights that are associated with project teams and spaces that indicate a team’s dedicated flow time. Used React, JavaScripts, Git, and firebase.
                Implemented atlasboard to display real data from project management website using JSON and packages like docker and NPM.
                Applied a complete software SDLC which includes requirement, coding, design, analysis, testing, using Agile, Test Driven methodologies.
                Gained additional technical skills from experienced software engineers, mentors and collaborated in an Agile environment."
                />
                <hr style={{boarderTop:'3px solid #e22947'}}/>
                <h2>Skills</h2>
                <Skills  
                skill="REACT"
                progress={100}/>

                <Skills  skill="JAVASCRIPT"
                progress={95}/> 

                <Skills  skill="HTML/CSS"
                progress={90}/> 

                <Skills  skill="Node Js"
                progress={60}/>     

                 <Skills  skill="React Native"
                progress={55}/>  
                <hr style={{boarderTop:'3px solid #e22947'}}/>
                <h2>Relevant Courses</h2>
                < RelevantCourse  
                courseDescription=" Mobile Application |
                Algorithm |Program Data Representation | Database| Human Computer Interaction|Artificial Intelligence|Theory of Computation|Computer Architecture
                " />
                    </Cell>
                </Grid>
            </div>

        )

    }
}
export default Resume;


import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid">
                  <Cell col={12}>
                  <img 
                    src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/007/924/datas/xlarge.png"
                     alt="BestPic"
                    className="BestPic-img"/>
                    <div className="banner-text">
                        <h1>Full-Stack Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | React | ReactNative | NodeJs| Express|MongoDB</p>
                        <div className="social-links">
                            {/*LinkedIn */}
                        <a href="https://www.linkedin.com/in/haiylu-kibret" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                        </a>
                        {/*Github*/}
                              <a href="https://github.com/Haiylu" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                        </a>
                            {/*GroupProject*/}
                            <a href="https://devpost.com/Haiylu" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-devpost-square"  aria-hidden="true"/>
                        </a>

                        </div>
                        </div>
                  </Cell>
              </Grid>
            </div>

        )

    }
}
export default Landing;
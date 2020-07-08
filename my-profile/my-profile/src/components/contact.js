import React, {Component} from 'react';
import {Grid,Cell,List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="Contact-body">
                <Grid className="contact-Grid">
                    <Cell col={6} >
                      <h2>Haiylu Kibret</h2>
                         <img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/001/007/924/datas/profile.png"
                         alt="avatar"
                         style={{height:'150px'}}/>
                         <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>I'm Haiylu Kibret and interested in developing my skills as full-stack software engineer by solving challenging problems. I'm always open to opportunities to provide values for others and grow myself in software development. Please feel free to reachout to me!</p>    
                         </Cell>  
                         <Cell col={6}><h2> Contact Me</h2>
                         <hr/>

                         <div className="Contact-List">
                         <List>
                    <ListItem>
                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (571)253-0756
                    </ListItemContent>
                    </ListItem>
                    <ListItem>
                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    Haiylu.Kibret@gmail.com
                    </ListItemContent>
                    </ListItem>
                    <ListItem>
                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    My Skype Id
                    </ListItemContent>
                    </ListItem>
                    </List>
                    </div>
                </Cell>
                </Grid>
            </div>
        )

    }
}
export default Contact;
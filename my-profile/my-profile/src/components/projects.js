import React, {Component} from 'react';
import {Tabs,Tab,Grid, Cell,CardTitle,CardActions,Card, CardText,Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }
    toggleCategories(){

    if(this.state.activeTab === 0){
     return(
         /*project #1*/
         <div className ="projects-grid">
             <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
         <CardTitle style={{color:'#fff',height:'176px',background:'url(https://devpost-challengepost.netdna-ssl.com/assets/defaults/thumbnail-placeholder-42bcab8d8178b413922ae2877d8b0868.gif) center/cover'}}>React Project #1</CardTitle>
         <CardText>React is an open-source JavaScript library for building user interfaces
          </CardText>
          <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePenn</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}> 
          <IconButton name="share"/>
           </CardMenu>
      </Card>

      <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:'url(https://devpost-challengepost.netdna-ssl.com/assets/defaults/thumbnail-placeholder-42bcab8d8178b413922ae2877d8b0868.gif) center/cover'}}>React Project #1</CardTitle>
            <CardText>React is an open-source JavaScript library for building user interfaces
             </CardText>
             <CardActions border>
                 <Button colored>Github</Button>
                 <Button colored>CodePenn</Button>
                 <Button colored>LiveDemo</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}> 
             <IconButton name="share"/>
              </CardMenu>
         </Card>

         <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
            <CardTitle style={{color:'#fff',height:'176px',background:'url(https://devpost-challengepost.netdna-ssl.com/assets/defaults/thumbnail-placeholder-42bcab8d8178b413922ae2877d8b0868.gif) center/cover'}}>React Project #1</CardTitle>
            <CardText>React is an open-source JavaScript library for building user interfaces
             </CardText>
             <CardActions border>
                 <Button colored>Github</Button>
                 <Button colored>CodePenn</Button>
                 <Button colored>LiveDemo</Button>
             </CardActions>
             <CardMenu style={{color:'#fff'}}> 
             <IconButton name="share"/>
              </CardMenu>
         </Card>
      </div>
        

    )
    }else if(this.state.activeTab === 1 ){
       
    }else if(this.state.activeTab === 2){
        return(
            <div><h1>React Native</h1></div>
        )
    }else if(this.state.activeTab === 3){
        return(
            <div><h1>HTML/CSS</h1></div>
        )
    }
}
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab}onChange={(tabId)=> this.setState({activTab:tabId})}ripple>
                <Tab>React</Tab>
                <Tab>JavaScript</Tab>
                <Tab>React Native</Tab>   
                <Tab>HTML/CSS</Tab>
                </Tabs>
        
                    <Grid>
                        <Cell col={12}>
                            <div className="content">  {this.toggleCategories()}</div>
                        </Cell>
                        </Grid> 
            </div>
        )

    }
}
export default Projects;
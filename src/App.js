import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormDataComponent from './form-data-component'
import Emoji from './Emoji'
// import { openDB, deleteDB } from 'https://unpkg.com/idb?module'
// import { openDB, deleteDB, wrap, unwrap } from 'idb'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={  
                  user : "",
                  isUserMatched : false,
                  isLogButton : false,
                  isRegButton : false                  
                }
  }

  handleUser(e){
    this.setState({ user : e.target.value,
                    isUserMatched : false,
                    isLogButton : false,
                    isRegButton : false,   
                    isLoggedOut : false                 
                  } )
  }

  handleLogIn(){ 
    if ( JSON.parse(localStorage.getItem(this.state.user)) ) {
      this.setState({isLogButton : true ,isUserMatched : true , isRegButton : false , isLoggedOut : false})
    }
    else { this.setState({isLogButton : true ,isUserMatched : false , isRegButton : false , isLoggedOut : false}) }
    
  }

  handleLogOut(){
    this.setState({isLogButton : false ,isUserMatched : false , isRegButton : false , isLoggedOut : true})
  }

  handleRegister(){
    if ( JSON.parse(localStorage.getItem(this.state.user)) ) {
      this.setState({isRegButton : true ,isUserMatched : true , isLogButton : false ,isLoggedOut : false})
    }
    else { this.setState({isRegButton : true ,isUserMatched : false , isLogButton : false ,isLoggedOut : false}) }
  }

  callRegister() {
      if (this.state.user.trim() != ""){
        var username = {}
        username['username']=this.state.user
        localStorage.setItem(this.state.user,JSON.stringify(username))
        return <text>Yayy!! Let's Start Filling The Buckets Now! <Emoji symbol="🖖" label="Yo"/></text>
        } else {return <text>Uh-Oh! Please Provide a UserName and Click Register <Emoji symbol="😕" label="Confused"/> </text>}
      }
   
  render(){
  return (
    <div>
      {
        this.state.isLogButton && this.state.isUserMatched && !this.state.isLoggedOut ? 
        <div className="User-list">
          <FormDataComponent value={this.state.user} /> 
          <br/>
          <button className="Log-Out-Button" onClick={() => this.handleLogOut('LogOut')}>
            Log Out
          </button>
        </div> :
        <div className="App-header">
          <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/263/bucket_1faa3.png" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/263/bucket_1faa3.png 2x" alt="Bucket on Google Android 11.0" width="120" height="120"/>
          <text>Let's Start Bucket-Listing !!</text>
          <br/>
          <input type="text" onChange={e => this.handleUser(e)}></input> 
          <br/>
          <button className="Log-In-Button" onClick={() => this.handleLogIn()}>
            Log In
          </button> 
          <br/>
          <button className="Register-Button" onClick={() => this.handleRegister()}>
            Register
          </button>
          <br/>
          {this.state.isRegButton && this.state.isUserMatched ? <div>Hey There ! You Already Have a Bucket <Emoji symbol="👍" label="Like"/> </div>:""}
          {this.state.isRegButton && !this.state.isUserMatched ?  this.callRegister() : ""}
          {this.state.isLogButton && !this.state.isUserMatched ? <div>Seems Like You Don't Have a Bucket Yet ! Hit Register <Emoji symbol="😐" label="Neutral"/> </div> : ""}      
        </div> 
      }
    </div>
  );
  }
}

export default App;

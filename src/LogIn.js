import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {fire , base ,database} from './config/Firebase';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        alert(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        alert("You Have Been Successfully Registered");
        database.ref('Details').child(this.state.email.replace(/\@/g,"").replace(/\./g,"")).child('username').set(this.state.email);
        database.ref('Details').child(this.state.email.replace(/\@/g,"").replace(/\./g,"")).child('tasks/title').set("")
        database.ref('Details').child(this.state.email.replace(/\@/g,"").replace(/\./g,"")).child('removed/title').set("")
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        alert(error);
      })
  }
  render() {
    return (
       <div className="App-header">
            <div>
                <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/263/bucket_1faa3.png" srcset="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/263/bucket_1faa3.png 2x" alt="Bucket on Google Android 11.0" width="120" height="120"/>
            </div>
            <text>Let's Start Bucket-Listing !!</text>
            <div>
                <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <br/>
                <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div>
                <button type="submit" onClick={this.login} className="Log-In-Button">Login</button>
                <button onClick={this.signup} style={{marginLeft:10}} className="Register-Button">Sign Up</button>
            </div>
 
        </div>
    );
  }
}
export default LogIn;

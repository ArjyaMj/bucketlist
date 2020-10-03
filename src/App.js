import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormDataComponent from './form-data-component'
import Emoji from './Emoji'
import  {fire , base ,database} from './config/Firebase'
import Home from './Home'
import LogIn from './LogIn'

class App extends React.Component {
  constructor(props){
    super(props);
    this.authListener = this.authListener.bind(this);
    this.state={  
                  userprop : [],  
                  username : ''          
                }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ userprop : user , username : user.email});
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ userprop: null });
        localStorage.removeItem('user');
      }
    });
  }
   
  render(){
  return (
    <div>
      {this.state.userprop ?   <Home username={this.state.username.replace("@","").replace(".","")}/> : <LogIn />}
    </div>
  );
  }
}

export default App;

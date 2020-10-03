import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import './App.css';
import AppDrag from './AppDrag'


export default class FormDataComponent extends Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
        this.reset = this.reset.bind(this);   
        this.delete = this.delete.bind(this);     

        this.state = {
            inputs : [],
            lastInput : "",
            textBox : "",
            indexToDelete : -1
        }
    }

    delete(index){
        this.setState({indexToDelete : index})
        var exist = JSON.parse(localStorage.getItem(this.props.value))
        var del = JSON.parse(localStorage.getItem(this.props.value))['userlist']
        del.splice(index,1)
        exist['userlist'] = del
        localStorage.setItem(this.props.value,JSON.stringify(exist))
        
    }

    reset(){
        this.setState({textBox : "",lastInput : ""})
        if(JSON.parse(localStorage.getItem(this.props.value))['userlist']) {
            var exist = {}
            exist = JSON.parse(localStorage.getItem(this.props.value))
            delete exist['userlist']
            localStorage.setItem(this.props.value,JSON.stringify(exist))
        }
    }

    recordPost(e) {
        this.setState({ textBox : e.target.value,lastInput: e.target.value })
    }

    click() {
        this.setState({indexToDelete:-1,textBox : "" ,lastInput : this.state.lastInput})
        var exist = JSON.parse(localStorage.getItem(this.props.value))
        var oldInput = []
        if (this.state.lastInput.trim() != ""){
        if(JSON.parse(localStorage.getItem(this.props.value))['userlist']) {
            oldInput = JSON.parse(localStorage.getItem(this.props.value))['userlist']
        } 
        oldInput.push(this.state.lastInput);  
        exist['userlist'] = oldInput
        localStorage.setItem(this.props.value, JSON.stringify(exist)); 
        }     
      }    


    render() {
        var result = []
        if (JSON.parse(localStorage.getItem(this.props.value))['userlist']){
            result = JSON.parse(localStorage.getItem(this.props.value))['userlist']
        }
        var inputAppDrag ={willUpdate :1 , tasks : result}
        
        return (
            <div>
                {this.props.value == "" || this.props.value=="No User" ? 
                "" :
                <div>
                <div>
                    <input type="text" value={this.state.textBox} onChange={e=>this.recordPost(e)} />
                    <button  className="Add-Button" onClick={this.click}>Add</button>
                    <button  className="Reset-Button" onClick={() => {if (window.confirm('This Will Delete All Tasks')) this.reset()}}>Reset</button>
                </div> 
                <br/>
                <div>
                {   !JSON.parse(localStorage.getItem(this.props.value))['userlist'] || JSON.parse(localStorage.getItem(this.props.value))['userlist'].length==0 ? 
                   'Hey '+this.props.value+' You Do Not Have Any Task' : 
                   <div>
                       {this.props.value}'s Bucket List
                       <br/><br/>
                       <div>                                               
                       <AppDrag value={inputAppDrag}/>                    
                        </div>
                    </div>
                }
                </div>
                  
                </div>                 
    }  
             </div>
        )
    }
}
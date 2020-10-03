import React,{useState,useEffect} from 'react';
import {fire , base ,database} from './config/Firebase'

const Home =(props)=> {
    var [contactObjects,setContactObjects] = useState({})
    var [textBox,setTextBox] =  useState('')
    var username = props.username
    useEffect (()=>{database.ref().on('value',(snapshot) =>{
        setContactObjects({...snapshot.val()});
        console.log(snapshot.val())
            })},[]);

     function recordPost(e) {
        setTextBox(e.target.value);
    }

     function addTask(t) {
         if (t.trim()!=""){
            database.ref('Details').child(username).child('tasks').push(t)
         }
        
        setTextBox('')
    }

    function reset(){
        database.ref('Details').child(username).child('tasks').set({title : " "})
        setTextBox('')
    }

    function handleDelete(task){
        database.ref('Details').child(username).child('tasks').child(task).remove()
    }

    function handleLogOut() {
        fire.auth().signOut();
    }  

        return(
        <div className="User-list">
            <div>
                <input type="text" value={textBox} onChange={recordPost} />
                <button  className="Add-Button" onClick={()=>addTask(textBox)}>Add</button>
                <button  className="Reset-Button" onClick={() => {
                    if (window.confirm('Empty Your Bucket ?')) reset()
                    }}>Reset</button>
            </div>
            <div>
                {
                    Object.keys(contactObjects).map
                    (
                        id =>{
                        return(
                            Object.keys(contactObjects[id][username].tasks).map(
                            task=> {return (contactObjects[id][username].tasks[task].trim()!="" ? 
                            <div> 
                                <button className="Reset-Button" onClick={()=>{
                                if (window.confirm('Confirm Delete')) handleDelete(task)}}>
                                    Delete
                                    </button> {contactObjects[id][username].tasks[task]}  
                                </div> : ""
                            )
                        }
                        )  )
                    }
                    )
                }
            </div>
            <br/>
            <div>
            <button className="Log-Out-Button" onClick={handleLogOut}>
            Log Out
            </button>
            </div>
        </div>
        )
    
};

export default Home;
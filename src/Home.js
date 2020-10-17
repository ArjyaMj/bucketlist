import React,{useState,useEffect} from 'react';
import {fire , base ,database} from './config/Firebase'
import { MdDeleteForever,MdDone,MdUndo } from "react-icons/md";
import {BiLogOut} from "react-icons/bi"
// import Navbar from 'navbar-react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'


const Home =(props)=> {
    var [contactObjects,setContactObjects] = useState({})
    var [textBox,setTextBox] =  useState('')
    var [inFlag,setInFlag] =  useState(1)
    var username = props.username
    useEffect (()=>{database.ref().on('value',(snapshot) =>{
        setContactObjects({...snapshot.val()});
        console.log(snapshot.val())
            })},[]);
            
     function handleInFlag(){
         setInFlag(1)
     } 
     
     function handleOutFlag(){
        setInFlag(0)
    } 

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
        database.ref('Details').child(username).child('removed').set({title : " "})
        setTextBox('')
    }

    function handleDone(task,taskname){
        database.ref('Details').child(username).child('tasks').child(task).remove()
        database.ref('Details').child(username).child('removed').push(taskname)
        
    }

    function handleDelete(task){
        database.ref('Details').child(username).child('tasks').child(task).remove()
        
    }
    function handleDeleteCompleted(task){
        database.ref('Details').child(username).child('removed').child(task).remove()
        
    }

    function handleUndo(task,taskname){
        database.ref('Details').child(username).child('removed').child(task).remove()
        database.ref('Details').child(username).child('tasks').push(taskname)
    }

    function handleLogOut() {
        fire.auth().signOut();
    }  

        return(
        <div className="User-list">
            <div style={{"flex":"none"}}>
                <input type="text" value={textBox} onChange={recordPost} />
                <button  className="Add-Button" onClick={()=>addTask(textBox)}>Add</button>
                <button  className="Reset-Button" onClick={() => {
                    if (window.confirm('Empty Your Bucket ?')) reset()
                    }}>Reset
                </button>
                <button  onClick={handleLogOut}>
                    <BiLogOut/>
                </button>
            </div>
            <div style={{"flex":"none"}}>
                <button className="Button" onClick={handleInFlag}>Tasks</button>
                <button className="Button" onClick={handleOutFlag}>Completed</button>
            </div>
            <br/>
            <div>
                {inFlag==1 ? <div>
                {
                    Object.keys(contactObjects).map
                    (
                        id =>{
                        return(
                            Object.keys(contactObjects[id][username].tasks).map(
                            task=> {return (contactObjects[id][username].tasks[task].trim() !="" ? 
                            <div  style={{"border":"1px solid black" ,"padding":"5px 5px"
                                         ,"background-color":"#1F2320","border-radius": "5px"}}>
                                <div className="flex">
                                    {contactObjects[id][username].tasks[task]}
                                </div>
                                <div>
                                    <button onClick={()=>handleDone(task,contactObjects[id][username].tasks[task])}>
                                    <MdDone/>
                                    </button>
                                    <button onClick={()=>{
                                        if (window.confirm('Confirm Delete')) handleDelete(task)}}>
                                            <MdDeleteForever/>
                                    </button> 
                                </div>
                                </div>
                                : ""
                            )
                        }
                        )  )
                    }
                    )
                }
            </div> : <div>
                {
                    Object.keys(contactObjects).map
                    (
                        id =>{
                        return(
                            Object.keys(contactObjects[id][username].removed).map(
                            task=> {return (contactObjects[id][username].removed[task].trim() !="" ? 
                            <div style={{"border":"1px solid black","padding":"5px 5px"
                                         ,"background-color":"#1F2320","border-radius": "5px"}}>
                                <div className="flex">
                                   {contactObjects[id][username].removed[task]}
                                   <div>
                                   <button onClick={()=>{
                                        if (window.confirm('Want to take this inside bucket?')) 
                                        handleUndo(task,contactObjects[id][username].removed[task])}}>
                                    <MdUndo/>
                                    </button> 
                                    <button onClick={()=>{
                                        if (window.confirm('Confirm Delete')) handleDeleteCompleted(task)}}>
                                            <MdDeleteForever/>
                                    </button> 
                                    </div> 
                                </div>
                            </div> : ""
                            )
                        }
                        )  )
                    }
                    )
                }
            </div>}
            
            
            </div>
            <br/>
        </div>
        )
    
};

export default Home;
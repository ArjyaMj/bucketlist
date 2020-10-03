import React, { Component } from 'react';
export default class AppDrag extends Component {  
    constructor(props) {
        super(props);
        this.state = {
          tasks: "",
          draggedOver: "",
          draggedNow: ""
        };
      }

      initiateState(){
        this.setState({tasks : this.props.value})
      }

      onDragOver = (e) => {
        e.preventDefault();
        this.setState({ draggedOver: e.target.value });
      };
      onDragStart = (e, task) => {
        this.setState({ draggedNow: task });
      };
      onDrop = (e) => {
        var bkp = this.state.tasks.slice();
        var indexDraggedOver = bkp.indexOf(this.state.draggedOver);
        var indexDraggedNow = bkp.indexOf(this.state.draggedNow);
        bkp.splice(indexDraggedNow, 1);
        bkp.splice(indexDraggedOver, 0, this.state.draggedNow);
        this.setState({ tasks: bkp });
      };
    
      render() {
        var tasks = [];
        this.props.value.forEach((task) => {
          tasks.push(
            <div
              key={task}
              onDragStart={(e) => this.onDragStart(e, task)}
              draggable
            >
              {task}
            </div>
          );
        });
        return (
            <div
              onDrop={(e) => this.onDrop(e)}
              onDragOver={(e) => this.onDragOver(e)}
            >
              {tasks}
            </div>
        );
      }
}
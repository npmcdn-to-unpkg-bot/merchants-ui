import React, {Component} from 'react';
import { Link } from 'react-router';

var TaskList = React.createClass({
    render: function(){
        var displayTask  = function(task, taskIndex){
            return 
            <li>
                {task}
                <button onClick= {this.deleteElement}> Delete </button>
            </li>;
        };
    
        return (
                <ul className="list-group">
                    {this.props.items.map((task, taskIndex) =>
                        <li key={taskIndex} className="list-group-item">
                            <button className="btn" onClick={this.props.deleteTask} value={taskIndex}>Remove</button>
                            <label>{task}</label>
                        </li>
                    ) }
                </ul>
        );
    }
 });

var TaskApp = React.createClass({
    getInitialState: function(){
        return {
             items: [ ],
             task: ''
        }
    },
    
    deleteTask: function(e) {
        var taskIndex = parseInt(e.target.value, 10);
        console.log('remove task: %d', taskIndex, this.state.items[taskIndex]);
        this.setState(state => {
            state.items.splice(taskIndex, 1);
            return {items: state.items};
        });
    },

    onChange: function(e) {
        this.setState({ task: e.target.value });
    },



    addTask:function (e){
        this.setState({
            items: this.state.items.concat([this.state.task]),
    
            task: ''
        })
    
        e.preventDefault();
        console.log('Add task!', this.state.task);
    },

    render: function(){ 
        return(
            <div className="row">
                <div className="col-md-3">
                    <form onSubmit={this.addTask}>
                        <div className="input-group">
                            <input className="form-control" onChange={this.onChange} type="text" value={this.state.task}/>
                            <span className="input-group-btn">
                                <button className="btn btn-secondary">Add Tag</button>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">
                    <TaskList items={this.state.items} deleteTask={this.deleteTask} />
                </div>
            </div>

        );
    }
});

var AddStocks = React.createClass({
    render: function(){
        return (
            <div className="row main">
                <div className="row">  
                    <div className="col-md-4 form-group">
                        <label>Hash</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Reference</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Stamp</label>
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 form-group">
                        <label>Short</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Code</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Path</label>
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 form-group">
                        <label>Name</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Title</label>
                        <input className="form-control" type="text"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 form-group">
                        <label>Description</label>
                        <textarea className="form-control" type="text" rows="7"/>
                        <hr/>
                        <button className="btn btn-primary default-button" type="submit">Submit</button>
                        <button className="btn btn-primary default-button" type="reset">Clear</button>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Model</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col-md-4 form-group">
                        <label>Status</label>
                        <select className="form-control">
                            <option>Disabled</option>
                            <option>Remove</option>
                            <option>Active</option>
                        </select>
                    </div>
                    <div className="form-group">        
                    <label>Tags</label>
                    <TaskApp/>
                    </div>
                </div>
            </div>
        )
    }
})

export default class Stocks extends Component {
    render() {
        return (
            <div className="container">
                <h2>Add Stocks</h2>
                <AddStocks />
            </div>
        );
    }
}


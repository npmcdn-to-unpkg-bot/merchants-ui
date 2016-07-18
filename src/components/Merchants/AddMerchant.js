import React, {Component} from 'react';
import { Link } from 'react-router';

var TodoBox = React.createClass({
	getInitialState: function () {
		return {
			data: [
				{'id':'00001','task':'Tag 1','complete':'false'},
				{'id':'00002','task':'Tag 2','complete':'false'},
                {'id':'00003','task':'Tag 3','complete':'false'}
			]
		};
	},
	generateId: function () {
		return Math.floor(Math.random()*90000) + 10000;
	},
	handleNodeRemoval: function (nodeId) {
		var data = this.state.data;
		data = data.filter(function (el) {
			return el.id !== nodeId;
		});
		this.setState({data});
		return;
	},
	handleSubmit: function (task) {
		var data = this.state.data;
		var id = this.generateId().toString();
		var complete = 'false';
		data = data.concat([{id, task, complete}]);
		this.setState({data});
	},
	handleToggleComplete: function (nodeId) {
		var data = this.state.data;
		for (var i in data) {
			if (data[i].id == nodeId) {
				data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
				break;
			}
		}
		this.setState({data});
		return;
	},
	render: function() {
		return (
            <div className="row">
                <div className="col-md-4">
                    <TodoForm onTaskSubmit={this.handleSubmit} />
                </div>
                <div className="col-md-8">
                    <TodoList 
                        data={this.state.data} 
                        removeNode={this.handleNodeRemoval} 
                        toggleComplete={this.handleToggleComplete} />
                </div>
            </div>
		);
	}
});

var TodoList = React.createClass({
	removeNode: function (nodeId) {
		this.props.removeNode(nodeId);
		return;
	},
	toggleComplete: function (nodeId) {
		this.props.toggleComplete(nodeId);
		return;
	},
	render: function() {
		var listNodes = this.props.data.map(function (listItem) {
			return (
				<TodoItem
                     key={listItem.id} 
                     nodeId={listItem.id} 
                     task={listItem.task} 
                     complete={listItem.complete} 
                     removeNode={this.removeNode} 
                     toggleComplete={this.toggleComplete} />
			);
		},this);
		return (
			<ul className="list-group">
				{listNodes}
			</ul>
		);
	}
});

var TodoItem = React.createClass({
	removeNode: function (e) {
		e.preventDefault();
		this.props.removeNode(this.props.nodeId);
		return;
	},
	toggleComplete: function (e) {
		e.preventDefault();
		this.props.toggleComplete(this.props.nodeId);
		return;
	},
	updateClass: function () {
		
	},
	render: function() {
		var classes = 'input-tags list-group-item clearfix';
		if (this.props.complete === 'true') {
			classes = classes + 'input-tags list-group-item-success';
		}
		return (
			<li className={classes}>
				{this.props.task}
				<div className="pull-right tags-button" role="group">
					{/*<button 
                        type="button" 
                        className="btn btn-xs btn-success img-circle" 
                        onClick={this.toggleComplete}>&#x2713;
                    </button>
                    // Check Button
                     */}
                     <button 
                        type="button" 
                        className="btn btn-xs btn-danger img-circle" 
                        onClick={this.removeNode}>
                        &#xff38;
                        </button>
				</div>
			</li>
		);
	}
});

var TodoForm = React.createClass({
	doSubmit: function (e) {
		e.preventDefault();
		var task = this.refs.task.value.trim();
		if (!task) {
			return;
		}
		this.props.onTaskSubmit(task);
		this.refs.task.value = '';
		return;
	},
	render: function() {
		return (
			<div className="commentForm vert-offset-top-2">
				<div className="clearfix">
					<form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
						<div className="form-group">
							<label htmlFor="task" className="col-md-2 control-label">Tags</label>
							<div className="col-md-10">
								<input type="text" id="task" ref="task" className="form-control" placeholder="What do you need to do?" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-10 col-md-offset-2 text-right">
								<input type="submit" value="Save Item" className="btn btn-primary" />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
});


var DefaultForm = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Merchant Details</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>Hash</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Reference</label>
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>Stamp</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Short</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Code</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Path</label>
                            <input className="form-control" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 form-group">
                            <label>Name</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="col-md-4 form-group">
                            <label>Title</label>
                            <input className="form-control" type="text"/>
                        </div>
						<div className="col-md-4 form-group">
                            <label>Description</label>
                            <textarea className="form-control" type="text" rows="5"/>
                        </div>
                    </div>
                    <div className="row">
                        
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
                    </div>
                    <hr/>
                    <TodoBox />
                </div>
            </div>
        )
    }
})

var MerchantDetails = React.createClass({
    render: function() {
        return (
            <div className="row">
            <h3>Merchant Details</h3>
            </div>
        )
    }
})
export default class Merchants extends Component {
    render() {
        return (
            <div className="container">
                <h2>Add Merchant</h2>
                <DefaultForm />
                <MerchantDetails />
            </div>
        );
    }
}


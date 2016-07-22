import React, {Component} from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

var ArrayBox = React.createClass({
	getInitialState: function () {
		return {
			data: []
		};
	},
	generateId: function () {
		return Math.floor(Math.random() * 90000) + 10000;
	},
	handleNodeRemoval: function (nodeId) {
		var data = this.state.data;
		data = data.filter(function (el) {
			return el.id !== nodeId;
		});
		this.setState({ data });
		return;
	},
	handleSubmit: function (task) {
		var data = this.state.data;
		var id = this.generateId().toString();
		var complete = 'false';
		data = data.concat([{ id, task, complete }]);
		this.setState({ data });

	},
	handleToggleComplete: function (nodeId) {
		var data = this.state.data;
		for (var i in data) {
			if (data[i].id == nodeId) {
				data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
				break;
			}
		}
		this.setState({ data });
		return;
	},
	render: function () {
		return (
            <div className="row">
                <div className="col-md-4">
                    <ArrayForm onTaskSubmit={this.handleSubmit} />
                </div>
                <div className="col-md-8">
					<ArrayList
                        data={this.state.data}
                        removeNode={this.handleNodeRemoval}
                        toggleComplete={this.handleToggleComplete}/>
                </div>
            </div>
		);
	}
});
var ArrayList = React.createClass({
	removeNode: function (nodeId) {
		this.props.removeNode(nodeId);
		return;
	},
	toggleComplete: function (nodeId) {
		this.props.toggleComplete(nodeId);
		return;
	},
	render: function () {
		var listNodes = this.props.data.map(function (listItem) {
			return (
				<ArrayItems
					key={listItem.id}
					nodeId={listItem.id}
					task={listItem.task}
					complete={listItem.complete}
					removeNode={this.removeNode}
					toggleComplete={this.toggleComplete} />
			);
		}, this);
		return (
			<ul className="list-group">
				{listNodes}
			</ul>
		);
	}
});
var ArrayItems = React.createClass({
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
	render: function () {
		var classes = 'input-tags list-group-item clearfix';
		if (this.props.complete === 'true') {
			classes = classes + 'input-tags list-group-item-success';
		}
		return (
			<li className={classes}>
				{this.props.task}
				<div className="pull-right tags-button" role="group">
					{/*	<button 
                        type="button" 
                        className="btn btn-xs btn-success img-circle" 
                        onClick={this.toggleComplete}>&#x2713;
                    </button> */}
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
var ArrayForm = React.createClass({
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
	render: function () {
		return (
			<div className="vert-offset-top-2">
				<div className="clearfix">
					<form className="ArrayForm form-horizontal" onSubmit={this.doSubmit}>
						<div className="form-group">
							<label htmlFor="task" className="col-md-2 control-label"></label>
							<div className="col-md-10">
								<input type="text" id="task" ref="task" className="form-control"/>
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
	getDefaultProps: function () {
		return {
			store: {}
		}
	},
	getInitialState: function () {
		return {
			storeTitle: '',
			hash: '',
			reference: '',
			stamp: '',
			short: '',
			code: '',
			path: '',
			name: '',
			title: '',
			description: '',
			model: '',
			status: ''
		}
	},
	submit: function () {
	},
	handleChange: function (event) {
		var object = {};
		object[event.target.name] = event.target.value;
		this.setState(object);
	},
	componentDidUpdate: function componentDidUpdate() {
		this.props.handleChange({
			'storeTitle': this.state.storeTitle,
			'hash': this.state.hash,
			'reference': this.state.reference,
			'stamp': this.state.stamp,
			'short': this.state.short,
			'code': this.state.code,
			'path': this.state.path,
			'name': this.state.name,
			'title': this.state.title,
			'description': this.state.description,
			'model': this.state.model,
			'status': this.state.status
		});
	},
	render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Store Profile</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
						<div className="col-md-8 form-group">
							<label>Store Title</label>
                            <input
								name="storeTitle"
								className="form-control"
								type="text"
								value={this.state.storeTitle}
								onChange={this.handleChange}/>
						</div>
                        <div className="col-md-6 form-group">
                            <label>Hash</label>
                            <input
								name="hash"
								className="form-control"
								type="text"
								value={this.state.hash}
								onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Reference</label>
                            <input
								className="form-control"
								type="text"
								name="reference"
								value={this.state.reference}
								onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>Stamp</label>
                            <input
								name="stamp"
								className="form-control"
								type="text"
								value={this.state.stamp}
								onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Short</label>
                            <input
								className="form-control"
								type="text"
								name="short"
								value={this.state.short}
								onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Code</label>
                            <input
								className="form-control"
								type="text"
								name="code"
								value={this.state.code}
								onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Path</label>
                            <input
								className="form-control"
								type="text"
								name="path"
								value={this.state.path}
								onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 form-group">
                            <label>Name</label>
                            <input
								className="form-control"
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-4 form-group">
                            <label>Title</label>
                            <input
								className="form-control"
								type="text"
								name="title"
								value={this.state.title}
								onChange={this.handleChange}/>
                        </div>
						<div className="col-md-4 form-group">
                            <label>Description</label>
                            <textarea
								className="form-control"
								type="text"
								rows="5"
								name="description"
								value={this.state.description}
								onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-4 form-group">
                            <label>Model</label>
                            <input
								className="form-control"
								type="text"
								name="model"
								value={this.state.model}
								onChange={this.handleChange}/>
                        </div>

                        <div className="col-md-4 form-group">
                            <label>Status</label>
                            <select
								className="form-control"
								name="status"
								value={this.state.status}
								onChange={this.handleChange}>
                                <option>Disabled</option>
                                <option>Remove</option>
                                <option>Active</option>
								<option>Pending</option>
                            </select>
                        </div>
                    </div>
                    <hr/>
					<label htmlFor="">Store Tags</label>
                    <ArrayBox />
                </div>
            </div>
        )
    }
});

var BranchDetails = React.createClass({
	getDefaultProps: function () {
		return {
			store: {}
		}
	},
	getInitialState: function () {
		return {
			branchname: '',
			branchtitle: '',
			branchstore: '',
			state: '',
		}
	},
	submit: function () {
	},

	handleChange: function (event) {
		var object = {};
		object[event.target.name] = event.target.value;
		this.setState(object);
	},
	componentDidUpdate: function componentDidUpdate() {
		this.props.handleChange({
			'branchname': this.state.branchname,
			'branchtitle': this.state.branchtitle,
			'state': this.state.state
		});
	},
    render: function () {
        return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Branch Details</h3>
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-md-6 form-group">
							<label>Branch Name</label>
							<input
								type="text"
								className="form-control"
								name="branchname"
								value={this.state.branchname}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-6 form-group">
							<label>Branch Title</label>
							<input
								type="text"
								className="form-control"
								name="branchtitle"
								value={this.state.branchtitle}
								onChange={this.handleChange}/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 form-group">
							<label>Logo</label>
							<div className="input-group">
								<input type="text" className="form-control"/>
								<span className="input-group-btn">
									<button className="btn" type="button">Upload</button>
								</span>
							</div>
						</div>
						<div className="col-md-4 form-group">
							<label>State</label>
							<select
								className="form-control"
								name="state"
								value={this.state.state}
								onChange={this.handleChange}>
								<option>Open</option>
								<option>Close</option>
								<option>Down</option>
								<option>Mainternance</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

var LocationDetails = React.createClass({
	getDefaultProps: function () {
		return {
			store: {}
		}
	},
	getInitialState: function () {
		return {
			address: '',
			latitude: '',
			longitude: '',
			point: '',
			region: '',
			country: ''
		}
	},
	submit: function () {
	},

	handleChange: function (event) {
		var object = {};
		object[event.target.name] = event.target.value;
		this.setState(object);
	},
	componentDidUpdate: function componentDidUpdate() {
		this.props.handleChange({
			'address': this.state.address,
			'latitude': this.state.latitude,
			'longitude': this.state.longitude,
			'point': this.state.point,
			'region': this.state.region,
			'country': this.state.country
		});
	},
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Location Details</h3>
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-md-4 form-group">
							<label>Address</label>
							<input
								type="text"
								className="form-control"
								name="address"
								value={this.state.address}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-4 form-group">
							<label>Latitude</label>
							<input
								type="text"
								className="form-control"
								name="latitude"
								value={this.state.latitude}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-4 form-group">
							<label>Longitude</label>
							<input
								type="text"
								className="form-control"
								name="longitude"
								value={this.state.longitude}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-4 form-group">
							<label>Point</label>
							<input
								type="text"
								className="form-control"
								name="point"
								value={this.state.point}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-4 form-group">
							<label>Region</label>
							<input
								type="text"
								className="form-control"
								name="region"
								value={this.state.region}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-4 form-group">
							<label>Country</label>
							<input
								type="text"
								className="form-control"
								name="country"
								value={this.state.country}
								onChange={this.handleChange}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

var ImagesDetails = React.createClass({
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Images Details</h3>
				</div>
				<div className="panel-body">
					<label>Images</label>
					<ArrayBox />
				</div>
			</div>
		)
	}
});

var StaffDetails = React.createClass({
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Staff Details</h3>
				</div>
				<div className="panel-body">
					<label>Staff</label>
					<ArrayBox />
					<hr/>
					<label>Owner</label>
					<ArrayBox />
				</div>
			</div>
		)
	}
});

var PaymentDetails = React.createClass({
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Payment Details</h3>
				</div>
				<div className="panel-body">
					<label>Product</label>
					<ArrayBox />
					<hr/>
					<label>Stock</label>
					<ArrayBox />
					<hr/>
					<label>Payment</label>
					<ArrayBox />
					<hr/>
					<label>Discount</label>
					<ArrayBox />
					<hr/>
					<label>Product</label>
					<ArrayBox />
					<hr/>
					<label>Charge</label>
					<ArrayBox />
				</div>
			</div>
		)
	}
});

var ItemStore = React.createClass({
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Staff Details</h3>
				</div>
				<div className="panel-body">
					<label>Item</label>
					<ArrayBox />
					<hr/>
					<label>Stock</label>
					<ArrayBox />
					<hr/>
					<label>Change</label>
					<ArrayBox />
					<hr/>
					<label>Product</label>
					<ArrayBox />
				</div>
			</div>
		)
	}
})



export default class Store extends Component {
	constructor(props) {
		super(props);
		this.store = {};
		this.storeList = {};
	}
	componentDidUpdate() {
	}
	handleChange(store) {
		if (store.storeTitle) {
			this.store['storeTitle'] = store.storeTitle;
		}
		if (store.hash) {
			this.store['hash'] = store.hash;
		}
		if (store.reference) {
			this.store['reference'] = store.reference;
		}
		if (store.stamp) {
			this.store['stamp'] = store.stamp;
		}
		if (store.short) {
			this.store['short'] = store.short;
		}
		if (store.code) {
			this.store['code'] = store.code;
		}
		if (store.path) {
			this.store['path'] = store.path;
		}
		if (store.name) {
			this.store['name'] = store.name;
		}
		if (store.title) {
			this.store['title'] = store.title;
		}
		if (store.description) {
			this.store['description'] = store.description;
		}
		if (store.model) {
			this.store['model'] = store.model;
		}
		if (store.branchname) {
			this.store['branchname'] = store.branchname;
		}
		if (store.branchtitle) {
			this.store['branchtitle'] = store.branchtitle;
		}
		if (store.branchstore) {
			this.store['branchstore'] = store.branchstore;
		}
		if (store.state) {
			this.store['state'] = store.state;
		}
		if (store.store) {
			this.store['store'] = store.status;
		}
		if (store.address) {
			this.store['address'] = store.address;
		}
		if (store.latitude) {
			this.store['latitude'] = store.latitude;
		}
		if (store.longitude) {
			this.store['longitude'] = store.longitude;
		}
		if (store.point) {
			this.store['point'] = store.point;
		}
		if (store.region) {
			this.store['region'] = store.region;
		}
		if (store.country) {
			this.store['country'] = store.country;
		}
	}
	doSubmit() {
		var store = _.cloneDeep(this.store);
		this.storeList[store.storeTitle] = store;
		console.log(this.storeList);
	}
    render() {
        return (
            <div className="container">
                <DefaultForm merchant={this.merchant} handleChange={this.handleChange.bind(this) } />
                <BranchDetails merchant={this.merchant} handleChange={this.handleChange.bind(this) } />
				<LocationDetails merchant={this.merchant} handleChange={this.handleChange.bind(this) }/>
				<ImagesDetails merchant={this.merchant}/>
				<StaffDetails merchant={this.merchant}/>
				<PaymentDetails merchant={this.merchant}/>
				<button className="btn btn-primary" onClick={this.doSubmit.bind(this) }>Submit</button>
			</div>
        );
    }
}



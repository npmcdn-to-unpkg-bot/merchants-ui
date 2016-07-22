import React, {Component} from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
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


var BranchDetails = React.createClass({
	getDefaultProps: function () {
		return {
			merchant: {}
		}
	},
	getInitialState: function () {
		return {
			branchname: '',
			branchtitle: '',
			branchstore: '',
			status: '',
			groupname: '',
			store: ''
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
			'branchstore': this.state.branchstore,
			'status': this.state.status,
			'groupname': this.state.groupname,
			'store': this.state.store
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
						<div className="col-md-3 form-group">
							<label>Branch Name</label>
							<input
								type="text"
								className="form-control"
								name="branchname"
								value={this.state.branchname}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-3 form-group">
							<label>Branch Title</label>
							<input
								type="text"
								className="form-control"
								name="branchtitle"
								value={this.state.branchtitle}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-3 form-group">
							<label>Branch Store</label>
							<input
								type="text"
								className="form-control"
								name="branchstore"
								value={this.state.branchstore}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-3 form-group">
                            <label>Status</label>
                            <select
								className="form-control"
								name="status"
								value={this.state.status}
								onChange={this.handleChange}>
                                <option>Disabled</option>
                                <option>Remove</option>
                                <option>Active</option>
                            </select>
                        </div>
					</div>
					<hr/>
					<div className="row">
						<div className="col-md-4 form-group">
							<label>Group Name</label>
							<input
								type="text"
								className="form-control"
								name="groupname"
								value={this.state.groupname}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-4 form-group">
							<label>Store</label>
							<input
								type="text"
								className="form-control"
								name="store"
								value={this.state.store}
								onChange={this.handleChange}/>
						</div>
						<div className="col-md-4 form-group">
							<label>Logo</label>
							<div className="input-group">
								<input type="text" className="form-control"/>
								<span className="input-group-btn">
									<button className="btn" type="button">Upload</button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

var LocationDetails = React.createClass({
	getDefaultProps: function () {
		return {
			merchant: {}
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

var PaymentDetails = React.createClass({
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Payment Details</h3>
				</div>
				<div className="panel-body">
					<label>Payment</label>
					<ArrayBox />
					<label>Discount</label>
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


var DefaultForm = React.createClass({
	getDefaultProps: function () {
		return {
			merchant: {}
		}
	},
	getInitialState: function () {
		return {
			merchantTitle: '',
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
			'merchantTitle': this.state.merchantTitle,
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
                    <h3 className="panel-title">Merchant Profile</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
						<div className="col-md-8 form-group">
							<label>Merchant Title</label>
                            <input
								name="merchantTitle"
								className="form-control"
								type="text"
								value={this.state.merchantTitle}
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
					<label htmlFor="">Merchant Tags</label>
                    <ArrayBox />
                </div>
            </div>
        )
    }
});

var FilterBar = React.createClass({
	render: function () {
		return (
			<div className="form-group">
				<label className="control-label">Merchant List</label>
				<select className="form-control">
					<option></option>
				</select>
			</div>
		)
	}
})

export default class Merchant extends Component {
	constructor(props) {
		super(props);
		this.merchant = {};
		this.merchantList = {};
	}
	componentDidUpdate() {
	}
	handleChange(merchant) {
		if (merchant.merchantTitle) {
			this.merchant['merchantTitle'] = merchant.merchantTitle;
		}
		if (merchant.hash) {
			this.merchant['hash'] = merchant.hash;
		}
		if (merchant.reference) {
			this.merchant['reference'] = merchant.reference;
		}
		if (merchant.stamp) {
			this.merchant['stamp'] = merchant.stamp;
		}
		if (merchant.short) {
			this.merchant['short'] = merchant.short;
		}
		if (merchant.code) {
			this.merchant['code'] = merchant.code;
		}
		if (merchant.path) {
			this.merchant['path'] = merchant.path;
		}
		if (merchant.name) {
			this.merchant['name'] = merchant.name;
		}
		if (merchant.title) {
			this.merchant['title'] = merchant.title;
		}
		if (merchant.description) {
			this.merchant['description'] = merchant.description;
		}
		if (merchant.model) {
			this.merchant['model'] = merchant.model;
		}
		if (merchant.branchname) {
			this.merchant['branchname'] = merchant.branchname;
		}
		if (merchant.branchtitle) {
			this.merchant['branchtitle'] = merchant.branchtitle;
		}
		if (merchant.branchstore) {
			this.merchant['branchstore'] = merchant.branchstore;
		}
		if (merchant.status) {
			this.merchant['status'] = merchant.status;
		}
		if (merchant.groupname) {
			this.merchant['groupname'] = merchant.groupname;
		}
		if (merchant.store) {
			this.merchant['store'] = merchant.status;
		}
		if (merchant.address) {
			this.merchant['address'] = merchant.address;
		}
		if (merchant.latitude) {
			this.merchant['latitude'] = merchant.latitude;
		}
		if (merchant.longitude) {
			this.merchant['longitude'] = merchant.longitude;
		}
		if (merchant.point) {
			this.merchant['point'] = merchant.point;
		}
		if (merchant.region) {
			this.merchant['region'] = merchant.region;
		}
		if (merchant.country) {
			this.merchant['country'] = merchant.country;
		}
	}
	doSubmit() {
		var merchant = _.cloneDeep(this.merchant);
		this.merchantList[merchant.merchantTitle] = merchant;
		console.log(this.merchantList);
	}
	render() {
        return (
            <div className="container">
				<FilterBar/>
                <DefaultForm merchant={this.merchant} handleChange={this.handleChange.bind(this)}/>
                <BranchDetails merchant={this.merchant} handleChange={this.handleChange.bind(this)}/>
				<LocationDetails merchant={this.merchant} handleChange={this.handleChange.bind(this) }/>
				<ImagesDetails merchant={this.merchant}/>
				<StaffDetails merchant={this.merchant}/>
				<PaymentDetails merchant={this.merchant}/>
				<div className="well">
					<pre>
					{JSON.stringify(this.merchantList)}
					</pre>
				</div>
				<button className="btn btn-primary" onClick={this.doSubmit.bind(this) }>Submit</button>
            </div>
        );
    }
}


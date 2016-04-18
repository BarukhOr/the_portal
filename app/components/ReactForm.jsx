var React = require("react");
var Dropzone = require('react-dropzone');
var request = require('SuperAgent');
var mui = require('material-ui');
	Paper 			= mui.Paper,
	TextField 		= mui.TextField,
	FlatButton 		= mui.FlatButton,
	DropDownMenu 	= mui.DropDownMenu,
	MenuItem 		= mui.MenuItem,
	Divider 		= mui.Divider,
	FloatingActionButton = mui.FloatingActionButton;

const style = {
  padding: 20,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
 

module.exports = React.createClass({
	getInitialState: function () {
		return {
			value: 1,
			orientation: 1
		}
	},

	onDrop: function (files) {
	  console.log('Received files: ', files);
	  var req = request.post('/upload');
	  files.forEach((file)=> {
	      req.attach(file.name, file);
	  });
	  req.end();
	},

	handleType: function (event, index, value) {
		this.setState({value: value});
	},

	handleOrientation: function (event, index, value) {
		this.setState({orientation: value});
	},

	onOpenClick: function () {
		this.refs.dropZone.open();
	},

	typeMenu: function () {
		return(
			<div className="form-group">
				<DropDownMenu value={this.state.value} onChange={this.handleType}>
				  <MenuItem value={1} primaryText="Flyer"/>
				  <MenuItem value={2} primaryText="RA Board"/>
				  <MenuItem value={3} primaryText="TV Display"/>
				  <MenuItem value={4} primaryText="Other"/>
				</DropDownMenu>
				<br />
			</div>
		);
	},

	renderDescription: function () {
		return(
			<div className="form-group">
				<TextField floatingLabelText="Description"  hintText="Carefully describe your design." rows={5} />
				<br />
			</div>
		);
	},

	renderFileUpload: function () {
		const style = {
		  marginRight: 20,
		};
		return (
			<div className="form-group">
				<FloatingActionButton mini={true} style={style} onClick={this.onOpenClick}>
					{/* Icon Goes Here */}
				</FloatingActionButton>

    			<TextField hintText="Add Image (click or drag)">
        			<Dropzone ref="dropZone" accept="image/*" onDrop={this.onDrop} />
    			</TextField>
			</div>
		);
	},

	reactForm: function (value) {
		if(value == 1) {
			return(
				<div>
					{this.typeMenu()}
					<DropDownMenu value={this.state.orientation} onChange={this.handleOrientation}>
					  <MenuItem value={1} primaryText="Portrait" />
					  <MenuItem value={2} primaryText="Landscape" />
					</DropDownMenu>
					<br />
					<TextField floatingLabelText="Quantity" hintText="Number of copies to be printed" />
		        	<br />
		        	{this.renderDescription()}
				</div>
			);
		}
		else if(value == 2) {
			return(
				<div>
					{this.typeMenu()}
					<TextField floatingLabelText="Height" hintText="Enter vertical dimension"/>
					<br />
		        	<TextField floatingLabelText="Width" hintText="Enter horizontal dimension"/>
		        	<br />
		        	{this.renderDescription()}
				</div>
			);
		}
		else if(value == 3) {
			return(
				<div>
					{this.typeMenu()}
					<TextField floatingLabelText="Size" hintText="ex. 1920x1080 or 32in"/>
					<br />
					{this.renderDescription()}
				</div>
			);
		}
		else if(value == 4) {
			return(
				<div>
					{this.typeMenu()}
					{this.renderDescription()}
				</div>
			);
		}
	},

    render:function () {
        return(
        	<div className="container">
        		<Paper style={style} zDepth={2}>
	        		<form action='/' method='POST'>
		        		<div className="form-group">
		        			<TextField floatingLabelText="Name" hintText="Enter Requestors name"/>
		        			<br />

		        			<TextField floatingLabelText="Phone" hintText="Enter contact phone number"/>
		        			<br />
		        		</div>
		        		<Divider />

	        			{this.reactForm(this.state.value)}
	        			{this.renderFileUpload()}
	        		</form>
				</Paper>
    		</div>
    	)
    }
})

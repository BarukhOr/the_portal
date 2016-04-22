var React = require("react");
var Dropzone = require('react-dropzone');
var request = require('SuperAgent');
var Colors = require("material-ui/lib/styles/colors");
var mui = require('material-ui');
	Paper 			= mui.Paper,
	TextField 		= mui.TextField,
	FlatButton 		= mui.FlatButton,
	DropDownMenu 	= mui.DropDownMenu,
	MenuItem 		= mui.MenuItem,
	Divider 		= mui.Divider,
	FontIcon		= mui.FontIcon,
	List 			= mui.List,
	ListItem 		= mui.ListItem,
	FlatButton		= mui.FlatButton,
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
			orientation: 1,
			nameError: null,
			phoneError: null,
			quantityError: null,
			size: null,
			heightError: null,
			widthHeight: null,
			description: null,
			files: []
		}
	},

	onDrop: function (files) {
	  // console.log('Received files: ', files);
	  stateFiles = this.state.files
	  files.forEach((file)=> {
		  stateFiles.push({fileName: file.name, file: file})
	  });
	  this.setState({files: stateFiles})
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

	handleInput: function(e, val) {
		// console.log(e)
		// console.log(e.nativeEvent)
		// console.log(this.refs.name.props.errorText)
	},

	onSubmit: function (value) {
		var formRequest = request.post("/form")
		var valid = true;

		if(this.refs.name.getValue() )
		
		var name = this.refs.name.getValue()
		if(name){
			formRequest.field("name", name)
			this.setState({nameError: null})
		}
		else {
			valid = false;
			this.setState({nameError: "This field is required"})
		}
		
		var phone = this.refs.phone.getValue()
		if(phone){
			formRequest.field("phone", phone)
			this.setState({phoneError: null})
		}
		else {
			valid = false;
			this.setState({phoneError: "This field is required"})
		}
		
		var description = this.refs.description.getValue()
		if(description){
			formRequest.field("description", description)
			this.setState({descriptionError: null})
		}
		else {
			valid = false;
			this.setState({descriptionError: "This field is required"})
		}

		if(value == 1) {
			formRequest.field("orientation", this.refs.orientation.getValue())
			formRequest.field("quantity", this.refs.quantity.getValue())
		}
		else if(value == 2) {
			formRequest.field("height", this.refs.height.getValue())
			formRequest.field("width", this.refs.width.getValue())
		}
		else if(value == 3) {
			formRequest.field("size", this.refs.size.getValue())
		}

		if(valid) {
			var upload = request.post("/upload")
			this.state.files.forEach((element)=> {
				// console.log(file)
				upload.attach(element.fileName, element.file);
			});

			upload.end()
			formRequest.end()
			console.log("form submitted")
		}
	},

	typeMenu: function () {
		return(
			<div className="form-group">
				<DropDownMenu ref="type" value={this.state.value} onChange={this.handleType}>
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
				<TextField
					ref="description"
					floatingLabelText="Description"
					hintText="Carefully describe your design."
					errorText={this.state.descriptionError}
					rows={5}
				/>
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
					<FontIcon className="material-icons">add</FontIcon>
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
					<DropDownMenu ref="orientation" value={this.state.orientation} onChange={this.handleOrientation}>
					  <MenuItem value={1} primaryText="Portrait" />
					  <MenuItem value={2} primaryText="Landscape" />
					</DropDownMenu>
					<br />
					<TextField
						floatingLabelText="Quantity"
						hintText="Number of copies to be printed"
						errorText={this.state.quantityError}
					/>
					<br />
					{this.renderDescription()}
				</div>
			);
		}
		else if(value == 2) {
			return(
				<div>
					{this.typeMenu()}
					<TextField
						ref="height"
						floatingLabelText="Height"
						hintText="Enter vertical dimension"
						errorText={this.state.heightError}
					/>
					<br />
					<TextField
						ref="width"
						floatingLabelText="Width"
						hintText="Enter horizontal dimension"
						errorText={this.state.widthError}
					/>
					<br />
					{this.renderDescription()}
				</div>
			);
		}
		else if(value == 3) {
			return(
				<div>
					{this.typeMenu()}
					<TextField
						ref="size"
						floatingLabelText="Size"
						hintText="ex. 1920x1080 or 32in"
						errorText={this.state.sizeError}
					/>
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
							<TextField 
								ref="name"
								floatingLabelText="Name"
								hintText="Enter Requestors name"
								errorText={this.state.nameError}
								onChange={this.handleInput}
							/>
							<br />

							<TextField
								ref="phone"
								floatingLabelText="Phone"
								hintText="Enter contact phone number"
								errorText={this.state.phoneError}
							/>
							<br />
						</div>
						<Divider />

						{this.reactForm(this.state.value)}
						
						<List>
							{
								this.state.files.map(function(file, i){
									console.log(file)
									return(
										<ListItem
											key={i}
											primaryText={file.fileName}
											leftIcon={<FontIcon className="material-icons">attachment</FontIcon>}
										/>
									)
								})
							}
						</List>

						{this.renderFileUpload()}

						<FlatButton label="submit" onTouchTap={this.onSubmit} />
					</form>
				</Paper>
			</div>
		)
	}
})
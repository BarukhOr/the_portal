import React, { Component } from 'react';

import { Colors, Paper, FlatButton, TextField, DropDownMenu, Divider,
	FontIcon, List, ListItem, MenuItem, FloatingActionButton, TimePicker, DatePicker} from 'material-ui'

import { reduxForm } from 'redux-form';
import * as actions from '../../actions/';

const style = {
	padding: 20,
	margin: 20,
	textAlign: 'center',
	display: 'inline-block'
};

const styles = {
	paperStyle: {
      width: 300,
      margin: 'auto',
      padding: 20,
    },
    switchStyle: {
      marginBottom: 16,
    },
    submitStyle: {
      marginTop: 32,
    }
}

const errorMessages = {
	wordsError: "Please only use letters",
	numericError: "Please provide a number",
	urlError: "Please provide a valid URL",
}

class Graphic_Request extends Component{
	constructor(){
		super()
		this.state={
			value: 1,
			orientation: 1,
			nameError: null,
			phoneError: null,
			quantityError: null,
			heightError: null,
			widthHeight: null,
			description: null,
			files: []
		}
	}

	handleFormSubmit({username,password}){
		console.log(username,password)
	}

	handleType(event, index, value) {
		this.setState({value: value});
		console.log(value)
	}

	render(){
		const { fields:{title, type, description, width, height, orientation, date, time},handleSubmit}=this.props;
		let { paperStyle, switchStyle, submitStyle } = styles;
		let { wordsError, numericError, urlError } = errorMessages;

		return(
			<div className="container">
				<Paper style={style} zDepth={2}>
					<form className="graphic_request_form" >
						<div className="form-group">
							<TextField
								hintText="Title of Proposal"
								validations="isWords"
								validationError={wordsError}
								required
								{...title}
							/><br/>

							<TextField
								hintText="Print/Designs"
								required
								{...type}
							/><br/>

							<TextField
								hintText="Description"
								required
								{...description}
							/><br/>	

							<DatePicker
								hintText="Date"
								mode="landscape"
							/>

							<TimePicker
								hintText="Time"
							/>

							<div className="form-group">
								<DropDownMenu ref="type" value={this.state.value} onChange={this.handleType}>
								  <MenuItem value={1} primaryText="Flyer"/>
								  <MenuItem value={2} primaryText="RA Board"/>
								  <MenuItem value={3} primaryText="TV Display"/>
								  <MenuItem value={4} primaryText="Other"/>
								</DropDownMenu>
								<br />
							</div>

						</div>
					</form>
				</Paper>
			</div>
		)
	}
}

export default reduxForm({
	form:'graphic_request',
	fields:['title','type','description','width','height','orientation','date','time']
})(Graphic_Request);
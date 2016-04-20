var React = require("react");
var createFragment = require("react-addons-create-fragment");
var Colors = require("material-ui/lib/styles/colors");
var ContentAdd = require("material-ui/lib/svg-icons/content/add");
var request = require("SuperAgent");
var TableContent = require("./TableContent.jsx");
var mui = require("material-ui"),
	Card = mui.Card,
	CardActions = mui.CardActions,
	CardHeader = mui.CardHeader,
	CardMedia = mui.CardMedia,
	CardTitle = mui.CardTitle,
	CardText = mui.CardText,
	Flatbutton = mui.Flatbutton,
	FontIcon = mui.FontIcon;

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.appColor("Graphics", {background: Colors.amber500})
	},

	click: function (e) {
		console.log("FlatButton Click", e);
	},

	render: function () {
		var Cards = {
			0:{title: "Sort A", color: {background: Colors.red200}, action: {label: "Create New", method: this.click}},
			1:{title: "Sort B", color: {background: Colors.blue200}, action: {label: "History", method: this.click}},
			2:{title: "Sort C", color: {background: Colors.green200}, action: {label: "Evaluate", method: this.click}},
			3:{title: "Sort D", color: {background: Colors.purple200}, action: {label: "Status", method: this.click}}
		};

		var Data = {  
			1:{Title: 'Delete Program', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			2:{Title: 'Found a bug', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			3:{Title: 'Page acting weird', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			4:{Title: 'Can\'t see requests', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			5:{Title: 'I dunno', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			6:{Title: 'Delete Program', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			7:{Title: 'Found a bug', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			8:{Title: 'Page acting weird', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			9:{Title: 'Can\'t see requests', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			10:{Title: 'I dunno', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			11:{Title: 'Delete Program', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			12:{Title: 'Found a bug', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			13:{Title: 'Page acting weird', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			14:{Title: 'Can\'t see requests', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'},
			15:{Title: 'I dunno', Name : 'Craig Bodden', type : 'Other', priority: 'High', status : 'submitted'}
		 };

		return (
			<div>
				<div className="container-fluid">
					{
						Object.keys(Cards).map(function(i){
							return(
								<div key={i} className="container-fluid col-sm-3">
									<Card key={i}>
										<Paper zDepth={1}>
											<CardTitle title={Cards[i].title} style={Cards[i].color} />
											<CardMedia>
												<canvas height="30" style={Cards[i].color} />
											</CardMedia>
										</Paper>

										<CardActions>
											<FlatButton label={Cards[i].action.label} onTouchTap={Cards[i].action.method}/>
										</CardActions>
									</Card>
								</div>
							)
						})
					}
				</div>
				<br />

				<div className="container-fluid">
					<Paper>
						<TableContent content={Data} />
					</Paper>
				</div>
			</div>				
		)
	}
})
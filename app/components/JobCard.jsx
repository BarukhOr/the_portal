var React = require("react");
var Upload = require("./FileUpload.jsx");
var Colors = require("material-ui/lib/styles/colors");
var AddIcon = require("material-ui/lib/svg-icons/content/add");
var mui = require("material-ui"),
	Card = mui.Card,
	CardActions = mui.CardActions,
	CardHeader = mui.CardHeader,
	CardMedia = mui.CardMedia,
	CardTitle = mui.CardTitle,
	CardText = mui.CardText,
	Flatbutton = mui.Flatbutton;

module.exports = React.createClass({
	click: function (e) {
		console.Log("FlatButton Click", e);
	},

	render: function () {
		const color = {
			background: this.props.color,
		};

		return (
			<div>
				<Card>
					<Paper zDepth={2}>
						<CardTitle title={this.props.title} subtitle={this.props.subtitle} style={color} />
						<CardMedia>
						<canvas height="30" style={color} />
						</CardMedia>
					</Paper>

					<CardActions>
						<FlatButton label="Create Request" onTapTouch={this.click}/>
						<FlatButton label="View Pending " onTapTouch={this.click}/>
						<FlatButton label="Update Pending" onTapTouch={this.click}/>
					</CardActions>
				</Card>
			</div>
		)
	}
})
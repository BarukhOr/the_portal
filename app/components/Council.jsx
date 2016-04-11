var React = require("react");
var Upload = require("./FileUpload.jsx");
var Colors = require("material-ui/lib/styles/colors");
var mui = require("material-ui"),
	Card = mui.Card,
	CardActions = mui.CardActions,
	CardHeader = mui.CardHeader,
	CardMedia = mui.CardMedia,
	CardTitle = mui.CardTitle,
	CardText = mui.CardText,
	FloatingActionButton = mui.FloatingActionButton;

module.exports = React.createClass({
	render: function () {
		const style = {
			background: Colors.amber500,
			color: Colors.white,
		};

		return (
			<div>
				<Card>
					<Paper>
						<CardTitle title="Hall Council" subtitle="Create and manage Hall Council Requests" style={style} />
						<CardMedia>
						<canvas height="30" style={style} />
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
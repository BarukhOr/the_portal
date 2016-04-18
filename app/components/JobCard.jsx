var React = require("react");
var Colors = require("material-ui/lib/styles/colors");
var AddIcon = require("material-ui/lib/svg-icons/content/add");
var router = require('react-router'),
	Link = router.Link;
var mui = require("material-ui"),
	Card = mui.Card,
	CardActions = mui.CardActions,
	CardHeader = mui.CardHeader,
	CardMedia = mui.CardMedia,
	CardTitle = mui.CardTitle,
	CardText = mui.CardText,
	Flatbutton = mui.Flatbutton;

module.exports = React.createClass({
	render: function () {
		const color = {
			background: this.props.color,
		};
		//var subTitle = if(this.props.subtitle ? this.props.subtitle : "");

		return (
			<div>
				<Card zDepth={2}>
					<Paper zDepth={1}>
						<CardTitle title={this.props.title} subtitle={this.props.subtitle} style={color} />
						<CardMedia>
							<canvas height="30" style={color} />
						</CardMedia>
					</Paper>

					<CardActions>
						<Link to="/Graphics/New"><FlatButton label="Create Request" /></Link>
						<Link to="/Graphics"><FlatButton label="View Pending " /></Link>
						<FlatButton label="Update Pending" />
					</CardActions>
				</Card>
			</div>
		)
	}
})
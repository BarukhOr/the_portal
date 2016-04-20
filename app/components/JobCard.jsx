var React = require("react");
var Colors = require("material-ui/lib/styles/colors");
var AddIcon = require("material-ui/lib/svg-icons/content/add");
var router = require('react-router'),
	Link = router.Link;
var mui = require("material-ui"),
	Card		= mui.Card,
	CardActions	= mui.CardActions,
	CardHeader	= mui.CardHeader,
	CardMedia	= mui.CardMedia,
	CardTitle	= mui.CardTitle,
	CardText	= mui.CardText,
	Flatbutton	= mui.Flatbutton,
	FontIcon	= mui.FontIcon;

module.exports = React.createClass({
	render: function () {
		const color = {
			background: this.props.color,
		};

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
						<Link to="/Graphics/New"><FlatButton label="Create Request" icon={<FontIcon className="material-icons">add</FontIcon>} /></Link>
						<Link to="/Graphics"><FlatButton label="View Pending " icon={<FontIcon className="material-icons">list</FontIcon>} /></Link>
					</CardActions>
				</Card>
			</div>
		)
	}
})
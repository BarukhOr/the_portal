var React = require("react")
var Colors = require("material-ui/lib/styles/colors")
var JobCard = require("./JobCard.jsx");
var router = require('react-router')
	Link = router.Link
var mui = require("material-ui"),
	AppBar = mui.AppBar,
	Card = mui.Card,
	CardActions = mui.CardActions,
	CardHeader = mui.CardHeader,
	CardMedia = mui.CardMedia,
	CardTitle = mui.CardTitle,
	FlatButton = mui.Flatbutton,
	LeftNav = mui.LeftNav;

module.exports = React.createClass({
	getInitialState: function(){
		return {
			title: "Home",
			color: {background: Colors.blue500},
			open: false
		}
	},

	setAppbar: function (title, color) {
		this.setState({
			title: title,
			color: color
		})
	},

	menuToggle: function () {
		this.setState({open: !this.state.open})
	},

	render: function() {
		return (
			<div className="app">
				<nav className="navbar-fixed-top">
					<AppBar title={this.state.title} style={this.state.color} onLeftIconButtonTouchTap={this.menuToggle}/>
					<LeftNav open={this.state.open} docked={false} onRequestChange={open => this.setState({open})}>
						<AppBar title="Menu" style={{background: Colors.grey700}} onLeftIconButtonTouchTap={this.menuToggle} />
						<br /> <br />
						<Link to="/">
							<Card zDepth={2}>
								<Paper zDepth={1}>
									<CardTitle title="Home" style={{background: Colors.blue500}} />
									<CardMedia>
										<canvas height={20} style={{background: Colors.blue500}} />
									</CardMedia>
								</Paper>
							</Card>
						</Link>
						<br /> <br />

						<JobCard 
							title="Programs"
							path="/Programs"
							color={Colors.deepPurple500}
							height={20}
						/>
					</LeftNav>
				</nav>
				<br /> <br /> <br /> <br />
				<main>
					{React.cloneElement(this.props.children, { setAppbar: this.setAppbar })}
				</main>
			</div>
		)
	}
});
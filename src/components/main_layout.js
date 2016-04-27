import React, {Component} from 'react';
import { Router, Link } from 'react-router'

import Colors from 'material-ui/lib/styles/colors';
import AppBar from 'material-ui/lib/app-bar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import LeftNav from 'material-ui/lib/left-nav';
import Paper from 'material-ui/lib/paper';

import JobCard from './dash/jobcard';

class MainLayout extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
		title: "Home",
		color: {background: Colors.blue500},
		open: false
	  }
	}

	setAppbar(title, color) {
		this.setState({
			title: title,
			color: color
		})
	}

	menuToggle() {
		this.setState({open: !this.state.open})
	}

	render(){
		return(
			<div className="app">
				<nav className="navbar-fixed-top">
					<AppBar title={this.state.title} style={this.state.color} onLeftIconButtonTouchTap={this.menuToggle.bind(this)}/>
					<LeftNav open={this.state.open} docked={false} onRequestChange={open => this.setState({open})}>
						<AppBar title="Menu" style={{background: Colors.grey700}} onLeftIconButtonTouchTap={this.menuToggle.bind(this)} />
						<br /> <br />
						<Link to="/">
							<Paper zDepth={1}>
								<Card>
									<CardTitle title="Home" style={{background: Colors.blue500}} />
									<CardMedia>
										<canvas height={20} style={{background: Colors.blue500}} />
									</CardMedia>
								</Card>
							</Paper>
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
}

export default MainLayout;
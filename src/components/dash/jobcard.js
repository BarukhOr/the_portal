import React, {Component} from 'react';
import { Router, Link } from 'react-router'

import Colors from 'material-ui/lib/styles/colors';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import Paper from 'material-ui/lib/paper';

class JobCard extends Component{
	render(){
		const color = {
			background: this.props.color
		}

		return(
			<div>
				<Card zDepth={2}>
					<Link to={this.props.path}>
						<Paper zDepth={1}>
							<CardTitle title={this.props.title} subtitle={this.props.subtitle} style={color} />
							<CardMedia>
								<canvas height={this.props.height} style={color} />
							</CardMedia>
						</Paper>
					</Link>
					<CardActions>
						<Link to={this.props.path+"/new"}><FlatButton label="Create Request" icon={<FontIcon className="material-icons">add</FontIcon>} /></Link>
						<Link to={this.props.path+"/review"}><FlatButton label="View Pending " icon={<FontIcon className="material-icons">list</FontIcon>} /></Link>
					</CardActions>
				</Card>
			</div>
		)
	}
}

export default JobCard;
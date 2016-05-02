import React, { Component } from 'react';

import Colors from 'material-ui/lib/styles/colors';

import JobCard from './jobcard';

class Dash extends Component{
	render(){
		return(
			<div className="container">
				<div className="container-fluid">
					<JobCard 
						title="Resident Advisor Programs"
						subtitle="Create and manage RA Programs"
						path="/Programs"
						color={Colors.deepPurple500}
						height={30}
					/>
				</div>

				<div className="container-fluid col-sm-6">
					<JobCard 
						title="Graphics"
						subtitle="Create and manage Graphics Requests"
						path="/graphics/pending"
						color={Colors.teal500}
						height={30}
					/>
				</div>

				<div className="container-fluid col-sm-6">
					<JobCard 
						title="Hall Council"
						subtitle="Create and manage Hall Council Programs"
						path="/Council"
						color={Colors.amber500}
						height={30}
					/>
				</div>
				
				
			</div>
		)
	}
}

export default Dash;
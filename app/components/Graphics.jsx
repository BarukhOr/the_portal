var React = require("react");
var Upload = require("./FileUpload.jsx");

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<h4>Graphics</h4>
				<Upload />
			</div>
		)
	}
})
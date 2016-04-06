var React = require("react");
var Dropzone = require('react-dropzone');
var request = require('superagent');

module.exports = React.createClass({
	onDrop: function (files) {
	  console.log('Received files: ', files);
	  var req = request.post('/upload');
	  files.forEach((file)=> {
	      req.attach(file.name, file);
	  });
	  req.end();
	},

    render:function(){
        return(
        	<div>
        		<h3>Upload File</h3>
        		<Dropzone onDrop={this.onDrop}>
					<div>Try dropping some files here, or click to select files to upload.</div>
				</Dropzone>
    		</div>
    	)
    }
})

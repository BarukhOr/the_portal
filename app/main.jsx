var React = require("react");
var ReactDOM = require("react-dom");
var LoginPage = require("./components/LoginPage.jsx");
var Upload = require("./components/FileUpload.jsx");
                
function render(){
    ReactDOM.render(<Upload />, document.getElementById("container"));    
}
render();
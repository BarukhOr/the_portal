var React = require("react");
var ReactDOM = require("react-dom");
var LoginPage = require("./components/LoginPage.jsx");
var Upload = require("./components/FileUpload.jsx");
var App = require("./components/App.jsx");
var access = {graphics: 1, programs: 1, council: 1};

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

function render(){
    ReactDOM.render(<App auth={access} />, document.getElementById("container"));    
    //ReactDOM.render(<Upload />, document.getElementById("container"));    
}
render();
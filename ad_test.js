var ActiveDirectory = require('activedirectory');

var secret = require('./config')
var username = secret.username;
var password = secret.password;

var config = { 

  baseDN: 'dc=scsu,dc=southern,dc=edu',
  url: 'ldap://scsu.southernct.edu/dc=scsu,dc=southern,dc=edu',
  username: username,
  password: password }

var ad = new ActiveDirectory(config);

ad.authenticate(username, password, function(err, auth) {
  if (err) {
    console.log('ERROR: '+JSON.stringify(err));
    return;
  }
  
  if (auth) {
    console.log('Authenticated!');
  }
  else {
    console.log('Authentication failed!');
  }
});
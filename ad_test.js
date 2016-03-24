var ActiveDirectory = require('activedirectory');

var secret = require('./config')
var username = 'udookonu1@southernct.edu';
var password = secret.password;

var config = { url: 'ldap://scsu.southernct.edu',
               baseDN: 'dc=scsu,dc=southern,dc=edu',
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
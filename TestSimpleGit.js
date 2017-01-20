var simpleGit = require('simple-git')('/Users/narekkazarian/Git/InviteManager-Angular2/');

simpleGit.log((err, log) => {
    console.log('Latest Log: ', log.latest);
});

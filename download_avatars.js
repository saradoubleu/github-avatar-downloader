var request = require('request');
var secrets = require('./secrets');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'saradoubleu',
      'Authorization': 'request'
  }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });

}

getRepoContributors("jquery", "jquery", function(err, result) {
  var resultResponse = JSON.parse(result);
  console.log(resultResponse[0]);
  // console.log("Errors:", err);
  // console.log("Result:", result);
});

/*
change your getRepoContributors function to parse the JSON string into an object and pass this object (an array of contributor objects) to the cb function.

You will also need to modify the callback function to iterate over the results and (for now) console.log the value for each avatar_url in the collection:
*/
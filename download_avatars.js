var request = require('request');
var secrets = require('./secrets');
var fs = require('fs');

var userInput = process.argv;

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var repoOwner = userInput[2];
  var repoName = userInput[3];
      var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'saradoubleu',
      'Authorization': 'token' + secrets.GITHUB_TOKEN
  }
  };

  //   var options = {
  //   url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
  //   headers: {
  //     'User-Agent': 'saradoubleu',
  //     'Authorization': 'token' + secrets.GITHUB_TOKEN
  // }
  // };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}

function downloadImageByURL(url, filePath) {
  request.get(url).on('error', function (err) {
  throw err;
})
  .pipe(fs.createWriteStream(filePath));
}

getRepoContributors("jquery", "jquery", function(err, result) {
  var resultResponse = JSON.parse(result);
  for (var i = 0; i < resultResponse.length; i++){
    // downloadImageByURL(resultResponse[i])
    downloadImageByURL(resultResponse[i].avatar_url, resultResponse[i].login + '.jpg');
}
  });



// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "./kvirani.jpg")
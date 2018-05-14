var request = require('request');
var secrets = require('./secrets');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
    var resultResponse = JSON.parse(result);
    var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'saradoubleu',
      'Authorization': 'token' + secrets.GITHUB_TOKEN
  }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
  resultResponse.foreach(function(images))

}

getRepoContributors("jquery", "jquery", function(err, result) {
  // var resultResponse = JSON.parse(result);
  console.log(resultResponse[0]);
});

function downloadImageByURL(url, filePath) {
  request.get(url).on('error', function (err) {
  throw err;
})
  .pipe(fs.createWriteStream(filePath));
}

// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "./kvirani.jpg")
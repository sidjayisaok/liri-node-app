//our variables used
var fs = require('fs');
var command = process.argv[2];
var commandArg = process.argv.slice(3).join('+');

//exporting from host files
var spotify_this_song = require('./spotifyApp').spotify_this_song;
var movie_command = require('./omdb-interactive-starter').movie_command;
var twitter_command = require('./twitterApp').twitter_command;

//this commands pulls our movie requests
if (command === "movie-this"){
  var movieName = commandArg;
  console.log(movie_command(movieName));
  return;
}

//thsi command pulls our music requests
else if (command === "spotify-this"){
  var spotifyLookup = commandArg;
  console.log(spotify_this_song(spotifyLookup));
  return;
}

//this command pulls our tweet requests
else if (command === "tweet-this"){
  var tweetLookup = commandArg;
  console.log(twitter_command(tweetLookup));
  return;
}

//this command executes a pretty corny easter egg
else if (command === "do-this"){
  fs.readFile('random.txt', 'utf-8', function(error, data){
    if(error){
      return console.log(error);
    }
    var arr = data.split(', ');
    console.log(spotify_this_song(arr[1]));
  });
}

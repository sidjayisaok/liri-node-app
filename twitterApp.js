var Twitter = require('twitter');
var twitterKeys = require('./keys.js').twitterKeys;
var screenName = process.argv[3];

// console.log(twitterKeys);

var twitterOpen = new Twitter(twitterKeys);


function getTwitter(){
  var params = {screen_name: '@' + screenName};
  twitterOpen.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      var numTweets = tweets.length;
      for (var i = 0; i < numTweets; i++){
        console.log("Tweet #: " + [i + 1] + " " + tweets[i]['text'] + ". tweeted on " +
                    tweets[i]['created_at'] + '.' + '\n--------------------------------');
      }
      numTweets--;
    }
  });
};

// getTwitter();

module.exports.twitter_command = getTwitter;

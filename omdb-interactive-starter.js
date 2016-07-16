//our variables used
var request = require('request');
var movieName = process.argv.slice(3).join('+');

var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json&tomatoes=true';

//basic function for request
function getMovie(movieName){
	request(queryUrl, function(error, response, body){
		if(error){
			queryUrl = 'http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&r=json&tomatoes=true'
		}
		else if(!error && response.statusCode === 200) {
			var movieObject = JSON.parse(body);
				console.log("Movie title: " + movieObject["Title"]);
				console.log("Movie rating: " + movieObject["imdbRating"]);
				console.log("Movie year: " + movieObject["Year"]);
				console.log("Filmed in: " + movieObject["Country"]);
				console.log("Languages available: " + movieObject["Language"]);
				console.log("Synopsis: " + movieObject["Plot"]);
				console.log("Starring: " + movieObject["Actors"]);
				console.log("Rotten Tomatoes rates this a: " + movieObject["tomatoRating"]);
				console.log("More info can be found at: " + movieObject["tomatoURL"]);
				return;
		}
	});
}

//export to liri
module.exports.movie_command = getMovie;

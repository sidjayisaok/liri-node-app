//variables used
var spotify = require('spotify');
var query = process.argv.slice(3).join('+');
var spotifyLookup;
var spotifyArtists;
var spotifyAlbums;
var spotifySongs;

//function to extract data
function getSpotify(query){
  spotify.search(

  {
  type: 'track',
  query: query,
  },

  function(err, data){
    if(err){
      console.log("This didn't work: " + err);
      return;
    }

      for (var i = 0; i < data.tracks.items.length; i++){
         spotifyLookup = data.tracks.items[i].name;
         spotifyArtists = data.tracks.items[i].artists[0].name;
         spotifyAlbums = data.tracks.items[i].album.name;
         spotifySongs = data.tracks.items[i].preview_url;

         console.log(spotifyLookup);
         console.log(spotifyArtists);
         console.log(spotifyAlbums);
         console.log(spotifySongs);
         console.log("______________________________________________________________________");
      }

  });
}

//export to liri
module.exports.spotify_this_song = getSpotify;

// underscore
var artists = ['Pakde', 'Bude', 'Mbah'];
_.each(artist, function(artist, index, artists){
    console.log('artist: ' + artist);
});

// normal
var artists = ['Pakde', 'Bude', 'Mbah'];

for(var i = 0; i<artists.length; i++){
    console.log('artist: ' + artists[i]);
}
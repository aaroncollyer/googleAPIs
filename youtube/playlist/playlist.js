// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyDzKSvV_zc2u0ib91Bneh7s0XxOLBYvRg4');
    loadPlaylist('PLD1342C1016742CE7');
}

function loadPlaylist(playlistID) {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.playlists.list({
        part: 'snippet',
        id: playlistID
    });
    
    // Send the request to the API server
    request.execute(showRAW);
}

// Helper function to display JavaScript value on HTML page.
function showHTML(response) {
    var Snippet;
    var htmlResponse = "";
    var id;
    var img;
    var title;
    
    for (var i in response.items) {
        Snippet = response.items[i].snippet;
        id = response.items[i].id.videoId;
        img = Snippet.thumbnails.default.url;
        title = Snippet.title;
        
        htmlResponse += '<p><div><img src="' + img + '" /></div>' +
                        '<div><a href="http://www.youtube.com/watch?v=' + id +'">' +
                        title +'</a></div></p>';
                        
    }
    
    document.getElementById('container').innerHTML += htmlResponse;
    //showRaw(response);
}

function showRaw(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}
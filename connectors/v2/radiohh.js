'use strict';

/* global Connector */

Connector.playerSelector = '.radioplayer-localwrapper';

Connector.getArtist = function() {
    if (isPlaying()) {
        return $('#PlayingContent .artist').text();
    }

    return null;
};

Connector.getTrack = function() {
    if (isPlaying()) {
        return $('#PlayingContent .song').text()
    }

    return null;
};

Connector.getTrackArt = function() {
    return $('#PlayingContent img').first().attr('src');
};


function isPlaying() {
    return checkPlayButton();
}

Connector.isPlaying = isPlaying;

function checkPlayButton() {
    return $('#stop').is(':visible');
}

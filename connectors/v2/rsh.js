'use strict';

/* global Connector */

Connector.playerSelector = '.recaster-mainWrapper';

Connector.getArtist = function() {
    if (isPlaying()) {
        return $('.recaster-currentArtist').text();
    }

    return null;
};

Connector.getTrack = function() {
    if (isPlaying()) {
        return $('.recaster-currentSong').text();
    }

    return null;
};



function isPlaying() {
    return checkPlayButton();
}

Connector.isPlaying = isPlaying;

function checkPlayButton() {
    return $('.recaster-mainBt').hasClass('rc-active');
}

// ==UserScript==
// @name         Remove Messenger Tracker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @homepage     https://greasyfork.org/en/scripts/33387-remove-messenger-tracker
// @updateURL    https://github.com/Puffycheeses/TamperMonkeyMessengerCleaner/raw/master/Remove%20Messenger%20Tracker.user.js
// @description  https://github.com/Puffycheeses/TamperMonkeyMessengerCleaner/
// @author       Puffycheeses
// @match        *://www.messenger.com/*
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==
var i=0;
//var cleaned = 0; //For logging can ignore
var links = document.getElementsByTagName('a');
setInterval(function(){
    var links = document.getElementsByTagName('a');
    //console.log('Scanning for new links'); //Log that its actually working
}, 2500);
setInterval(function(){
    link = links[i];
    if(i < links.length) {
        if(link.href.includes('https://l.messenger.com/l.php?u=')){
            var rep = link.href;
            var ret = rep.replace("https://l.messenger.com/l.php?u=", "").replace(/%3A/g, ":").replace(/%2F/g, "/");
            var rek = ret.substring(0, ret.indexOf('&h='));
            //console.log(rek); //For displaying the found links
            link.href = rek;
            //cleaned += 1; //For displaying how many links were found
        }
    }
    if(i < links.length) {
        i+=1;
    } else {
        //if(cleaned > 0){ //This who section was to display how many links have been cleaned
        //    console.log(cleaned + ' Links found and cleaned');
        //}
        //cleaned = 0;
        i=0;
    }
}, 100);

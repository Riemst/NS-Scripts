// ==UserScript==
// @name         Card Gift Keybinds
// @version      0.3
// @namespace    Riem
// @description  assign nations to keybinds for quick gifting
// @author       Riemstagrad
// @noframes
// @match        https://*.nationstates.net/*page=deck*/gift=*
// @require      https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    Mousetrap.bind('r', function() { GiftTo('riemstagrad'); });
    Mousetrap.bind('1', function() { GiftTo('riemstagrad kaarten depot 01'); });
    Mousetrap.bind('2', function() { GiftTo('riemstagrad kaarten depot 02'); });
    Mousetrap.bind('3', function() { GiftTo('riemstagrad kaarten depot 03'); });
    Mousetrap.bind('b', function() { GiftTo('riemstagrad kaarten depot belgium'); });
    Mousetrap.bind('d', function() { GiftTo('deck space'); });
    Mousetrap.bind('k', function() { GiftTo('Kwisatz Carderach'); });
    Mousetrap.bind('m', function() { GiftTo('Gerardus Mercator'); });
    Mousetrap.bind('w', function() { GiftTo('Mikeswill'); });
    Mousetrap.bind('u', function() { GiftTo('cartagriem 011');});
    Mousetrap.bind('v', function() { GiftTo('vylixan dora');});
    Mousetrap.bind('x', function() { GiftTo('war dogs IV');});
    Mousetrap.bind('z', function() { GiftTo('Lake Floria');});


    function GiftTo(name) {
    document.querySelector("input[name=\"entity_name\"").value = name;
    document.querySelector("button[name=\"send_gift\"").focus();
    }

})();

// ==UserScript==
// @name         DeckPageBids&MVCss
// @namespace    dsdf
// @version      0.1
// @description  Override CSS on a webpage
// @author       Riemstagrad
// @match        https://*.nationstates.net/page=deck
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Add your custom CSS here
    var css = `
        .deckcard-card-mv, .deckcard-card-buyers {
position: absolute;
  font-family: "barlow", san-serif;
  font-weight: 800;
  background-color: #FDFA15;
  border-radius: .6em;
  margin: 1em .4em;
  padding: 2px 6px;
  font-size: 250%;
  color: #0B00B0;
  opacity: 1;
}

.deckcard-card-mv {
  left: 0.25em;
  top: 8.25em;
}

.deckcard-card-buyers {
  left: 0.25em;
  right: unset;
  top: -2.75em;
}


    `;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();

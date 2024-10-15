// ==UserScript==
// @name         NationStates Fast Switcher
// @namespace    Riemsts scripts
// @version      1.0
// @description  Adds a button to switch between www and fast versions of NationStates.
// @author       Riemstagrad
// @match        https://www.nationstates.net/*
// @match        https://fast.nationstates.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a button
    var currentUrl = window.location.href;
    var switchButton = document.createElement('button');
    switchButton.style.padding = '10px';
    switchButton.style.border = 'none';
    switchButton.style.cursor = 'pointer';
    switchButton = document.createElement("div");
    switchButton.setAttribute('class',"bel");
    if (currentUrl.includes('www.nationstates.net')) {
    switchButton.textContent = "WWW";
    } else if (currentUrl.includes('fast.nationstates.net')) {
    switchButton.textContent = 'Fast';
    }
    (document.getElementsByClassName("belspacer belspacermain")[0]).before(switchButton);

    switchButton.addEventListener('click', function() {
        if (currentUrl.includes('www.nationstates.net')) {
            // Switch to fast version
            window.location.href = currentUrl.replace('www.nationstates.net', 'fast.nationstates.net');
        } else if (currentUrl.includes('fast.nationstates.net')) {
            // Switch to www version
            window.location.href = currentUrl.replace('fast.nationstates.net', 'www.nationstates.net');
        }
    });
})();
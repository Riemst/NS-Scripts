// ==UserScript==
// @name         AddEverythingToCollection
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Riemstagrad
// @match        https://*.nationstates.net/page=deck/*collection=*
// @require      https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    checkThem([].slice.call(document.querySelectorAll('input[type="checkbox"]')));
    function checkThem(nodes) {
    nodes.forEach(function(n) { n.checked = true })
    }
    incthem([].slice.call(document.querySelectorAll('input[type="number"]')));
    function incthem(nodes) {
    nodes.forEach(function(n) { n.value = 1;n.disabled = false })
    }
    document.querySelector("button[name=\"save_collection").focus();
    function noinput_mousetrap(event) {
        if (event.target.classList.contains("mousetrap")) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
            Mousetrap.bind(['n', 'N','m','M'], function(event) {
                  document.evaluate("//a[text()='»']", document).iterateNext().click()

    });
})();

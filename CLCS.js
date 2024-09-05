// ==UserScript==
// ==UserScript==
// @name         Cure for the Lost Container Syndrom
// @version      0.1
// @description  Cures logged out containers
// @author       Riemstagrad
// @noframes
// @match        https://www.nationstates.net/page=enact_dilemma/*
// @match        https://www.nationstates.net/container=*page=dilemmas*
// @grant        none
// ==/UserScript==


(function () {
    'use strict';
    var i;
    let NationPW = [
        'nationname','password',
        'nationname_2','password2'
];
// ^put your nationnames and passwords there, in this format. For nationnames: use underscores instead of spaces and all characters in lowercase.

    if(document.getElementsByClassName("button icon primary").length > 0){
    for (i = 0; i < NationPW.length; i +=2 ) {
        if (document.querySelector("input[name=\"nation").value == NationPW[i]){
            document.querySelector("input[name=\"password").value = NationPW[i+1]
          }};
    document.querySelector("input[name=\"autologin").checked = true;
    document.querySelector("button[value=\"Login").focus();
    }

})();

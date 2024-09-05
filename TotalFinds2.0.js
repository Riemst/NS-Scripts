// ==UserScript==
// @name         TotalFinds2.0
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  More stats on the Find_History page
// @author       Riemstagrad
// @match        https://*.nationstates.net/*/finds_history=1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    // Function to count occurrences of "found by"
    function countFoundBy() {
        return document.body.innerText.split(": Found by ").length - 1;
    }

    // Create a div to display the results
    const resultDiv = document.createElement('div');
    resultDiv.style.backgroundColor = 'white';
    resultDiv.style.border = '1px solid black';
    resultDiv.style.padding = '10px';
    resultDiv.style.marginTop = '10px';

    // Get total number of finds
    const foundByCount = countFoundBy();

    // Get number of cards in existence
    const tdElements = document.querySelectorAll('td');

    // Initialize a variable to store the number
    let cardsNumber;

    // Loop through the <td> elements to find the one with "Cards" text
        for (let i = 0; i < tdElements.length; i++) {
            if (tdElements[i].textContent.trim() === 'Cards') {
                // The next sibling <td> contains the number
                cardsNumber = tdElements[i].nextElementSibling.textContent.trim();
                break;
            }
        }
    var perc = cardsNumber / foundByCount*100

    // Set the text content of the result div
    resultDiv.textContent = `${foundByCount} Total Finds | ${cardsNumber} cards or ${perc.toFixed(2)}% in existence. `;

    // Statistics per season
    // Collect all elements with 'data-epoch' attribute
    const timestampElements = document.querySelectorAll('[data-epoch]');
    // Extract the timestamp values from the 'data-epoch' attribute
    const timestamps = Array.from(timestampElements).map(el => el.getAttribute('data-epoch'));

    let S0 = 0;
    let S1 = 0;
    let S2 = 0;
    let S3 = 0;
    let daysS0 = 7;
    let daysS1 = 348;
    let daysS2 = 1082;
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const startS3 = new Date(2022, 11, 20);
    let daysS3 = Math.round(Math.abs((startS3 - new Date()) / oneDay));
    for (let i = 0; i < timestamps.length; i++) {
        if (timestamps[i] < 1523145600) {
            S0++;
        } else if (timestamps[i] < 1575458100) {
            S1++;
        } else if (timestamps[i] < 1668906000) {
            S2++;
        } else {S3++;
               }
    }

                if (S0>0) {
                const S0Line = document.createElement('p');
                S0Line.textContent = `April's Fool: ${S0} = ${(S0/daysS0).toFixed(2)} per day.`;
                resultDiv.appendChild(S0Line);
                }
                if (S1>0) {
                const S1Line = document.createElement('p');
                S1Line.textContent = `Season 1: ${S1} = once every ${(daysS1/S1).toFixed(2)} days`;
                resultDiv.appendChild(S1Line);
                }
                if (S2>0) {
                const S2Line = document.createElement('p');
                S2Line.textContent = `Season 2: ${S2} = once every ${(daysS2/S2).toFixed(2)} days`;
                resultDiv.appendChild(S2Line);
                }
                if (S3>0) {
                const S3Line = document.createElement('p');
                S3Line.textContent = `Season 3: ${S3} = once every ${(daysS3/S3).toFixed(2)} days`;
                resultDiv.appendChild(S3Line);
                }


    // Find the <h4>Finds History</h4> element
    const findsHistoryHeader = document.querySelector('h4');

    // Insert the result div after the <h4>Finds History</h4> element
    if (findsHistoryHeader) {
        findsHistoryHeader.parentNode.insertBefore(resultDiv, findsHistoryHeader.nextSibling);
    }

})();
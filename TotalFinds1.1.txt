// ==UserScript==
// @name         TotalFinds
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Counts the number of bullet points and occurrences of "found by" on the page
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
    resultDiv.textContent = `${foundByCount} Total Finds | ${cardsNumber} card or ${perc.toFixed(2)}% in existence. `;
     // Find the <h4>Finds History</h4> element
    const findsHistoryHeader = document.querySelector('h4');

    // Insert the result div after the <h4>Finds History</h4> element
    if (findsHistoryHeader) {
        findsHistoryHeader.parentNode.insertBefore(resultDiv, findsHistoryHeader.nextSibling);
    }
})();

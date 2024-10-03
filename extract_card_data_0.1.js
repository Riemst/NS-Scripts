// ==UserScript==
// @name         Extract Card Data
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extract data from cards and send to Google Sheets
// @author       Riemstagrad
// @match        https://*.nationstates.net/*page=deck/card=*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var contributor = 'You';
    let cardDiv = document.getElementById('deck-single-card');

        if (cardDiv) {
            var cardID = cardDiv.getAttribute('data-cardid');
            var cardSeason = cardDiv.getAttribute('data-season');
            console.log('Card ID: ', cardID);
            console.log('Season: ', cardSeason);
        } else {
            console.log('Card id and season found.');
        };
        function findCardName(season) {
        let nameElement;
        if (season === '3') {
            nameElement = document.querySelector('.deckcard-name .nname');
        } else if (season === '2') {
            nameElement = document.querySelector('.deckcard-title .nname');
        } else if (season === '1') {
            nameElement = document.querySelector('.deckcard-title .nname');
        }

        if (nameElement) {
            let cName = nameElement.textContent.trim();
            console.log('Nation Name: ', cName);
            return cName;
        } else {
            console.log('Nation name not found.');
            return null;
        }
    }

    var cardName = findCardName(cardSeason);

        let bidSpan = document.querySelector('.cardprice_sell');
        if (bidSpan) {
            var highBid = bidSpan.textContent.trim();
            console.log('Card bid: ', highBid);
        } else {
            console.log('Card bid price span not found.');
        }
        let askSpan = document.querySelector('.cardprice_buy');
        if (askSpan) {
            var lowAsk = askSpan.textContent.trim();
            console.log('Card ask: ', lowAsk);
        } else {
            console.log('Card ask price span not found.');
        }
        let rows = document.querySelectorAll('.deckcard-card-stats tr');
        let data = {};

        rows.forEach(row => {
            let label = row.querySelector('td:first-child').textContent.trim();
            let value = row.querySelector('td:nth-child(2)').textContent.trim();

            let variableName = label.replace(/\s+/g, '_').replace(/[()]/g, '').toLowerCase();

            data[variableName] = value;
        });

        var ownerCount = data.owners;
        var totalCopies = data.cards;
        var trades = data.trades;
        var collections = data.collections;
        var JV = data.junk_price;
        var MV = data.market_value_estimated;
        var HSP = data.highest_sell_price;
        var MRSP = data.most_recent_sell_price;



//if on cardpage
    function sendCardDataToGoogleSheets(cardID,cardName,cardSeason,highBid,lowAsk,ownerCount,totalCopies,trades,collections,JV,MV,HSP,MRSP,contributor) {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwxOeSbqDOQNhqzKkosxS_-XiAWVq_2iodJ6zQa1yvfVY-zhO-gdzSzHRSCSxXHv0Dm/exec';
        const data = {
            cardID: cardID,
            cardName: cardName,
            cardSeason: cardSeason,
            highBid: highBid,
            lowAsk: lowAsk,
            ownerCount: ownerCount,
            totalCopies: totalCopies,
            trades: trades,
            collections: collections,
            JV: JV,
            MV: MV,
            HSP: HSP,
            MRSP: MRSP,
            contributor: contributor
        };

        console.log('Sending Data to Google Sheets:', data);

        fetch(scriptURL, {
            redirect: "follow",
            method: 'POST',
            headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                console.error('Network response was not ok:', response.statusText);
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => console.log('Data sent successfully:', result))
        .catch(error => {
            console.error('Error sending data to Google Sheets:', error);
        });
    }
    sendCardDataToGoogleSheets(cardID,cardName,cardSeason,highBid,lowAsk,ownerCount,totalCopies,trades,collections,JV,MV,HSP,MRSP,contributor);

})();

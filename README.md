These are my own Tampermonkey scripts to use with Nationstates.

***AddEverythingToCollection***

This is a very blunt tool for when you want to add a lot of cards to a collection:
On the edit-collection page it checks every checkbox and sets focus to the 'save' button.
It adds the keybind 'n' or 'N' to go to the next page.



***Card Gift Keybinds***

This adds keybinds to the gift-page:
When a key is pressed, the corresponding nation name is filled in the text-field and the 'gift' key gets focus.
Edit the 'moustrap.bind' lines to add, remove or alter keybinds.


***TotalFinds***

This script displays, on the finds_history page, the total number of finds of the card and the percentage of those cards still in existence.


***DeckPageBids&MVCss***

Changes and repositions the "market value" and "Bid amounts" displayed on cards when opening packs.
For better visibility.


***CLCS***

Logged out containers when farming? This script fills out the text-fields on the login-page and lets you continue with "enter".
Works with RCES. Adds one extra "enter" press for a logged out container.

If you have your nations with their passwords stored in a spreadsheet, you can generate a list in the correct format with the following function:

=IF(E$1="Y";SUBSTITUTE(CONCATENATE("'";LOWER(A1);"','";B1;"',");" ";"_");CONCATENATE(A1;",";B1))

In this funtion the nationnames are in collumn A and the passwords in collumn B and the function goes in collumn C. In cell E1 there is a switch that lets you switch between the format for the above script (if value of cell E1 = "Y") or a format you can paste into Racoda's Gold Retriever or 9003's Gotissues (if value of cell E1 is anything but not "Y")
This function works in OpenOffice Calc.


***Nationstates Fast Switcher***

Adds a button that lets you switch between fast and www.

S4 flag templates:

***_S4 Flag+banner.xcf***

Design your full card in this file. There are some layers that show you the flag area and the banner area. Whatever you assemble, when happy create a new 'layer from visible'.

***_S4 Flag.xcf***

Paste that new layer into this file and align it centered and top. Save as png or whatever and upload this as your flag.

***_S4 Banner.xcf***

Paste the same layer from the first file into this file and align it centered and bottom. Save as png and upload as banner.
If you're only creating a banner, set the banner mask layer visible and on top. The area between the two black blocks will be visible on your card.

***_S4 color palette***

All colors used on S4 cards, per rarity. The layer names explain where the colours are used. You can use this file to easily pick matching colors with the color picker tool.
If, for example, you use the color of the banner area as your flag and the color of the flag area as your banner, you will end up with flag and banner the same color.







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

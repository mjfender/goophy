# Goophy
A Google Doc add-on that helps users quickly find and insert animated gifs into their documents. Google + Gifs? Goophy! 

[Download it for free in the Google Chrome store.](https://chrome.google.com/webstore/detail/goophy/hihakceniinffblahgbijojnpjbmecki?utm_source=permalink)

The gif search is powered by [Tenor GIF API](https://www.tenor.co/gifapi).

## Description
This simple application is built with the [Google Apps Script](https://developers.google.com/apps-script/overview "Google Apps Script") language to provide a fun (.. Goophy?) experience for Google Docs users.

Users can highlight or type in up to three words to use as search terms. After clicking "Search," the program hits the Tenor Gif API and renders the search results in the add-on sidebar. When the user clicks on a gif, a larger version of that gif is added to the document where the user's cursor is placed.

<img src='http://res.cloudinary.com/dkddd3jci/image/upload/q_100/v1488487659/Goophy_HowTo_Tenor_Final_600px_wdhilj.gif' alt="Goophy Demo" width=500px)>

## Technical Details
Google Apps Script uses a JavaScript-like language. Along with jQuery and a bank of server-side helper functions that manipulate the actual Google Doc where the add-on is installed, the Google Apps Script documenation and tutorials help you get up and running with a project very quickly. This ["quickstart" walkthrough](https://developers.google.com/apps-script/quickstart/docs) was very helpful.

The unique configuration of Google Apps Script made it difficult to imagine this project fitting into an existing pattern, e.g. Model View Controller. The View and Controllers are primarily established in the HTML sidebar. The Models and some "deeper" Controllers are on the server side in the Code.gs file.  I was inspired by [this article](http://www.javascript-spreadsheet-programming.com/2013/01/object-oriented-javascript-part-2.html) to use object-oriented JavaScript for the TenorAPI adapter class. 


## Installation Instructions
To install Goophy for free, [visit the Google Docs Add-on store](https://chrome.google.com/webstore/detail/goophy/hihakceniinffblahgbijojnpjbmecki?utm_source=permalink).

Once installed, you can start Goophy from the menu bar of a Google Doc. Go to **Add-ons > Goophy > Start Goophy.** 

For a very Goophy walkthrough, go to **Add-ons > Goophy > How to Use**.

## Product Roadmap
Let me know what you want! Click the Issues tag to add a bug or idea, or email goophyapp@gmail.com.

Features I am considering for future versions:
+ Create more interesting UI components, styling and interactions -- on hover, on blur, etc
+ Explore design / organizational patterns used in Google Apps Script projects and refactor the code
+ Allow access to additional search results by adding "paging"

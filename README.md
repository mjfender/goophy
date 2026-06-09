# Goophy
A Google Doc add-on that helps users quickly find and insert animated gifs into their documents. Google + Gifs? Goophy! 

[Download it for free in the Google Chrome store.](https://workspace.google.com/marketplace/app/goophy/562954128999?source=github_readme)

Goophy is powered by [KLIPY GIF API](https://klipy.com).

## Description
This simple application is built with the [Google Apps Script](https://developers.google.com/apps-script/overview "Google Apps Script") language to provide a fun (.. Goophy?) experience for Google Docs (TM) users.

Users can highlight or type in up to three words to use as search terms. After clicking "Search," the program hits the KLIPY API and renders the search results in the sidebar. When a user clicks on a gif, a larger version of that gif is added to the document where the user's cursor is placed.

## Technical Details
Add-ons are created using a pretty standard front-end — whatever can be easily rendered in a sidebar iFrame or pop-up modal. The code for these views are hosted by Google and is likely some combination of JavaScript, jQuery and HTML / CSS.


## Installation Instructions
To install Goophy for free, [visit the Google Docs Add-on store](https://chrome.google.com/webstore/detail/goophy/hihakceniinffblahgbijojnpjbmecki?utm_source=permalink).

Once installed, you can start Goophy from the menu bar of a Google Doc. Go to **Extensions > Goophy > Search for GIFs** 

## Product Roadmap
Let me know what you want! Click the Issues tag to add a bug or idea, or email goophyapp@gmail.com.

Features I am considering for future versions:
+ Create more interesting UI components, styling and interactions -- on hover, on blur, etc
+ Explore design / organizational patterns used in Google Apps Script projects and refactor the code
+ Allow access to additional search results by adding "paging"

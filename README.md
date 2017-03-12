# Goophy
A Google Doc add-on that helps users quickly find and insert animated gifs into their documents. Google + Gifs? Goophy! 

[Download it for free in the Google Chrome store.](https://chrome.google.com/webstore/detail/goophy/hihakceniinffblahgbijojnpjbmecki?utm_source=permalink)

Goophy is powered by [Tenor GIF API](https://www.tenor.co/gifapi).

## Description
This simple application is built with the [Google Apps Script](https://developers.google.com/apps-script/overview "Google Apps Script") language to provide a fun (.. Goophy?) experience for Google Docs users.

Users can highlight or type in up to three words to use as search terms. After clicking "Search," the program hits the Tenor Gif API and renders the search results in the sidebar. When a user clicsk on a gif, a larger version of that gif is added to the document where the user's cursor is placed.

<img src='http://res.cloudinary.com/dkddd3jci/image/upload/q_100/v1488487659/Goophy_HowTo_Tenor_Final_600px_wdhilj.gif' alt="Goophy Demo" width=500px)>

## Technical Details
Add-ons are created using a pretty standard front-end — whatever can be easily rendered in a sidebar iFrame or pop-up modal. The code for these views are hosted by Google and is likely some combination of JavaScript, jQuery and HTML / CSS.

The code for the back-end is Google Apps Script — a language very similar to an old version of JavaScript ( specifically JavaScript 1.6 and a few features from 1.7 and 1.8, roughly equivalent to ECMAScript 3) but with a lot of built in functions that allow you to interact with Google docs in pre-defined ways.

For a more detailed technical walkthrough and code snippets, [check out my blog post.](https://medium.com/@mattfender/goophy-google-docs-gifs-52fe438e77a2#.j17k8prv6)

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

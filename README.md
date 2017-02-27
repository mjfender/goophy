# Goophy
A Google Doc add-on that helps users quickly access the Giphy API and insert animated gifs into their documents. Google + Giphy? Goophy!

## Summary
This simple application is built with the [Google Apps Script](https://developers.google.com/apps-script/overview "Google Apps Script") language to provide a fun (.. Goophy?) experience for Google Docs users.

Users can highlight or type in up to three words to use as search terms. After clicking "Search," the program hits the Giphy API and renders the search results in the add-on sidebar. When the user clicks on a gif, a larger version of that gif is added to the document where the user's cursor is placed.

<img src='http://res.cloudinary.com/dkddd3jci/image/upload/c_scale,w_450/v1488200038/Goophy_Demo_isliey.gif' alt="Goophy Demo")>

## Technical Details
Google Apps Script uses a JavaScript-like language. Along with jQuery and a bank of server-side helper functions that manipulate the actual Google Doc where the add-on is installed, the Google Apps Script documenation and tutorials help you get up and running with a project very quickly. This ["quickstart" walkthrough](https://developers.google.com/apps-script/quickstart/docs) was very helpful.

The unique configuration of Google Apps Script made it difficult to imagine this project fitting into an existing pattern, e.g. Model View Controller. The View and Controllers are primarily established in the HTML sidebar. The Models and some "deeper" Controllers are on the server side in the Code.gs file.  I was inspired by [this article](http://www.javascript-spreadsheet-programming.com/2013/01/object-oriented-javascript-part-2.html) to use object-oriented JavaScript for the GiphyAPI adapter class. 


## Installation Instructions
At this time, the add-on is not published and so it's not yet publicly available in the Google Apps Marketplace. Stay tuned.

To try it out in the meantime, you can create the add-on right inside a Google Doc using the code in this repository:

1. In a new Google Doc, select Tools > Script editor in the menu. Choose "Blank Project".
2. Delete the existing code in the script editor and paste in the code from Code.gs in this repo.
3. Create the other two files (Goophy_Sidebar.html and adapter.gs) and paste in the code from this repo.
4. Once saved, open the add-on by clicking Add-ons > Goophy > Get Goophy from the menu bar of your Google Doc.
5. Enjoy!

## Product Roadmap
I built this project in one weekend to learn Google Apps Script. With additional time, I'd like to:
+ Add a toggle to filter by "ratings" -- currently the app only returns "G" rated gifs to make sure the application is suitable for audiences of all ages.
+ Create more interesting UI components, styling and interactions -- on hover, on blur, etc
+ Explore design / organizational patterns used in Google Apps Script projects and refactor the code
+ Publish Goophy! I will need to QA more deeply, get an API key from Giphy and submit to Google for approval.

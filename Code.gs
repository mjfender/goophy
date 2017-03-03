/**
 * @OnlyCurrentDoc
 *
 * The above comment directs Apps Script to limit the scope of file
 * access for this add-on. It specifies that this add-on will only
 * attempt to read or modify the files in which the add-on is used,
 * and not all of the user's files. The authorization request message
 * presented to users will reflect this limited scope.
 */

/**
 * Creates a menu entry in the Google Docs UI when the document is opened.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onOpen trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode.
 */
function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start Goophy', 'showSidebar')
      .addItem('How to Use', 'instructions')
      .addToUi();
}

/**
 * Runs when the add-on is installed.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 *
 * @param {object} e The event parameter for a simple onInstall trigger. To
 *     determine which authorization mode (ScriptApp.AuthMode) the trigger is
 *     running in, inspect e.authMode. (In practice, onInstall triggers always
 *     run in AuthMode.FULL, but onOpen triggers may be AuthMode.LIMITED or
 *     AuthMode.NONE.)
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * Opens a sidebar in the document containing the add-on's user interface.
 * This method is only used by the regular add-on, and is never called by
 * the mobile add-on version.
 */
function showSidebar() {
  var ui = HtmlService.createHtmlOutputFromFile('Goophy_Sidebar')
      .setTitle('Goophy');
  DocumentApp.getUi().showSidebar(ui);
}

function instructions() {
  var instructions = HtmlService.createHtmlOutputFromFile('Goophy_Demo')
      .setTitle('')
      .setWidth(500)
      .setHeight(500);

  DocumentApp.getUi()
    .showModalDialog(instructions, ' ');
}

/**
 * Gets the text the user has selected. If there is no selection,
 * this function displays an error message.
 *
 */
function getSelectedText() {
  var selection = DocumentApp.getActiveDocument().getSelection();
  if (selection) {
    var text = [];
    var elements = selection.getSelectedElements();
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].isPartial()) {
        var element = elements[i].getElement().asText();
        var startIndex = elements[i].getStartOffset();
        var endIndex = elements[i].getEndOffsetInclusive();

        text.push(element.getText().substring(startIndex, endIndex + 1));
      } else {
        var element = elements[i].getElement();
        // Only translate elements that can be edited as text; skip images and
        // other non-text elements.
        if (element.editAsText) {
          var elementText = element.asText().getText();
          // This check is necessary to exclude images, which return a blank
          // text element.
          if (elementText !== '') {
            text.push(elementText);
          }
        }
      }
    }
    if (text.length >= 1 && text[0].split(" ").length > 3) {
      throw 'Please select 3 words or fewer.';
    } else if (text.length === 0) {
      throw 'Select 1 to 3 words to search for gifs to add.';
    }
    return text;
  } else {
    throw 'Select or enter up to three words to get started.';
  }
}



/**
 * Creates a new GiphyAPI adapter object and returns
 * an array of objects with keys containing the large and
 * small (preview) versions of the gifs.
 *
 * @param {string} searchTerm - The string of search keyword(s)
 */

function searchAPI (searchTerm) {
  // var giphyAPI = new GiphyAPI();
  var tenorAPI = new TenorAPI();
  // var response = giphyAPI.searchByKeyword(searchTerm);
  var response = tenorAPI.searchByKeyword(searchTerm);
  var gifsToRender = [];
  if (response.results.length > 0) {
    response.results.forEach( function(gif) {
      var newGif = {};
      var smallGif = gif.media[0].tinygif.url;
      var largeGif = gif.media[0].gif.url;
      newGif.small = smallGif;
      newGif.full = largeGif;
      gifsToRender.push(newGif);
    });
  } else {
      throw 'No results found :( Try again!';
  }
  return gifsToRender;
}

/**
 * Finds where the user's cursor is and inserts the image.
 *
 * @param {string} gifUrl - The gif image URL to add.
 */
function insertGif(gifUrl) {
  var image = gifUrl;
  var blob = UrlFetchApp.fetch(image).getBlob();

  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();

  if (cursor) {
    cursor.insertInlineImage(blob);
  } else {
    doc.getBody().insertImage(0, blob);
  }

}

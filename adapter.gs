// Adapter class for making calls to Giphy API

function GiphyAPI() {
 this.baseURL = 'https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC'
}

GiphyAPI.prototype = {
  constructor: GiphyAPI,
  searchAdapter: function(queryString) {
    Logger.log(this.baseURL + queryString)
    var response = UrlFetchApp.fetch(this.baseURL + queryString);
    var json = response.getContentText();
    var data = JSON.parse(json);
    return data
  },
  searchByKeyword: function (searchTerm) {
    var queryString = '&q=' + searchTerm.split(" ").join("+") + '&rating=g';
    var response = this.searchAdapter(queryString);
    return response;
  },
  // For future feature that allows gifs other than "g" rated
  searchWithRatings: function (keyword, rating) {
    // set default rating to 'g'
    rating = typeof rating !== 'undefined' ? rating : 'g';
    var searchQuery = '&q=' + keyword.split(" ").join("+");
    var ratingQuery= '&rating=' + rating
    return this.searchAdapter(searchQuery + ratingQuery);
  }
}

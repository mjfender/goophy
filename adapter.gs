function TenorAPI() {
 this.baseURL = 'https://api.tenor.co/v1/search/?locale=en_US&limit=50';
 this.APIkey = '&key=LIVDSRZULELA';
 // Replace this "public" API key with developer key in production
}

TenorAPI.prototype = {
  constructor: TenorAPI,
  searchAdapter: function(queryString) {
    var response = UrlFetchApp.fetch(this.baseURL + this.APIkey + queryString);
    var json = response.getContentText();
    var data = JSON.parse(json);
    return data;
   },
  searchByKeyword: function (searchTerm) {
    var queryString = '&tag=' + searchTerm.split(" ").join("+");
    var response = this.searchAdapter(queryString);
    return response;
  },

};

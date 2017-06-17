export class SearchFieldCtrl {
	constructor(WikiService) {
  	this.service = WikiService;
    this.termToSearch = '';
    this.data = [];
  }

  // get data() {
  //   return this.data;
  // }


  // get termToSearch() {
  //   return this.termToSearch;
  // }

  // set termToSearch(term) {
  //   this.termToSearch;
  // }
  
  handlerSubmit() {
    this.service.fetchData(this.termToSearch)
      .then((data) =>       
        this.data = [...data.data.query.search]
      )
      .catch(function(data) {
        console.error("http request error", data);
      });
  }
}

export class WikiService {
	constructor($http, $sce) {
  	this.http = $http;
    this.sce = $sce;
  }
  
  fetchData(term) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=links&list=search&srsearch=${term}&utf8=1`;
   	return this.http.jsonp(this.sce.trustAsResourceUrl(url));
  }
}

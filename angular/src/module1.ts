import WikiItem from './Model/WikiItem';


export class SearchFieldCtrl {
  static $inject = ['WikiService'];

  constructor(
    public service: WikiService,
    public termToSearch: String,
    public data: WikiItem[]
  ) { }



  public handlerSubmit(): void {
    this.service.fetchData(this.termToSearch)
      .then((res: any) => {
        this.data = res.data.query.search.map(item => {
          const { title, snippet, wordCount } = item;
          return new WikiItem(title, snippet, wordCount);
        });
      })
      .catch(function (data) {
        console.error("http request error", data);
      });
  }
}

export class WikiService {
  static $inject = ['$http', '$sce'];

  constructor(
    private http: ng.IHttpService,
    private sce: ng.ISCEService
  ) { }

  fetchData(term) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&generator=links&list=search&srsearch=${term}&utf8=1`;
    return this.http.jsonp(this.sce.trustAsResourceUrl(url));
  }
}

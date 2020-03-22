export class Article {

    readonly source: string;
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly urlToImage: string;
    readonly publishedAt: string;
    readonly content: string;
    readonly author: string; 
  
    constructor(resData) {
      this.source = resData.source.name;
      this.title = resData.title;
      this.description = resData.description;
      this.url = resData.url;
      this.urlToImage = resData.urlToImage;
      this.publishedAt = new Date(resData.publishedAt).toLocaleString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timeZone: 'UTC',
        hour: 'numeric',
        minute: 'numeric'
      });
      this.content = resData.content?resData.content.replace(/\[\+.*?\]/, "" ):'';
      this.author = resData.author;
      
    }
   
}
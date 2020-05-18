export class Book {
 
    public title: string;
    public cover: string;
    public publisher: string;
    public pages:string;
    public available:string;
   
    constructor(title:string, cover:string, publisher:string,pages:string,available:string) {
      this.title = title;
      this.cover = cover;
      this.publisher = publisher;
      this.pages = pages;
      this.available = available;
    }
     
  }
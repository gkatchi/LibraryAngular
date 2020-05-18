import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { Observable } from 'rxjs';
import { InvokeLibraryService } from '../invoke-library.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  headers = ["title", "cover", "publisher", "pages", "available"];
  resp:any;
  books:Array<Book> ;
  constructor(private invokeLib:InvokeLibraryService) { 
    invokeLib.getBooks().subscribe(response => 
      {
        this.books = response.map(item => 
        {
          return new Book( 
              item.title,
              item.cover,
              item.publisher,
              item.pages,
              item.available
          );
        });
      });

    
  }
  
  ngOnInit() {
    
  }

}

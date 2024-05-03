import { Book } from './data/book.dto';

export class BookService {
  public books: Book[] = [];

  addBookInfoService(book: Book): string {
    this.books.push(book);
    return 'Book has been successfully added';
  }

  updateBookInfoService(book: Book): string {
    let index = this.books.findIndex((currentBook) => {
      return currentBook.id == book.id;
    });
    if (index) {
      this.books[index] = book;
      return 'Book update successfully';
    } else return 'Book is not found';
  }

  deleteBookService (bookId : string) : string {
    let flag = 0;
    this.books = this.books.filter((book) => {
        if(book.id == bookId) flag = 1;
        return book.id != bookId;
    })
    return (flag ? "Book is not found" : "Book has been deleted");
  }
}

import { Book } from './data/book.dto';

export class BookService {
  public books: Book[] = [];

  addBookInfo(book: Book): string {
    this.books.push(book);
    return 'Book has been successfully added';
  }

  updateBookInfo(book: Book): string {
    let index = this.books.findIndex((currentBook) => {
      return currentBook.id == book.id;
    });
    if (index) {
      this.books[index] = book;
      return 'Book update successfully';
    } else return 'Book is not found';
  }
}

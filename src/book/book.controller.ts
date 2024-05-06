import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';
import { BookGuard } from './book.guard';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookService.findAllBookService();
  }
  @Get ('/find/:id')
  getBookById(@Param('id', ParseIntPipe)   bookId : number) : any {
    return this.bookService.findBookByIdService(bookId);
  }

  @Put('/updatebook')
  updateBooks(@Body() book: Book): string {
    return this.bookService.updateBookInfoService(book);
  }

  @Delete('/delete/:id')
  @UseGuards(new BookGuard())
  deleteBook(@Param('id') bookId: number): string {
    return this.bookService.deleteBookService(bookId);
  }

  @Post('/add')
  addBook(@Body( new ValidationPipe() ) book: Book): string {
    return this.bookService.addBookInfoService(book);
  }
}

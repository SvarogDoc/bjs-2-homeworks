// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
    set state(number) {
      if (number < 0) {
        this._state = 0;
      } else if (number > 100) {
        this._state = 100;
      } else this._state = number;
    }
  
    get state() {
      return this._state;
    }
  
  }
  class Magazine extends PrintEditionItem {
    type = 'magazine';
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = `book`;
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    type = 'novel';
  }
  
  class FantasticBook extends Book {
    type = 'fantastic';
  }
  
  class DetectiveBook extends Book {
    type = 'detective';
  }

  // Задача 2

  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if (book.state > 30) this.books.push(book);
    }
  
    findBookBy(type, value) {
      for (let book of this.books) {
        if (book[type] === value) return book;
      }
      return null;
    }
  
    giveBookByName(bookName) {
      let index = this.books.findIndex(book => book.name === bookName);
      if (index === -1) return null;
      let book = this.books[index];
      this.books.splice(index, 1);
      return book;
    }
  }
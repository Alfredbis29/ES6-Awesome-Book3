import BooksdataBase from './modules/ShowBook.js';
import newNav from './modules/singlePageNav.js';
import date from './modules/date.js';

const book = new BooksdataBase();
book.addBooks();
newNav();
date();

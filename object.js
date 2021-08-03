// Object name ={ property : value };
var book = {
    title:'Bangla',
    author:'Nazrul',
    price:100,
    pages:186

}
console.log(book);
console.log(book.price);

 var bookName = book.title;
console.log(bookName);

var bookPrice = 140;
book.price = bookPrice;
console.log(book.price);

var  bookPages = 138;
var pagenum = "pages";
book.pages = 128;
book["pages"] = 130;
book[pagenum]= 192;

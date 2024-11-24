//Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getsummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year} `;
};

//Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

//Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

//Instanciate a magazine Object

const mag1 = new Magazine("Mag one", "John Doe", "2018", "jan");

//Use Magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);

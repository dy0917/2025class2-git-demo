const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    year: 1988,
    genre: "Science",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
  },
];

const tempBooks = [...books];

const tempBook = { ...tempBooks[1], title: "Kingsley title" };

tempBooks.splice(1, 1, tempBook);

console.log(books);

console.log(tempBooks);

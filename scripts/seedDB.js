const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/boohkr', {
  useNewUrlParser: true,
});

const bookSeed = [
  {
    title: 'The Dead Zone',
    subtitle: 'this el subtitle',
    authors: 'Stephen King',
    description:
      'A number-one national best seller about a man who wakes up from a five-year coma able to see people\'s futures and the terrible fate awaiting mankind in The Dead Zone - a "compulsive page-turner" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people\'s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a "faultlessly paced...continuously engrossing" (Los Angeles Times) novel of second sight.',
    pageCount: 600,
    publisher: 'El publisher',
    publishedDate: '2018-04-09',
    image:
      'http://books.google.com/books/content?id=EWhNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE719iWZjTuBPbZ5To_mOrIxXql0jLTeil-j1u97ReYs32qsl3TwuBYSv0bbToP01aLy85BxQqoZFkbd7ZnEmSfOgYsxawxONSZ753vl1w5ti60ZRK2OF5CG47kvkrXfNLYhn3_BI&source=gbs_api',
    link: 'http://books.google.ca/books?id=EWhNDwAAQBAJ&hl=&source=gbs_api',
    date: new Date(Date.now()),
  },
  {
    title: 'Lord of the Flies',
    subtitle: 'aha aha',
    authors: 'William Golding',
    description:
      'The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.',
    pageCount: 600,
    publisher: 'El publisher',
    publishedDate: '2018-04-09',
    image:
      'http://books.google.com/books/content?id=EWhNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE719iWZjTuBPbZ5To_mOrIxXql0jLTeil-j1u97ReYs32qsl3TwuBYSv0bbToP01aLy85BxQqoZFkbd7ZnEmSfOgYsxawxONSZ753vl1w5ti60ZRK2OF5CG47kvkrXfNLYhn3_BI&source=gbs_api',
    link: 'http://books.google.ca/books?id=EWhNDwAAQBAJ&hl=&source=gbs_api',
    date: new Date(Date.now()),
  },
];

db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

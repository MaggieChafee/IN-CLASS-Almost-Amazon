import { getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

// Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObj) => {
    getSingleAuthor(bookObj.author_id)
      .then((authorObject) => resolve({ ...bookObj, authorObject }));
  }).catch(reject);
});

export default getBookDetails;

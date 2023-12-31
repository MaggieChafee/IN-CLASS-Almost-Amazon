import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { showBooks } from '../pages/books';
import { getAuthors, getSingleAuthor } from '../api/authorData';
import { emptyAuthors, showAuthors } from '../pages/authors';
import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';
import viewBook from '../pages/viewBook';
import { getBookDetails, getAuthorDetails, deleteAuthorBooksRelationship } from '../api/mergedData';
import viewAuthor from '../pages/viewAuthor';

/* eslint-disable no-alert */
const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteBook(firebaseKey).then(() => {
          getBooks(user.uid).then(showBooks);
        });
      }
    }

    if (e.target.id.includes('add-book-btn')) {
      addBookForm(user.uid);
    }

    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleBook(firebaseKey).then((bookObj) => addBookForm(user.uid, bookObj));
    }

    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getBookDetails(firebaseKey).then(viewBook);
    }

    if (e.target.id.includes('delete-author-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteAuthorBooksRelationship(firebaseKey).then(() => {
          getAuthors(user.uid).then((array) => {
            if (array.length) {
              showAuthors(array);
            } else {
              emptyAuthors();
            }
          });
        });
      }
    }

    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getAuthorDetails(firebaseKey).then(viewAuthor);
    }

    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm(user.uid);
    }

    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleAuthor(firebaseKey).then((authorObj) => addAuthorForm(user.uid, authorObj));
    }
  });
};

export default domEvents;

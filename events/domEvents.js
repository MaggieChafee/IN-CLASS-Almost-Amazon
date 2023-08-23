import { deleteBook, getBooks, getSingleBook } from '../api/bookData';
import { showBooks } from '../pages/books';
import { deleteSingleAuthor, getAuthors } from '../api/authorData';
import { showAuthors } from '../pages/authors';
import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorForm';

/* eslint-disable no-alert */
const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteBook(firebaseKey).then(getBooks).then(showBooks);
      }
    }

    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleBook(firebaseKey).then((bookObj) => addBookForm(bookObj));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      console.warn('VIEW BOOK', e.target.id);
      console.warn(e.target.id.split('--'));
    }

    if (e.target.id.includes('delete-author-btn')) {
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteSingleAuthor(firebaseKey).then(getAuthors).then(showAuthors);
      }
    }

    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm();
    }

    if (e.target.id.includes()) {
      console.warn();
    }
  });
};

// FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR

export default domEvents;

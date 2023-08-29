import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookCreate onSubmit={createBook} />  
      <div className='columns'>
        <div className='column1'>
          <h2><strong>Help</strong></h2>
          <ul style={{marginTop: '15px', marginLeft: '12px', fontSize: '14px'}}>
            <li><b>Add a Book:</b> you can add a book by entering its title in the top field.</li>
            <li><b>Remove a Book:</b> you can add a book by pressin "x" button on the top right corner of each book.</li>
            <li><b>Edit a Book title:</b> you can add a book by pressin "pencil" button on the top right corner of each book.</li>
            <li><b>Rate a Book:</b> you can increase the size of rate of a book by clicking on the "hear" on the bototm corner of each book.</li>
          </ul>
        </div>
        <div className='column2'>
          <h1>Reading List</h1>
          <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        </div>
      </div>
    </div>
  );
}

export default App;

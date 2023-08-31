import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {
  const [books, setBooks] = useState([]);
  const [id, setId] = useState(0);

  const fetchAllBooks = async () => {
   const response = await axios.get('http://localhost:3001/books');
   setBooks(response.data);
  };
// only run fetchAllBooks funciton at a very specific time when our components first started to render on screen
  useEffect(() => {
    fetchAllBooks();
  },[]);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle});
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data};
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    setId(id+1);
    const response = await axios.post('http://localhost:3001/books', {
      // //title:title =>title
      title
    });
        
    const updatedBooks = [...books,response.data];
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

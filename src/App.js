import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';


function App() {
  const {fetchAllBooks} = useContext(BooksContext);
// only run fetchAllBooks funciton at a very specific time when our components first started to render on screen
  useEffect(() => {
    fetchAllBooks();
  },[]);

  const help = {
    add: {
      label: "Add a Book",
      description: "you can add a book by entering its title and author in the top field."
    },
    remove: {
      lable: "Remove a Book",
      description: "you can add a book by pressin \"x\" button on the top right corner of each book."
    },
    edit: {
      label: "Edit a Book",
      description: "you can add a book by pressin \"pencil\" button on the top right corner of each book."
    },
    like: {
      label: "Like a Book",
      description: "Like the book by clicking on the \"hear\" on the bototm corner of each book."
    }

  }
  return (
    <div className="app">
      <BookCreate  />  
      <div className='columns'>
        <div className='column1'>
          <h2><strong>Help</strong></h2>
          <ul style={{marginTop: '15px', marginLeft: '12px', fontSize: '14px'}}>
            <li><b>{help.add.label}: </b>{help.add.description}</li>
            <li><b>{help.remove.lable}: </b>{help.remove.description}</li>
            <li><b>{help.edit.label}: </b>{help.edit.description}</li>
            <li><b>{help.like.label}: </b>{help.like.description}</li>
          </ul>
        </div>
        <div className='column2'>
          <h1>Reading List</h1>
          <BookList  />
        </div>
      </div>
    </div>
  );
}

export default App;

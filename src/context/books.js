import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();   //it is a component

function Provider({children}) {
    const [books, setBooks] = useState([]);
    const [id, setId] = useState(0);
  
    const fetchAllBooks = async () => {
     const response = await axios.get('http://localhost:3001/books');
     setBooks(response.data);
    };

    const editBookById = async (id, newTitle, newAuthor) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle, author: newAuthor});
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
    
    const createBook = async (title,author) => {
        setId(id+1);
        const response = await axios.post('http://localhost:3001/books', {
          // //title:title =>title
          title,
          author
        });
            
        const updatedBooks = [...books,response.data];
        setBooks(updatedBooks);
        
    };
    const valueToShare = {
        books: books, 
        editBookById: editBookById,
        deleteBookById: deleteBookById,
        createBook: createBook,
        fetchAllBooks: fetchAllBooks
    };
    return (
        <BooksContext.Provider value={valueToShare} >
            {children}
        </BooksContext.Provider>
    );
}
//Provider is an object
export {Provider};
export default BooksContext;
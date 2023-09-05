import { useState,useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({book,onSubmit}){
    const [newTitle, setNewTitle] = useState(book.title);
    const [newAuthor, setNewAuthor] = useState(book.author);
    const { editBookById } = useContext(BooksContext);
    const updateBook = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id,newTitle,newAuthor)
    }
    return (
        <div>
            <hr/>
            <h2 style={{marginBottom: '10px'}}><b>Edit</b></h2>
            <form className="book-edit" onSubmit={updateBook}>
                <label>Enter Title: </label>
                <input className="input" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
                <label>Enter Author: </label>
                <input className="input" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)}></input>
                <button className="button is-primary">Save</button>
            </form>             
        </div>
    )
}

export default BookEdit;
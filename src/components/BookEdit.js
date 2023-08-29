import { useState } from "react";

function BookEdit({book,onSubmit}){
    const [newTitle, setNewTitle] = useState(book.title);
    const updateBook = (event) => {
        console.log("id:" +book.id + "newTitle: " + newTitle)
        event.preventDefault();
        onSubmit(book.id,newTitle);
    }
    return (
        <div>
            <hr/>
            <h2 style={{marginBottom: '10px'}}><b>Edit</b></h2>
            <form className="book-edit" onSubmit={updateBook}>
                <label>Enter New Title: </label>
                <input className="input" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}></input>
                <button className="button is-primary">Save</button>
            </form>             
        </div>
    )
}

export default BookEdit;
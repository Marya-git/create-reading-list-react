import { useState } from "react";
import BookEdit from "./BookEdit";
import heart from '../svg/heart.svg';

function BookShow({book, onDelete, onEdit}){
    const [showEidt, setShowEdit] =  useState(false);
    const [click, setClick] = useState(0);
    const deleteItem = () => {
        onDelete(book.id);
    }
    const eidtItem = () => {
        setShowEdit(!showEidt);
    }
     const handleEditSubmit = (id, newTitle) => { 
        setShowEdit(false);
        onEdit(id, newTitle);
    }
    let content = <h3>{book.title}</h3>;
    if (showEidt) {
        content = <BookEdit  book={book} onSubmit={handleEditSubmit}/>;
    }
    function handleClick(){
        setClick(click + 1);
    }
    return (
        <div className="book-show"> 
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} /> 
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={eidtItem} ></button>
                <button className="delete" onClick={deleteItem} >x</button>
           </div>
           <div onClick={handleClick}>
                <img className='heart' alt='heart' src={heart} style={{width: 10 + click*10 + 'px'}}/>
           </div>
           
        </div>
    )
}

export default BookShow;